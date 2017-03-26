package com.dmfy.Service;

import com.dmfy.Model.Tag;

import java.util.List;

public interface TagService {
    Boolean addTag(Tag tag);

    Boolean deleteTag(Integer ID);

    List<Tag> getTags();
}
