package com.team5.projrental.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table(name = "t_user")
@Entity
public class UserEntity {

    @Id
    @GeneratedValue
    private Long iuser;

    private String iauth;
    private String addr;


}
