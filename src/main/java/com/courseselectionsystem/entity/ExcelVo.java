package com.courseselectionsystem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author jinbin
 * @date 2018-05-08 18:02
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExcelVo {
    String id;
    String excelUrl;
    Long createTime;
}
