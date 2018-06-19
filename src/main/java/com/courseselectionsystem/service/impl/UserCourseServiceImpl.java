package com.courseselectionsystem.service.impl;

import com.courseselectionsystem.entity.UserCourseVo;
import com.courseselectionsystem.mapper.UserCourseMapper;
import com.courseselectionsystem.service.UserCourseService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author jinbin
 * @date 2018-05-08 21:56
 */
@Service("UserCourseService")
public class UserCourseServiceImpl implements UserCourseService {
    @Autowired
    UserCourseMapper userCourseMapper;
    @Override
    public UserCourseVo saveUserCourse(UserCourseVo userCourseVo) {
        if(userCourseMapper.findByUserIdAndCourseId(userCourseVo)==null){
            userCourseMapper.saveUserCourse(userCourseVo);
            return findById(userCourseVo.getId());
        }else {
            return null;
        }
    }

    @Override
    public UserCourseVo findById(String id) {
        return userCourseMapper.findById(id);
    }

    @Override
    public Boolean deleteUserCourse(String id) {
        userCourseMapper.deleteUserCourse(id);
        UserCourseVo userCourseVo=userCourseMapper.findById(id);
        if(userCourseVo==null){
            return true;
        }
        return false;
    }

    @Override
    public Boolean deleteUserCourseByUserId(String userId) {
        userCourseMapper.deleteUserCourseByUserId(userId);
        return true;
    }

    @Override
    public Boolean deleteUserCourseByCourseId(String courseId) {
        userCourseMapper.deleteUserCourseByCourseId(courseId);
        return true;
    }

    @Override
    public List<UserCourseVo> listUserCourse(UserCourseVo userCourseVo) {
        return userCourseMapper.listCourse(userCourseVo);
    }

    @Override
    public PageInfo listUserCourseByPage(int pageNum, int pageSize,UserCourseVo userCourseVo) {
        PageHelper.startPage(pageNum, pageSize);
        List<UserCourseVo> userCourseVoList=userCourseMapper.listCourse(userCourseVo);
        PageInfo pageInfo=new PageInfo(userCourseVoList);
        return pageInfo;
    }
}
