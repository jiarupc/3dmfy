package com.dmfy.Service.Impl;

import com.dmfy.Dao.UserDao;
import com.dmfy.Model.User;
import com.dmfy.Service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

@Service
public class UserServiceImpl implements UserService {

    @Resource
    private UserDao userDao;

    public User login(User user) {
//		返回对象
        return userDao.selectUser(user);
    }
}
