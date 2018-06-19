package com.courseselectionsystem.service;

import com.courseselectionsystem.entity.UserVo;

/**
 * @author jinbin
 * @date 2018-05-08 17:33
 */
public interface TokenService {
    /**
     * @description 获取token
     **/
    public String getToken(UserVo userVo);
}
