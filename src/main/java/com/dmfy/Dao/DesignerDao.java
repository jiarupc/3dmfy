package com.dmfy.Dao;

import com.dmfy.Model.Designer;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface DesignerDao {
    Boolean insertDesigner(Designer designer);

    Boolean updateDesigner(Designer designer);

    Boolean deleteDesigner(@Param("ID") Integer ID);

    List<Designer> selectDesigners();


}
