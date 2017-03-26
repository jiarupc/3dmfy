package com.dmfy.Service.Impl;

import com.dmfy.Dao.DesignerDao;
import com.dmfy.Model.Designer;
import com.dmfy.Service.DesignerService;
import com.dmfy.Util.FileUtil;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import javax.annotation.Resource;
import javax.sound.midi.Soundbank;
import java.io.File;
import java.io.IOException;
import java.util.List;

@Service
public class DesignerServiceImpl implements DesignerService {

    @Resource
    private DesignerDao designerDao;
    @Resource
    private FileUtil fileUtil;
    //        储存路径
    private String absolutePath = "E:/IdeaProjects/3dmfy/src/main/webapp/upload/profiles/";
    private String relativePath = "/upload/profiles/";


    public Boolean addDesigner(Designer designer) {
        //        图片传输
        File photo = fileUtil.upload(designer.getFile(), absolutePath, ".jpg");

        designer.setPicPath(relativePath + photo.getName());

        return designerDao.insertDesigner(designer);
    }

    public List<Designer> getDesigners() {
        return designerDao.selectDesigners();
    }

    public Boolean deleteDesigners(List<Designer> designers) {
        StringBuilder path = new StringBuilder("E:/IdeaProjects/3dmfy/src/main/webapp/");

        if (designers != null) {
            for (Designer designer : designers) {
                designerDao.deleteDesigner(designer.getID());
                fileUtil.delete(path.append(designer.getPicPath()).toString());
            }
            return true;
        }
        return false;
    }


    public Boolean updateDesigner(Designer designer) {
        if (!designer.getFile().isEmpty()) {
            File photo = fileUtil.upload(designer.getFile(), absolutePath, ".jpg");
            designer.setPicPath(relativePath + photo.getName());
        }
        return designerDao.updateDesigner(designer);
    }
}
