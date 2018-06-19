package com.courseselectionsystem.api;

import com.courseselectionsystem.ResultObject;
import com.courseselectionsystem.annotation.PassToken;
import com.courseselectionsystem.annotation.UserLoginToken;
import com.courseselectionsystem.constant.HttpCode;
import com.courseselectionsystem.entity.CourseVo;
import com.courseselectionsystem.entity.ExcelVo;
import com.courseselectionsystem.entity.UserVo;
import com.courseselectionsystem.service.CourseService;
import com.courseselectionsystem.service.ExcelService;
import com.courseselectionsystem.service.UserCourseService;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.net.URL;

/**
 * @author jinbin
 * @date 2018-05-08 20:57
 */
@RestController
@RequestMapping("api")
public class CourseApi {
    @Autowired
    CourseService courseService;
    @Autowired
    ExcelService excelService;
    @Autowired
    UserCourseService userCourseService;
    @UserLoginToken
    @PostMapping("/course")
    public Object addCourse(@RequestBody CourseVo courseVo){
        String msg= "";
        Object data= null;
        ResultObject resultObject=new ResultObject();
        data=courseService.saveCourse(courseVo);
        if(data==null){
            resultObject.setSuccess(false).setCode(HttpCode.UNAUTHORIZED).setMsg("该课程已存在，请勿重复添加");
            return resultObject;
        }else {
            msg="添加成功";
            resultObject.setCode(HttpCode.OK).setData(data).setSuccess(true).setMsg(msg);
            return resultObject;
        }
    }
    //导入Excel文件添加课程
    @UserLoginToken
    @PostMapping("/course/excel")
    public Object importExcel(@RequestBody ExcelVo excelVo) throws IOException {
        ResultObject resultObject=new ResultObject();
        //保存上传的excel路径
        Object data=excelService.addExcel(excelVo);
        //FileInputStream不支持从网络路径获取数据，用url可以
        URL excelUrl = new URL(excelVo.getExcelUrl());
        XSSFWorkbook book = new XSSFWorkbook(excelUrl.openStream());
        XSSFSheet sheet = book.getSheetAt(0);
        CourseVo courseVo=new CourseVo();
        for (int i = 2; i < sheet.getLastRowNum() + 1; i++) {
            XSSFRow row = sheet.getRow(i);
            //列中的内容都设置成String类型格式
            row.getCell(0).setCellType(CellType.STRING);
            courseVo.setCourseNumber(row.getCell(0).getStringCellValue());
            row.getCell(1).setCellType(CellType.STRING);
            courseVo.setCourseName(row.getCell(1).getStringCellValue());
            row.getCell(2).setCellType(CellType.STRING);
            courseVo.setCredits(row.getCell(2).getStringCellValue());
            row.getCell(3).setCellType(CellType.STRING);
            courseVo.setCourseTeacher(row.getCell(3).getStringCellValue());
            courseService.saveCourse(courseVo);
        }
        resultObject.setCode(HttpCode.OK).setData(data).setSuccess(true).setMsg("导入成功");
        return resultObject;
    }
    //删除课程
    @UserLoginToken
    @DeleteMapping("/course/{courseId}")
    public Object deleteCourse(@PathVariable(value = "courseId") String courseId, HttpServletRequest request){
        ResultObject resultObject=new ResultObject();
        UserVo userVo=(UserVo) request.getAttribute("currentUser");
        if(courseService.findByCourseId(courseId)==null){
            resultObject.setSuccess(false).setCode(HttpCode.UNAUTHORIZED).setMsg("该课程信息不存在");
            return resultObject;
        }else {
            userCourseService.deleteUserCourseByCourseId(courseId);
            courseService.deleteCourse(courseId);
            resultObject.setCode(HttpCode.OK).setSuccess(true).setMsg("删除成功");
            return resultObject;
        }
    }
    //更新课程信息
    @UserLoginToken
    @PutMapping("/course")
    public Object updateCourse(@RequestBody CourseVo courseVo){
        String msg= "";
        Object data= null;
        ResultObject resultObject=new ResultObject();
        if(courseService.findByCourseId(courseVo.getCourseId())==null){
            resultObject.setSuccess(false).setCode(HttpCode.UNAUTHORIZED).setMsg("该课程信息不存在");
            return resultObject;
        }else {
            data=courseService.updateCourse(courseVo);
            msg="信息更新成功";
            resultObject.setCode(HttpCode.OK).setData(data).setSuccess(true).setMsg(msg);
            return resultObject;
        }
    }
    //获取课程列表信息
    @UserLoginToken
    @GetMapping("/course")
    public ResultObject listCourse(@RequestParam(defaultValue = "1") int pageNum,
                                 @RequestParam(defaultValue = "5") int pageSize,
                                 @RequestParam(defaultValue = "false") boolean all,
                                 @RequestParam(defaultValue = "") String condition){
        String msg= "";
        Object data= null;
        ResultObject resultObject=new ResultObject();
        //在没用查询条件的状态下
        if ("".equals(condition)) {
            if (!all) {
                data = courseService.listCourseByPage(pageNum, pageSize);
                msg = "获取第" + pageNum + "页课程信息成功";
            }
            if (all) {
                data = courseService.listCourse();
                msg = "获取课程信息成功";
            }
            resultObject.setCode(HttpCode.OK).setData(data).setSuccess(true).setMsg(msg);
            return resultObject;
        }
        //使用了查询条件的状态下
        if (!all) {
            data = courseService.listCourseByCondition(condition, pageNum, pageSize);
            msg = "根据搜索条件获取第" + pageNum + "页课程信息成功";
        }
        if (all) {
            data = courseService.listCourseByCondition(condition);
            msg = "根据搜索条件获取课程信息成功";
        }
        resultObject.setCode(HttpCode.OK).setData(data).setSuccess(true).setMsg(msg);
        return resultObject;
    }
}
