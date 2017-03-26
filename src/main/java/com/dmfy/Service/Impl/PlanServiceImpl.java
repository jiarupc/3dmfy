package com.dmfy.Service.Impl;

import com.dmfy.Dao.PlanDao;
import com.dmfy.Model.Plan;
import com.dmfy.Service.PlanService;
import com.dmfy.Util.FileUtil;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.io.File;
import java.util.List;

@Service
public class PlanServiceImpl implements PlanService {
    @Resource
    private PlanDao planDao;
    @Resource
    private FileUtil fileUtil;
    //        储存路径
    private String planAbsolutePath = "E:/IdeaProjects/3dmfy/src/main/webapp/upload/plans/";
    private String planRelativePath = "/upload/plans/";
    private String coverAbsolutePath = "E:/IdeaProjects/3dmfy/src/main/webapp/upload/covers/";
    private String coverRelativePath = "/upload/covers/";


    @Transactional
    public Boolean addPlan(Plan plan) {
        //        储存路径
        String coverPath = "E:/IdeaProjects/3dmfy/src/main/webapp/upload/covers/";
        String planPath = "E:/IdeaProjects/3dmfy/src/main/webapp/upload/plans/";
        //        文件传输
        File coverFile = fileUtil.upload(plan.getCover(), coverPath, ".jpg");
        File planFile = fileUtil.upload(plan.getPlan(), planPath, ".swf");

        plan.setCoverPath("/upload/covers/" + coverFile.getName());
        plan.setPlanPath("/upload/plans/" + planFile.getName());

        return planDao.insertPlan(plan);
    }

    @Transactional
    public Boolean deletePlans(List<Plan> plans) {
        StringBuilder path = new StringBuilder("E:/IdeaProjects/3dmfy/src/main/webapp/");

        if (plans != null) {
            for (Plan plan : plans) {
                planDao.deletePlan(plan.getID());
                fileUtil.delete(path + plan.getCoverPath());
                fileUtil.delete(path + plan.getPlanPath());
                System.out.println(path); }
            return true;
        }
        return false;
    }

    public Boolean updatePlan(Plan plan) {
        if (!plan.getPlan().isEmpty()) {
            File updatePlan = fileUtil.upload(plan.getPlan(), planAbsolutePath, ".swf");
            plan.setPlanPath(planRelativePath + updatePlan.getName());
        }
        if (!plan.getCover().isEmpty()) {
            File updateCover = fileUtil.upload(plan.getCover(), coverAbsolutePath, ".jpg");
            plan.setCoverPath(coverRelativePath + updateCover.getName());
        }
        return planDao.updatePlan(plan);
    }

    public List<Plan> getPlans() {
        return planDao.selectPlans();
    }

    public List<Plan> getLatestPlans() {
        return planDao.selectLatestPlans();
    }

    public List<Plan> getPlansByTagID(Integer ID) {
        return planDao.selectPlansByTagID(ID);
    }

}
