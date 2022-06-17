DROP TABLE IF EXISTS students;

CREATE TABLE students(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(30),
    gender VARCHAR(7),
    dob VARCHAR(11),
    houseName VARCHAR(20),
    standard INT,
    address VARCHAR(100)
);

INSERT INTO students (name, gender, dob, houseName, standard, address) VALUES ('Anvesh', 'Male', '29-03-2002', 'SHIVALIk', '12','Vjpr');
INSERT INTO students (name, gender, dob, houseName, standard, address) VALUES ('Anup', 'Male', '29-03-2002', 'SHIVALIk', '12','Vjpr');
INSERT INTO students (name, gender, dob, houseName, standard, address) VALUES ('Neela', 'Female', '29-03-2002', 'SHIVALIk', '12','Vjpr');
INSERT INTO students (name, gender, dob, houseName, standard, address) VALUES ('Basavaraj', 'Male', '29-03-2002', 'SHIVALIk', '12','Vjpr');
INSERT INTO students (name, gender, dob, houseName, standard, address) VALUES ('Puttu', 'Female', '29-03-2002', 'SHIVALIk', '12','Vjpr');
INSERT INTO students (name, gender, dob, houseName, standard, address) VALUES ('Punda', 'Male', '29-03-2002', 'SHIVALIk', '12','Vjpr');
