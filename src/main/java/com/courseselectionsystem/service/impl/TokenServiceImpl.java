package com.courseselectionsystem.service.impl;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.courseselectionsystem.entity.UserVo;
import com.courseselectionsystem.service.TokenService;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;

/**
 * token的service实现类
 * @author jinbin
 * @date 2018-05-08 17:33
 */
@SuppressWarnings("ALL")
@Service("TokenService")
public class TokenServiceImpl implements TokenService {
    @Override
    public String getToken(UserVo userVo) {
        String token="";
        try {
            token= JWT.create().withAudience(userVo.getUserId())// 将 user id 保存到 token 里面
                    .sign(Algorithm.HMAC256(userVo.getPassword()));// 以 password 作为 token 的密钥
        }
        catch (UnsupportedEncodingException ignor){

        }
        return token;
    }
}
