package com.learn.es.pojo;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * Created by Ale on 2020/9/14
 */
public class User implements Serializable {

    private long id;
    private String userName;
    private String password;
    private int gender;
    private LocalDate birthday;
    private String remark;
    private int state;
    private LocalDateTime registrationSdt;
    private LocalDateTime freezeSdt;
    private LocalDateTime freezeEdt;
    private LocalDateTime destorySdt;
    private String socialUrl;
    private String avatar;
    private int roleId;

    public User() {

    }

    public User(long id, String userName, String password, int gender, LocalDate birthday, String remark, int state, LocalDateTime registrationSdt, LocalDateTime freezeSdt, LocalDateTime freezeEdt, LocalDateTime destorySdt, String socialUrl, String avatar, int roleId) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.gender = gender;
        this.birthday = birthday;
        this.remark = remark;
        this.state = state;
        this.registrationSdt = registrationSdt;
        this.freezeSdt = freezeSdt;
        this.freezeEdt = freezeEdt;
        this.destorySdt = destorySdt;
        this.socialUrl = socialUrl;
        this.avatar = avatar;
        this.roleId = roleId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getGender() {
        return gender;
    }

    public void setGender(int gender) {
        this.gender = gender;
    }

    public LocalDate getBirthday() {
        return birthday;
    }

    public void setBirthday(LocalDate birthday) {
        this.birthday = birthday;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }

    public LocalDateTime getRegistrationSdt() {
        return registrationSdt;
    }

    public void setRegistrationSdt(LocalDateTime registrationSdt) {
        this.registrationSdt = registrationSdt;
    }

    public LocalDateTime getFreezeSdt() {
        return freezeSdt;
    }

    public void setFreezeSdt(LocalDateTime freezeSdt) {
        this.freezeSdt = freezeSdt;
    }

    public LocalDateTime getFreezeEdt() {
        return freezeEdt;
    }

    public void setFreezeEdt(LocalDateTime freezeEdt) {
        this.freezeEdt = freezeEdt;
    }

    public LocalDateTime getDestorySdt() {
        return destorySdt;
    }

    public void setDestorySdt(LocalDateTime destorySdt) {
        this.destorySdt = destorySdt;
    }

    public String getSocialUrl() {
        return socialUrl;
    }

    public void setSocialUrl(String socialUrl) {
        this.socialUrl = socialUrl;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public int getRoleId() {
        return roleId;
    }

    public void setRoleId(int roleId) {
        this.roleId = roleId;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                ", gender=" + gender +
                ", birthday=" + birthday +
                ", remark='" + remark + '\'' +
                ", state=" + state +
                ", registrationSdt=" + registrationSdt +
                ", freezeSdt=" + freezeSdt +
                ", freezeEdt=" + freezeEdt +
                ", destorySdt=" + destorySdt +
                ", socialUrl='" + socialUrl + '\'' +
                ", avatar='" + avatar + '\'' +
                ", roleId=" + roleId +
                '}';
    }
}
