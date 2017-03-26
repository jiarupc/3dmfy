package com.dmfy.Dao;

import com.dmfy.Model.Plan;

import java.util.List;

public interface PlanDao {

    Boolean insertPlan(Plan plan);

    Boolean deletePlan(Integer ID);

    Boolean updatePlan(Plan plan);

    List<Plan> selectPlans();

    List<Plan> selectLatestPlans();

    List<Plan> selectPlansByTagID(Integer ID);
}
