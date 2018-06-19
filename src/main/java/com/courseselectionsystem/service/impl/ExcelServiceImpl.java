package com.courseselectionsystem.service.impl;

import com.courseselectionsystem.entity.ExcelVo;
import com.courseselectionsystem.mapper.ExcelMapper;
import com.courseselectionsystem.service.ExcelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author jinbin
 * @date 2018-05-08 18:10
 */
@Service("ExcelService")
public class ExcelServiceImpl implements ExcelService {
    @Autowired
    ExcelMapper excelMapper;
    @Override
    public ExcelVo addExcel(ExcelVo excelVo) {
        excelMapper.addExcel(excelVo);
        return excelMapper.findExcelById(excelVo.getId());
    }
}
