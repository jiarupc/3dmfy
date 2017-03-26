package com.dmfy.Util;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Date;

@Component
public class FileUtil {

    @Transactional
    public File upload(CommonsMultipartFile file,String path, String Extension) {
        File container = new File(path + new Date().getTime() + Extension);

        try {
            file.transferTo(container);
            return container;
        } catch (IOException e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    public Boolean delete(String path) {
        File file = new File(path);

        if (file.exists() && file.isFile())
            return file.delete();
        return false;
    }
}
