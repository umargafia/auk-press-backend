create database if not exists auk_press;
use auk_press;

create table if not exists notes(
id int auto_increment unique,
title varchar(300),
details long,
category varchar(10000),

primary key(id)

)


select * from notes;
