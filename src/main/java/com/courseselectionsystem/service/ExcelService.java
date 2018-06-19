package com.courseselectionsystem.service;

import com.courseselectionsystem.entity.ExcelVo;

/**
 * @author jinbin
 * @date 2018-05-08 18:09
 */
public interface ExcelService {
    /**
     * @param excelVo
     * @return 添加excel的记录
     */
    ExcelVo addExcel(ExcelVo excelVo);
}
