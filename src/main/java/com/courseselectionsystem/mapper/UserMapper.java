package com.courseselectionsystem.mapper;

import com.courseselectionsystem.entity.UserVo;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @author jinbin
 * @date 2018-05-08 17:21
 */
public interface UserMapper {
    void saveUser(UserVo userVo);
    void updateUser(UserVo userVo);
    void deleteUser(@Param("userId") String userId);
    UserVo findUserById(@Param("userId") String userId);
    UserVo findUserByPhoneNumber(@Param("phoneNumber") String phoneNumber);
    UserVo findUserByName(@Param("name") String name);
    UserVo findUserByStudentNumber(@Param("studentNumber") String studentNumber);
    UserVo findByUserVo(UserVo userVo);
    List<UserVo> listUser();
    List<UserVo> listUserByCondition(@Param("condition") String condition);
}
