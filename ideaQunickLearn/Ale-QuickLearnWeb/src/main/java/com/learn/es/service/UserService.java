package com.learn.es.service;

import com.learn.es.pojo.User;

/**
 * Created by Ale on 2020/9/14
 */
public interface UserService {

    public User getUser(String name,String password);
}
