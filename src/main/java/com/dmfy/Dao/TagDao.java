package com.dmfy.Dao;

import com.dmfy.Model.Tag;

import java.util.List;

public interface TagDao {

    Boolean addTag(Tag tag);

    Boolean deleteTag(Integer ID);

    List<Tag> selectTags();
}
