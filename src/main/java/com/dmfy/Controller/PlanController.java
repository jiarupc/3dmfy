package com.dmfy.Controller;

import com.dmfy.Model.Plan;
import com.dmfy.Service.PlanService;
import org.springframework.http.StreamingHttpOutputMessage;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@Controller
@SessionAttributes("plan")
public class PlanController {
    @Resource
    private PlanService planService;

    @RequestMapping(value = "/plan/add", method = RequestMethod.POST)
    public String addPlan(Plan plan) {
        if (planService.addPlan(plan)) {
            return "redirect:/admin/plan/2";
        }
        return "index";
    }

    @RequestMapping(value = "/plans", method = RequestMethod.GET)
    @ResponseBody
    public List<Plan> getPlans() {
        return planService.getPlans();
    }

    @RequestMapping(value = "/latest/plans", method = RequestMethod.GET)
    @ResponseBody
    public List<Plan> getLatestPlans() {
        return planService.getLatestPlans();
    }

    @RequestMapping(value = "/latest/plans/{tagID}", method = RequestMethod.GET)
    @ResponseBody
    public List<Plan> getPlansByTag(@PathVariable("tagID") Integer ID) {
        return planService.getPlansByTagID(ID);
    }

    @RequestMapping(value = "/delete/plans")
    @ResponseBody
    public String deletePlans(@RequestBody List<Plan> plans) {
        if(plans != null)
            if (planService.deletePlans(plans))
                return "true";
        return null;

    }

    @RequestMapping(value = "/update/plan")
    public String updatePlan(Plan plan) {
        if (planService.updatePlan(plan))
            return "redirect:/plan/2";
        return "index";
    }

    @RequestMapping("/redirect/mall")
    public String praisePlan(@RequestBody Plan plan, Model model) {
        if (plan != null) {
            model.addAttribute("plan", plan);
            return "3dMall";
        }
        return null;
    }

    @RequestMapping("/mall")
    public String mall(@ModelAttribute("plan") Plan plan, Model model) {
        model.addAttribute("plan", plan);
        return "3dMall";
    }

}
