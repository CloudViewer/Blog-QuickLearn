package com.learn.es.manage;

import com.alibaba.fastjson.JSONObject;
import com.learn.es.comm.response.ResponseData;
import com.learn.es.comm.utils.ESCache;
import com.learn.es.comm.utils.ESUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Iterator;
import java.util.Map;


/**
 * Created by Ale on 2020/9/7
 */
@Service
public class ESCommManage {


    @Resource
    ESCache<Object> esCache;


    /**
     * 登录验证码
     * @return
     * @throws Throwable
     */
    public ResponseData getVCode() throws Throwable{
        Map<String, String> map = ESUtils.createVCode(120, 30, 4, 60);
        boolean flag = false;
        String key = null;
        String value = null;
        String ruId = ESUtils.getUUID();
        Iterator<Map.Entry<String, String>> iterator = map.entrySet().iterator();
        while (iterator.hasNext()){
            Map.Entry<String, String> entry = iterator.next();
            key = entry.getKey();
            value = entry.getValue();
            flag = esCache.set(ruId, key, 30);
        }
        if(!flag){
            return ResponseData.userError("网络错误");
        }
        return ResponseData.data().set("verifyCode",value).set("key",ruId);
    }

    /**
     * 登录处理
     * @param param
     * @return
     */
    public ResponseData doLogin(JSONObject param) {
        if(param == null){
            return ResponseData.userError("参数错误");
        }

        JSONObject data = param.getJSONObject("data");
        String vKey = ESUtils.jsonGetString(data, "key");

        // 检查Key
        boolean hasKey = esCache.hasKey(vKey);
        long outTime = esCache.getExpire(vKey);
        if(!hasKey || outTime < 0L){
            return ResponseData.userError("验证码已失效,请重新刷新试试~");
        }

        String verifyCode = ESUtils.jsonGetString(data, "verifyCode");
        if(verifyCode.isEmpty() || !String.valueOf(esCache.get(vKey)).equals(verifyCode)){
            return ResponseData.userError("验证码错误~");
        }

        String userName = ESUtils.jsonGetString(data, "userName");
        String password = ESUtils.jsonGetString(data, "password");

        return ResponseData.data().set("success", true);
    }
}
