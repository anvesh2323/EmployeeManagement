-- https://youtu.be/wLLtiyaAhMQ

drop table if exists teachers_details;
drop table if exists teachers;


CREATE TABLE teachers (
    -- id INT NOT NULL PRIMARY KEY,
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(40), 
    gender VARCHAR(7),
    dob VARCHAR(11),
    address VARCHAR(100),
    note VARCHAR(100)
    -- teaching BIGINT REFERENCES t_detail (t_id)
);

CREATE TABLE teachers_details (
    -- id BIGSERIAL NOT NULL PRIMARY KEY,
    standard INT,
    subject VARCHAR(20),
    id INT,
    -- CONSTRAINT 
    FOREIGN KEY(id) REFERENCES teachers(id) ON DELETE CASCADE 
);


-- DUMMY DATA
insert into teachers (name, gender, dob, address, note) values ('Anup', 'Male', '28-08-1999', 'ManiIlla', 'Waste Fellow');
insert into teachers (name, gender, dob, address, note) values ('Neela', 'Female', '17-10-1975', 'Bijapur', 'Mommy');
insert into teachers (name, gender, dob, address, note) values ('Basavaraj', 'Male', '20-07-1968', 'Vijayapur', 'Poppy');
insert into teachers (name, gender, dob, address, note) values ('Anvesh', 'Male', '29-03-2002', 'PrakrutiColony', 'Waste Fellow2');
insert into teachers (name, gender, dob, address, note) values ('Gonnya', 'Male', '1-1-1999', 'Bjp', '-');
insert into teachers (name, gender, dob, address, note) values ('Gonnya2', 'Male', '2-2-2999', 'Vjpr', '-');

insert into teachers_details (id, standard, subject) values (1, 5, 'English');
insert into teachers_details (id, standard, subject) values (2, 8, 'Kannada');
insert into teachers_details (id, standard, subject) values (3, 3, 'Kannada');
insert into teachers_details (id, standard, subject) values (2, 8, 'English'), (2, 5, 'Kanglish'), (1, 8, 'English'), (1, 8, 'Kannada');





-- select * from teaching_details
--                 t_standard | t_subject | t_id 
--                ------------+-----------+------
--                         5 | English   |    1
--                         8 | Kannada   |    2
--                         3 | Kannada   |    3
--                         8 | English   |    2
--                         5 | Kanglish  |    2
--                         8 | English   |    1
--                         8 | Kannada   |    1




-- select * from teaching_details where t_standard = 8;
--                     t_standard | t_subject | t_id 
--                     ------------+-----------+------
--                             8 | Kannada   |    2
--                             8 | English   |    2
--                             8 | English   |    1
--                             8 | Kannada   |    1




-- select t.t_name, det.t_id from teacher as t, (select t_id from teaching_details where t_subject='Kannada' and t_standard = 8) as det where t.t_id = det.t_id;
--
--                     t_name | t_id 
--                    --------+------
--                     Neela  |    2
--                     Anup   |    1