package com.dmfy.Controller;

import com.dmfy.Model.Designer;
import com.dmfy.Service.DesignerService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@SessionAttributes("designer")
public class DesignerController {
    @Resource
    private DesignerService designerService;

    @RequestMapping(value = "/designers/add", method = RequestMethod.POST)
    public String addDesigner(Designer designer) {
        if (designerService.addDesigner(designer))
            return "redirect:/designer/2";
        return "index";
    }

    @RequestMapping(value = "/designers", method = RequestMethod.GET)
    @ResponseBody
    public List<Designer> designers() {
        return designerService.getDesigners();
    }


    @RequestMapping(value = "/delete/designers")
    @ResponseBody
    public String deleteDesigners(@RequestBody List<Designer> designers) {
        if(designers != null)
            if (designerService.deleteDesigners(designers))
                return "true";
        return null;

    }

    @RequestMapping(value = "/upload/designer", method = RequestMethod.POST)
    public String uploadDesigner(@RequestBody Designer designer, Model model) {
        model.addAttribute("designer", designer);
        return "redirect:/test3";
    }

    @RequestMapping(value = "/update/designer")
    public String updateDesigner(Designer designer) {
        if (designerService.updateDesigner(designer))
            return "redirect:/designer/2";
        return "index";
    }



    /**
     @RequestMapping(value = "/update/designer")
    @ResponseBody
    public String updateDesigner(@RequestParam("file") CommonsMultipartFile file,
                                 @ModelAttribute("designer") Designer designer) {
        if (designer != null)
            if (designerService.updateDesigner(file, designer))
                return "true";
        return null;
    }
     **/



}
