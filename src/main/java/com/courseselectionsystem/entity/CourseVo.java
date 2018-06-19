package com.courseselectionsystem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author jinbin
 * @date 2018-05-08 19:40
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CourseVo {
    String courseId;
    String courseNumber;
    String courseName;
    String credits;
    String courseTeacher;
    Long createTime;
}
