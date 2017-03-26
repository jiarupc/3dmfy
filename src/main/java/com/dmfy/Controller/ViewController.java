package com.dmfy.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * html返回
 */
@Controller
public class ViewController {

    @RequestMapping("/admin/index")
    public String login() {
        return "login";
    }

    @RequestMapping("/index")
    public String index() {
        return "index";
    }

    @RequestMapping("/admin/designer/1")
    public String designerAdd() {
        return "designer_add";
    }

    @RequestMapping("/admin/designer/2")
    public String designerEdit() {
        return "designer_edit";
    }

    @RequestMapping("/admin/plan/1")
    public String planAdd() {
        return "plan_add";
    }

    @RequestMapping("/admin/plan/2")
    public String planEdit() {
        return "plan_edit";
    }

    @RequestMapping("/test")
    public String test() {
        return "test";
    }

}
