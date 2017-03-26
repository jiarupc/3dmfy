package com.dmfy.Controller;

import com.dmfy.Model.User;
import com.dmfy.Service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import javax.annotation.Resource;

@Controller
@SessionAttributes("user")
public class UserController {
    @Resource
    private UserService userService;

    @RequestMapping(value = "/admin/login", method = RequestMethod.POST)
    public String login(User user, ModelMap model) {
        User userSession = userService.login(user);
        if (userSession != null) {
            model.addAttribute("user", userSession);
            return "redirect:/admin/plan/2";
        }
        return "redirect:/admin/index";
    }

    @RequestMapping(value = "/test6")
    public void test6(@ModelAttribute("user") User user) {
        System.out.println(user.getUsername());
    }
}
