package com.courseselectionsystem.service;

import com.courseselectionsystem.entity.UserCourseVo;
import com.github.pagehelper.PageInfo;

import java.util.List;

/**
 * @author jinbin
 * @date 2018-05-08 21:54
 */
public interface UserCourseService {
    UserCourseVo saveUserCourse(UserCourseVo userCourseVo);
    UserCourseVo findById(String id);
    Boolean deleteUserCourse(String id);
    Boolean deleteUserCourseByUserId(String userId);
    Boolean deleteUserCourseByCourseId(String courseId);
    List<UserCourseVo> listUserCourse(UserCourseVo userCourseVo);
    PageInfo listUserCourseByPage(int pageNum, int pageSize,UserCourseVo userCourseVo);
}
