package com.lj.ddhweb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 类的相关描述
 *
 * @author: 李杰
 * @date: 2020/5/18
 **/
@Controller
public class SystemController {
    @RequestMapping("/index")
    public String index(ModelMap modelMap){
        return "index";
    }

    @RequestMapping("/index_1")
    public String index1(ModelMap modelMap){
        return "index_1";
    }

    @RequestMapping("/my")
    public String cate(ModelMap modelMap){
        return "my";
    }

    @RequestMapping("/gwc")
    public String gwc(ModelMap modelMap){
        return "gwc";
    }

    @RequestMapping("/message")
    public String message(ModelMap modelMap){
        return "message";
    }

    @RequestMapping("/seacher")
    public String seacher(ModelMap modelMap){
        return "seacher";
    }

    @RequestMapping("/goods")
    public String goods(ModelMap modelMap){
        return "goods";
    }
}
