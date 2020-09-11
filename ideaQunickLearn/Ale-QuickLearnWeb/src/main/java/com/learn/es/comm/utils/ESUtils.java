package com.learn.es.comm.utils;

import com.alibaba.fastjson.JSONObject;
import com.learn.es.comm.builder.ValidateCodeBuilder;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;


/**
 * Created by Ale on 2020/9/7
 */
public class ESUtils {

    private static JSONObject runCache = null;

    /**
     * 去空格
     * @param v
     * @return
     */
    public static String trim(Object v) {
        return v != null ? v.toString().trim() : "";
    }


    /**
     * 创建验证码
     * @param width
     * @param height
     * @param codeCount
     * @param lineCount
     * @return
     * @throws IOException
     */
    public static Map<String,String> createVCode(int width, int height, int codeCount, int lineCount) throws IOException {
        ValidateCodeBuilder vCode = new ValidateCodeBuilder(width, height, codeCount, lineCount);
        Map<String, String> map = new HashMap<>();
        map.put(vCode.getCode(),vCode.imageToBytes(vCode.getBuffImg(), "png"));
        return map;
    }

    public static JSONObject setRunCache(String key, String v) {
        runCache = new JSONObject(new HashMap<>()).fluentPut(key, v);
        return runCache;
    }

    public static String getRunCache(String key){
        if(runCache != null){
          return  runCache.getString(key);
        }
        return null;
    }

    public static void removeRunCache(String key) {
        if (runCache != null) {
            JSONObject jsonObject = runCache.fluentRemove(key);
        }
    }

    public static int jsonGetInt(JSONObject j, String key) {
        Object v = j != null && key != null ? j.get(key) : null;
        return toInt(v);
    }

    /**
     * Object 转 int
     *
     * @param o
     * @return
     */
    public static int toInt(Object o) {
        long l = toLong(o);
        return l <= 2147483647L && l >= -2147483648L ? Integer.valueOf(String.valueOf(l)) : 0;
    }

    /**
     * Json 转 String
     *
     * @param j
     * @param key
     * @return
     */
    public static String jsonGetString(JSONObject j, String key) {
        Object v = j != null && key != null ? j.get(key) : null;
        return v != null ? String.valueOf(v) : "";
    }

    /**
     * Object 转 long
     *
     * @param o
     * @return
     */
    public static long toLong(Object o) {
        String t = trim(o);
        int p = t.indexOf(".");
        if (p >= 0) {
            t = t.substring(0, p);
        }

        try {
            return Long.valueOf(t);
        } catch (Throwable var4) {
            return 0L;
        }
    }

    public static JSONObject jsonGetObject(JSONObject j, String key) {
        return jsonGetT(j, key);
    }


    public static <T> T jsonGetT(JSONObject j, String key) {
        if (j == null) {
            return null;
        } else {
            key = trim(key);
            if (key.equals("")) {
                return null;
            } else {
                try {
                    return (T) j.get(key);
                } catch (Throwable var3) {
                    return null;
                }
            }
        }
    }

    public static String getUUID() {
        return UUID.randomUUID().toString().replaceAll("-", "");
    }
}
