package com.courseselectionsystem.api;

import com.alibaba.fastjson.JSONObject;
import com.courseselectionsystem.ResultObject;
import com.courseselectionsystem.annotation.PassToken;
import com.courseselectionsystem.annotation.UserLoginToken;
import com.courseselectionsystem.constant.HttpCode;
import com.courseselectionsystem.entity.ExcelVo;
import com.courseselectionsystem.entity.UserVo;
import com.courseselectionsystem.service.ExcelService;
import com.courseselectionsystem.service.TokenService;
import com.courseselectionsystem.service.UserCourseService;
import com.courseselectionsystem.service.UserService;
import com.courseselectionsystem.utils.PasswordUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.net.URL;

/**
 * @author jinbin
 * @date 2018-05-08 17:58
 */
@RestController
@RequestMapping("api")
public class UserApi {
    @Autowired
    UserService userService;
    @Autowired
    TokenService tokenService;
    @Autowired
    ExcelService excelService;
    @Autowired
    UserCourseService userCourseService;
    //学号登录
    @PostMapping("/login")
    public Object login(@RequestBody UserVo userVo){
        ResultObject resultObject=new ResultObject();
        JSONObject jsonObject=new JSONObject();
        UserVo userForBase=userService.findUserByStudentNumber(userVo.getStudentNumber());
        if(userForBase==null){
            resultObject.setSuccess(false).setCode(HttpCode.UNAUTHORIZED).setMsg("登录失败,学号不存在");
            return resultObject;
        }else {
            if (!userForBase.getPassword().equals(PasswordUtils.passwordToHash(userVo.getPassword()))){
                resultObject.setSuccess(false).setCode(HttpCode.UNAUTHORIZED).setMsg("登录失败,密码错误");
                return resultObject;
            }else {
                String token = tokenService.getToken(userForBase);
                jsonObject.put("token", token);
                jsonObject.put("user", userForBase);
                resultObject.setCode(HttpCode.OK).setData(jsonObject).setSuccess(true).setMsg("登录成功");
                return resultObject;
            }
        }
    }
    @PostMapping("/loginout")
    @UserLoginToken
    public ResultObject getWebToken(HttpServletRequest request) {
        ResultObject resultObject = new ResultObject();
        HttpSession httpSession = request.getSession();
        httpSession.invalidate();
        return resultObject.setCode(200).setData(null).setSuccess(true).setMsg("退出成功");
    }
    //添加学生信息
    @UserLoginToken
    @PostMapping("/user")
    public Object addUser(@RequestBody UserVo userVo){
        String msg= "";
        Object data= null;
        ResultObject resultObject=new ResultObject();
        UserVo userForBase=userService.findUserByStudentNumber(userVo.getStudentNumber());
        if(userForBase!=null){
            resultObject.setSuccess(false).setCode(HttpCode.UNAUTHORIZED).setMsg("该学号已存在，请勿重复添加");
            return resultObject;
        }else {
            data=userService.addUser(userVo);
            msg="添加成功";
            resultObject.setCode(HttpCode.OK).setData(data).setSuccess(true).setMsg(msg);
            return resultObject;
        }
    }
    //导入Excel文件添加学生
    @UserLoginToken
    @PostMapping("/user/excel")
    public Object importExcel(@RequestBody ExcelVo excelVo, HttpServletRequest request) throws IOException {
        ResultObject resultObject=new ResultObject();
        UserVo loginUser=(UserVo) request.getAttribute("currentUser");
        //保存上传的excel路径
        Object data=excelService.addExcel(excelVo);
        //FileInputStream不支持从网络路径获取数据，用url可以
        URL excelUrl = new URL(excelVo.getExcelUrl());
        XSSFWorkbook book = new XSSFWorkbook(excelUrl.openStream());
        XSSFSheet sheet = book.getSheetAt(0);
        UserVo userVo = new UserVo();
        for (int i = 2; i < sheet.getLastRowNum() + 1; i++) {
            XSSFRow row = sheet.getRow(i);
            //列中的内容都设置成String类型格式
            row.getCell(0).setCellType(CellType.STRING);
            userVo.setDepartment(row.getCell(0).getStringCellValue());
            row.getCell(1).setCellType(CellType.STRING);
            userVo.setStudentNumber(row.getCell(1).getStringCellValue());
            row.getCell(2).setCellType(CellType.STRING);
            userVo.setName(row.getCell(2).getStringCellValue());
            row.getCell(3).setCellType(CellType.STRING);
            userVo.setSex(row.getCell(3).getStringCellValue());
            row.getCell(4).setCellType(CellType.STRING);
            userVo.setPhoneNumber(row.getCell(4).getStringCellValue());
            row.getCell(5).setCellType(CellType.STRING);
            userVo.setPassword(row.getCell(5).getStringCellValue());
            userService.addUser(userVo);
        }
        resultObject.setCode(HttpCode.OK).setData(data).setSuccess(true).setMsg("导入成功");
        return resultObject;
    }
    //删除学生
    @UserLoginToken
    @DeleteMapping("/user/{userId}")
    public Object deleteUser(@PathVariable(value = "userId") String userId, HttpServletRequest request){
        ResultObject resultObject=new ResultObject();
            if(userService.findUserById(userId)==null){
                resultObject.setSuccess(false).setCode(HttpCode.UNAUTHORIZED).setMsg("该学生信息不存在");
                return resultObject;
            }else {
                userCourseService.deleteUserCourseByUserId(userId);
                userService.deleteUser(userId);
                resultObject.setCode(HttpCode.OK).setSuccess(true).setMsg("删除成功");
                return resultObject;
            }
    }
    //更新学生信息
    @UserLoginToken
    @PutMapping("/user")
    public Object updateUser(@RequestBody UserVo userVo){
        String msg= "";
        Object data= null;
        ResultObject resultObject=new ResultObject();
        if(userService.findUserById(userVo.getUserId())==null){
            resultObject.setSuccess(false).setCode(HttpCode.UNAUTHORIZED).setMsg("该学生信息不存在");
            return resultObject;
        }else {
            data=userService.updateUser(userVo);
            msg="信息更新成功";
            resultObject.setCode(HttpCode.OK).setData(data).setSuccess(true).setMsg(msg);
            return resultObject;
        }
    }
    //根据学号查询学生信息
    @PassToken
    @GetMapping("/user/{studentNumber}")
    public ResultObject findUserByStudentNumber(@PathVariable(value = "studentNumber") String studentNumber){
        String msg;
        Object data;
        ResultObject resultObject=new ResultObject();
        data=userService.findUserByStudentNumber(studentNumber);
        if(data==null){
            resultObject.setSuccess(false).setCode(HttpCode.UNAUTHORIZED).setMsg("该学生信息不存在");
            return resultObject;
        }else {
            msg="查询信息成功";
            resultObject.setCode(HttpCode.OK).setData(data).setSuccess(true).setMsg(msg);
            return resultObject;
        }
    }
    //根据学号或手机号或姓名查询学生信息
    @PassToken
    @PutMapping("/userVo")
    public ResultObject findUserByUserVo(@RequestBody UserVo userVo){
        String msg;
        Object data;
        ResultObject resultObject=new ResultObject();
        data=userService.findByUserVo(userVo);
        if(data==null){
            resultObject.setSuccess(false).setCode(HttpCode.UNAUTHORIZED).setMsg("该学生信息不存在");
            return resultObject;
        }else {
            msg="查询信息成功";
            resultObject.setCode(HttpCode.OK).setData(data).setSuccess(true).setMsg(msg);
            return resultObject;
        }
    }
    //获取学生列表信息
    @UserLoginToken
    @GetMapping("/user")
    public ResultObject listUser(@RequestParam(defaultValue = "1") int pageNum,
                                 @RequestParam(defaultValue = "5") int pageSize,
                                 @RequestParam(defaultValue = "false") boolean all,
                                 @RequestParam(defaultValue = "") String condition){
        String msg= "";
        Object data= null;
        ResultObject resultObject=new ResultObject();
        //在没用查询条件的状态下
        if ("".equals(condition)) {
            if (!all) {
                data = userService.listUserByPage(pageNum, pageSize);
                msg = "获取第" + pageNum + "页学生信息成功";
            }
            if (all) {
                data = userService.listUser();
                msg = "获取学生信息成功";
            }
            resultObject.setCode(HttpCode.OK).setData(data).setSuccess(true).setMsg(msg);
            return resultObject;
        }
        //使用了查询条件的状态下
        if (!all) {
            data = userService.listUserByCondition(condition, pageNum, pageSize);
            msg = "根据搜索条件获取第" + pageNum + "页学生信息成功";
        }
        if (all) {
            data = userService.listUserByCondition(condition);
            msg = "根据搜索条件获取学生信息成功";
        }
        resultObject.setCode(HttpCode.OK).setData(data).setSuccess(true).setMsg(msg);
        return resultObject;
    }
}
