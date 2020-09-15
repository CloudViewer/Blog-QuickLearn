package com.learn.es.service.impl;

import com.learn.es.mapper.UserMapper;
import com.learn.es.pojo.User;
import com.learn.es.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * Created by Ale on 2020/9/14
 */
@Service
public class UserServiceImpl implements UserService {
    @Resource
    private UserMapper userMapper;


    @Override
    public User getUser(String name, String password) {
        return userMapper.getUser(name,password);
    }
}
