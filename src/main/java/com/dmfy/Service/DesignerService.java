package com.dmfy.Service;

import com.dmfy.Model.Designer;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import java.util.List;

public interface DesignerService {
    Boolean addDesigner(Designer designer);

    List<Designer> getDesigners();

    Boolean deleteDesigners(List<Designer> designers);

    Boolean updateDesigner(Designer designer);

//    Boolean updateDesigner(CommonsMultipartFile file, Designer designer);
}
