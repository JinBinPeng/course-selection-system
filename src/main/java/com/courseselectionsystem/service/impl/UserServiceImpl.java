package com.courseselectionsystem.service.impl;

import com.courseselectionsystem.entity.UserVo;
import com.courseselectionsystem.mapper.UserMapper;
import com.courseselectionsystem.service.UserService;
import com.courseselectionsystem.utils.PasswordUtils;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author jinbin
 * @date 2018-05-08 17:30
 */
@Service("UserService")
public class UserServiceImpl implements UserService {
    @Autowired
    UserMapper userMapper;
    @Override
    public UserVo addUser(UserVo userVo) {
        if(userMapper.findUserByName(userVo.getName())==null
                &&userMapper.findUserByStudentNumber(userVo.getStudentNumber())==null){
            String passwordHash= PasswordUtils.passwordToHash(userVo.getPassword());
            userVo.setPassword(passwordHash);
            userMapper.saveUser(userVo);
            return userMapper.findUserById(userVo.getUserId());
        }
        return null;
    }

    @Override
    public UserVo updateUser(UserVo userVo) {
        if(!StringUtils.isEmpty(userVo.getName())
                ||!StringUtils.isEmpty(userVo.getPassword())
                ||!StringUtils.isEmpty(userVo.getDepartment())
                ||!StringUtils.isEmpty(userVo.getPhoneNumber())){
            if(userVo.getPassword()!=null){
                userVo.setPassword(PasswordUtils.passwordToHash(userVo.getPassword()));
            }
            userMapper.updateUser(userVo);
            return userMapper.findUserById(userVo.getUserId());
        }
        return null;
    }

    @Override
    public boolean deleteUser(String userId) {
        userMapper.deleteUser(userId);
        UserVo userVo=userMapper.findUserById(userId);
        if(userVo==null){
            return true;
        }
        return false;
    }

    @Override
    public UserVo findUserById(String userId) {
        return userMapper.findUserById(userId);
    }

    @Override
    public UserVo findUserByStudentNumber(String studentNumber) {
        return userMapper.findUserByStudentNumber(studentNumber);
    }

    @Override
    public UserVo findByUserVo(UserVo userVo) {
        return userMapper.findByUserVo(userVo);
    }


    @Override
    public List<UserVo> listUser() {
        return  userMapper.listUser();
    }

    @Override
    public PageInfo listUserByPage(int pageNum, int pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        List<UserVo> userVoList=userMapper.listUser();
        PageInfo pageInfo=new PageInfo(userVoList);
        return pageInfo;
    }

    @Override
    public List<UserVo> listUserByCondition(String condition) {
        return userMapper.listUserByCondition(condition);
    }

    @Override
    public PageInfo listUserByCondition(String condition, int pageNum, int pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        List<UserVo> userVoList=userMapper.listUserByCondition(condition);
        PageInfo pageInfo=new PageInfo(userVoList);
        return pageInfo;
    }
}
