package com.courseselectionsystem.api;

import com.courseselectionsystem.ResultObject;
import com.courseselectionsystem.annotation.UserLoginToken;
import com.courseselectionsystem.constant.HttpCode;
import com.courseselectionsystem.entity.UserCourseVo;
import com.courseselectionsystem.service.UserCourseService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @author jinbin
 * @date 2018-05-09 16:39
 */
@RestController
@RequestMapping("api")
public class UserCourseApi {
    @Autowired
    UserCourseService userCourseService;
    //添加选课信息
    @UserLoginToken
    @PostMapping("/userCourse")
    public Object addUserCourse(@RequestBody UserCourseVo userCourseVo){
        String msg= "";
        Object data= null;
        ResultObject resultObject=new ResultObject();
        if(StringUtils.isEmpty(userCourseVo.getUserId())||StringUtils.isEmpty(userCourseVo.getCourseId())){
            resultObject.setSuccess(false).setCode(HttpCode.UNAUTHORIZED).setMsg("有数据为空，不合法");
            return resultObject;
        }else {
            data=userCourseService.saveUserCourse(userCourseVo);
            msg="选课成功";
            resultObject.setCode(HttpCode.OK).setData(data).setSuccess(true).setMsg(msg);
            return resultObject;
        }
    }
    //删除选课信息
    @UserLoginToken
    @DeleteMapping("/userCourse/{id}")
    public Object deleteUserCourse(@PathVariable(value = "id") String id){
        ResultObject resultObject=new ResultObject();
        if(userCourseService.findById(id)==null){
            resultObject.setSuccess(false).setCode(HttpCode.UNAUTHORIZED).setMsg("该学生信息不存在");
            return resultObject;
        }else {
            userCourseService.deleteUserCourse(id);
            resultObject.setCode(HttpCode.OK).setSuccess(true).setMsg("删除成功");
            return resultObject;
        }
    }
    //获取学生选课列表信息
    @UserLoginToken
    @PutMapping("/userCourse")
    public ResultObject listUser(@RequestParam(defaultValue = "1") int pageNum,
                                 @RequestParam(defaultValue = "5") int pageSize,
                                 @RequestParam(defaultValue = "false") boolean all,
                                 @RequestBody UserCourseVo userCourseVo){
        String msg= "";
        Object data= null;
        ResultObject resultObject=new ResultObject();
            if (!all) {
                data = userCourseService.listUserCourseByPage(pageNum, pageSize, userCourseVo);
                msg = "获取第" + pageNum + "页学生信息成功";
            }
            if (all) {
                data = userCourseService.listUserCourse(userCourseVo);
                msg = "获取学生信息成功";
            }
            resultObject.setCode(HttpCode.OK).setData(data).setSuccess(true).setMsg(msg);
            return resultObject;
    }
}
