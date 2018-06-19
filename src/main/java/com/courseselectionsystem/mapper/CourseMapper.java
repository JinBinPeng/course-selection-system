package com.courseselectionsystem.mapper;

import com.courseselectionsystem.entity.CourseVo;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @author jinbin
 * @date 2018-05-08 20:19
 */
public interface CourseMapper {
    void saveCourse(CourseVo courseVo);
    void updateCourse(CourseVo courseVo);
    void deleteCourse(@Param("courseId") String courseId);
    CourseVo findByCourseId(@Param("courseId") String courseId);
    CourseVo findByCourseName(@Param("courseName") String courseName);
    List<CourseVo> listCourse();
    List<CourseVo> listCourseByCondition(@Param("condition") String condition);
}
