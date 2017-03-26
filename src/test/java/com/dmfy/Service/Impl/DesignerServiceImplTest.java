package com.dmfy.Service.Impl;

import com.dmfy.Service.DesignerService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({
        "classpath:spring/spring-dao.xml",
        "classpath:spring/spring-service.xml"
})
public class DesignerServiceImplTest {
    @Resource
    private DesignerService designerService;

    @Test
    public void deleteDesigners() throws Exception {
        List<Integer> nums = Arrays.asList(4, 5, 6);
        System.out.println(designerService.deleteDesigners(nums));
    }

}