package com.courseselectionsystem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author jinbin
 * @date 2018-05-08 21:20
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserCourseVo {
    String id;
    String userId;
    UserVo userVo;
    String courseId;
    CourseVo courseVo;
    Long createTime;
}
