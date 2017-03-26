package com.dmfy.Model;

import org.springframework.web.multipart.commons.CommonsMultipartFile;

public class Plan {
    private Integer ID;
    private String name;
    private String type;
    private String style;
    private String area;
    private Integer visible;
    private String designer;
    private String coverPath;
    private String planPath;
    private String time;
    private CommonsMultipartFile cover;
    private CommonsMultipartFile plan;

    public String getDesigner() {
        return designer;
    }

    public void setDesigner(String designer) {
        this.designer = designer;
    }

    public Integer getID() {
        return ID;
    }

    public void setID(Integer ID) {
        this.ID = ID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getStyle() {
        return style;
    }

    public void setStyle(String style) {
        this.style = style;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public Integer getVisible() {
        return visible;
    }

    public void setVisible(Integer visible) {
        this.visible = visible;
    }

    public String getCoverPath() {
        return coverPath;
    }

    public void setCoverPath(String coverPath) {
        this.coverPath = coverPath;
    }

    public String getPlanPath() {
        return planPath;
    }

    public void setPlanPath(String planPath) {
        this.planPath = planPath;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public CommonsMultipartFile getCover() {
        return cover;
    }

    public void setCover(CommonsMultipartFile cover) {
        this.cover = cover;
    }

    public CommonsMultipartFile getPlan() {
        return plan;
    }

    public void setPlan(CommonsMultipartFile plan) {
        this.plan = plan;
    }
}
