package com.dmfy.Controller;

import com.dmfy.Model.Designer;
import com.dmfy.Model.Plan;
import com.dmfy.Model.User;
import com.sun.scenario.effect.impl.sw.sse.SSEBlend_SRC_OUTPeer;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.annotation.SessionScope;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.sound.midi.Soundbank;


@Controller
//@SessionAttributes("designer")
public class test {

    @RequestMapping(value = "/test1", method = RequestMethod.POST)
    public String uploadProfiles(@RequestParam("file") CommonsMultipartFile file, Model model) {
        model.addAttribute("file", file);
        return "redirect:/test3";
    }

    @RequestMapping(value = "/test2", method = RequestMethod.POST)
    public String uploadDesigner(@RequestBody Designer designer, Model model) {
        model.addAttribute("designer", designer);
        return "redirect:/test3";
    }

    @RequestMapping(value = "/test3")
    public String uploadProfiles(@RequestParam("file") CommonsMultipartFile file, @ModelAttribute("designer") Designer designer) {
        System.out.println(designer.getName());
        System.out.println(file.getName());
        return null;
    }

    @RequestMapping(value = "/test4", method = RequestMethod.POST)
    public void uploadDesigner(Designer designer) {
        System.out.println(designer.getFile().isEmpty());
        System.out.println(designer.getName());
    }

    @RequestMapping(value = "/test5", method = RequestMethod.POST)
    public void uploadPlan(Plan plan) {
        System.out.println(plan.getID());
        System.out.println(plan.getName());
        System.out.println(plan.getDesigner());
        System.out.println(plan.getType());
        System.out.println(plan.getStyle());
        System.out.println(plan.getArea());
    }
}
