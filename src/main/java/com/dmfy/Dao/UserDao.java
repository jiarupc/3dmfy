package com.dmfy.Dao;

import com.dmfy.Model.User;
import org.apache.ibatis.annotations.Param;

public interface UserDao {

    User selectUser(User user);

}
