package com.courseselectionsystem.service;

import com.courseselectionsystem.entity.CourseVo;
import com.github.pagehelper.PageInfo;

import java.util.List;

/**
 * @author jinbin
 * @date 2018-05-08 20:39
 */
public interface CourseService {
    CourseVo saveCourse(CourseVo courseVo);
    CourseVo updateCourse(CourseVo courseVo);
    Boolean deleteCourse(String courseId);
    CourseVo findByCourseId(String courseId);
    List<CourseVo> listCourse();
    PageInfo listCourseByPage(int pageNum, int pageSize);
    List<CourseVo> listCourseByCondition(String condition);
    PageInfo listCourseByCondition(String condition,int pageNum, int pageSize);
}
