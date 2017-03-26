package com.dmfy.Service.Impl;

import com.dmfy.Dao.TagDao;
import com.dmfy.Model.Tag;
import com.dmfy.Service.TagService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class TagServieceImpl implements TagService {
    @Resource
    private TagDao tagDao;

    public Boolean addTag(Tag tag) {
        return tagDao.addTag(tag);
    }

    public Boolean deleteTag(Integer ID) {
        return tagDao.deleteTag(ID);
    }

    public List<Tag> getTags() {
        return tagDao.selectTags();
    }
}
