package com.courseselectionsystem.service;

import com.courseselectionsystem.entity.UserVo;
import com.github.pagehelper.PageInfo;

import java.util.List;

/**
 * @author jinbin
 * @date 2018-05-08 17:27
 */
public interface UserService {
    UserVo addUser(UserVo userVo);
    UserVo updateUser(UserVo userVo);
    boolean deleteUser(String userId);
    UserVo findUserById(String userId);
    UserVo findUserByStudentNumber(String studentNumber);
    UserVo findByUserVo(UserVo userVo);
    List<UserVo> listUser();
    PageInfo listUserByPage(int pageNum, int pageSize);
    List<UserVo> listUserByCondition(String condition);
    PageInfo listUserByCondition(String condition,int pageNum, int pageSize);
}
