package com.courseselectionsystem.service.impl;

import com.courseselectionsystem.entity.CourseVo;
import com.courseselectionsystem.mapper.CourseMapper;
import com.courseselectionsystem.service.CourseService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author jinbin
 * @date 2018-05-08 20:41
 */
@Service("CourseService")
public class CourseServiceImpl implements CourseService {
    @Autowired
    CourseMapper courseMapper;
    @Override
    public CourseVo saveCourse(CourseVo courseVo) {
        if(courseMapper.findByCourseName(courseVo.getCourseName())==null){
            courseMapper.saveCourse(courseVo);
            return findByCourseId(courseVo.getCourseId());
        }
        return null;
    }

    @Override
    public CourseVo updateCourse(CourseVo courseVo) {
        courseMapper.updateCourse(courseVo);
        return findByCourseId(courseVo.getCourseId());
    }

    @Override
    public Boolean deleteCourse(String courseId) {
        courseMapper.deleteCourse(courseId);
        CourseVo courseVo=courseMapper.findByCourseId(courseId);
        if(courseVo==null){
            return true;
        }
        return false;
    }

    @Override
    public CourseVo findByCourseId(String courseId) {
        return courseMapper.findByCourseId(courseId);
    }

    @Override
    public List<CourseVo> listCourse() {
        return courseMapper.listCourse();
    }

    @Override
    public PageInfo listCourseByPage(int pageNum, int pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        List<CourseVo> courseVoList=courseMapper.listCourse();
        PageInfo pageInfo=new PageInfo(courseVoList);
        return pageInfo;
    }

    @Override
    public List<CourseVo> listCourseByCondition(String condition) {
        return courseMapper.listCourseByCondition(condition);
    }

    @Override
    public PageInfo listCourseByCondition(String condition, int pageNum, int pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        List<CourseVo> courseVoList=courseMapper.listCourseByCondition(condition);
        PageInfo pageInfo=new PageInfo(courseVoList);
        return pageInfo;
    }
}
