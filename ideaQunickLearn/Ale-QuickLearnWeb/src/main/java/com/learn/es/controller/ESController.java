package com.learn.es.controller;

import com.alibaba.fastjson.JSONObject;
import com.learn.es.comm.response.ResponseData;
import com.learn.es.manage.ESCommManage;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
 * Created by Ale on 2020/9/7
 */
@RestController
@RequestMapping("/bs")
public class ESController {

    @Resource
    private ESCommManage esCommManage;

    @RequestMapping(value = "/verifycode", method = RequestMethod.POST)
    public ResponseData getVerifyCode() throws Throwable{
        return esCommManage.getVCode();
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseData doLogin(@RequestBody JSONObject param){
        return esCommManage.doLogin(param);
    }
}
