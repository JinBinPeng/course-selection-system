package com.courseselectionsystem.mapper;

import com.courseselectionsystem.entity.ExcelVo;
import org.apache.ibatis.annotations.Param;

/**
 * @author jinbin
 * @date 2018-05-08 18:03
 */
public interface ExcelMapper {
    void addExcel(ExcelVo excelVo);
    ExcelVo findExcelById(@Param("id") String id);
}
