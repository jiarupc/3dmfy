package com.dmfy.Controller;

import com.dmfy.Model.Designer;
import com.dmfy.Model.Tag;
import com.dmfy.Service.TagService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

@Controller
public class TagController {
    @Resource
    private TagService tagService;

    @RequestMapping(value = "/tags", method = RequestMethod.GET)
    @ResponseBody
    public List<Tag> getTags() {
        return tagService.getTags();
    }

}
