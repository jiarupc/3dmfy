create database 3dmfy;

use 3dmfy;

create table user(
  ID int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  username varchar(10) not null default '',
  password varchar(16) not null default ''
)CHARSET 'UTF8';

create table plan (
  ID int(11) not null AUTO_INCREMENT PRIMARY KEY ,
  name varchar(20) not null default '' COMMENT '项目名',
  type varchar(20) not null default '' COMMENT '房型',
  style varchar(20) not null default '' COMMENT '风格',
  area varchar(20) not null default '' COMMENT '面积',
  visible tinyint not null default '1' COMMENT '是否前台显示',
  coverPath varchar(80) not null default '' COMMENT '封面路径',
  planPath varchar(80) not null default '' COMMENT '3D文件路径',
  time timestamp not null default CURRENT_TIMESTAMP   COMMENT '发布时间'
)CHARSET 'UTF8';

create table designer (
  ID int(11) not null AUTO_INCREMENT PRIMARY KEY ,
  name varchar(20) not null default '' COMMENT '设计师',
  picPath varchar(80) not null default '' COMMENT '图片路径'
)CHARSET 'UTF8';

create table tag (
  ID int(11) not null AUTO_INCREMENT PRIMARY KEY ,
  tag varchar(20) not null default '' COMMENT '标签'
)CHARSET 'UTF8';



