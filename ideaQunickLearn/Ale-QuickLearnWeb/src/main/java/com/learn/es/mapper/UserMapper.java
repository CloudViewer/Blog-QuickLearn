package com.learn.es.mapper;

import com.learn.es.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

/**
 * Created by Ale on 2020/9/14
 */
@Mapper
public interface UserMapper {
   public User getUser(@Param("username") String name, @Param("password") String password);
}
