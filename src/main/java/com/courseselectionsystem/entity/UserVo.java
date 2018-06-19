package com.courseselectionsystem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author jinbin
 * @date 2018-05-08 17:19
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserVo {
    String userId;
    String name;
    String password;
    String studentNumber;
    String phoneNumber;
    String sex;
    String department;
    Long createTime;
    Long updateTime;
    Boolean delete;
    Integer type;
}
