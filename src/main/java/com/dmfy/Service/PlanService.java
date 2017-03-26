package com.dmfy.Service;

import com.dmfy.Model.Plan;

import java.util.List;

public interface PlanService {
    Boolean addPlan(Plan plan);

    Boolean deletePlans(List<Plan> plans);

    Boolean updatePlan(Plan plan);

    List<Plan> getPlans();

    List<Plan> getLatestPlans();

    List<Plan> getPlansByTagID(Integer ID);
}
