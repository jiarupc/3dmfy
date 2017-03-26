package com.dmfy.Model;

public class User {
    private Integer ID;
    private String username;
    private String password;
    private String realname;

    public User(String username, String password, String realname) {
        this.username = username;
        this.password = password;
        this.realname = realname;
    }

    public User() {
    }

    public Integer getID() {
        return ID;
    }

    public void setID(Integer ID) {
        this.ID = ID;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRealname() {
        return realname;
    }

    public void setRealname(String realname) {
        this.realname = realname;
    }
}
