package com.learn.es.comm.config.cors;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Created by Ale on 2020/9/7
 */
@Configuration
public class CorsConfig implements WebMvcConfigurer {

    /**
     * 前后端跨域处理
     * @param registry
     */
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")  // /**代表所有路径
                .allowedOrigins("*")           // allowOrigin指可以通过的ip，*代表所有，可以使用指定的ip，多个的话可以用逗号分隔，默认为*
                .allowCredentials(true)        // 支持证书，默认为tru
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")  // 指请求方式 默认为*
                .maxAge(3600);  // 准备响应前的 缓存持续的 最大时间
    }
}
