package com.courseselectionsystem.mapper;

import com.courseselectionsystem.entity.UserCourseVo;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @author jinbin
 * @date 2018-05-08 21:22
 */
public interface UserCourseMapper {
    void saveUserCourse(UserCourseVo userCourseVo);
    void deleteUserCourse(@Param("id") String id);
    void deleteUserCourseByUserId(@Param("userId") String userId);
    void deleteUserCourseByCourseId(@Param("courseId") String courseId);
    UserCourseVo findByUserIdAndCourseId(UserCourseVo userCourseVo);
    UserCourseVo findById(@Param("id") String id);
    List<UserCourseVo> listCourse(UserCourseVo userCourseVo);
}
