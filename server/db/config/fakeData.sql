BEGIN;

INSERT INTO users (username,email,phone,password,country,city,is_handyman) 
VALUES ('mossa','skdrow@gmail.com',11111111,'$2b$10$M860UeVT4eD5dgCm8pbK6uFxrrL.8U6ZNntwcf7GtZzl.GUs/qNXi','palestine','gaza',true);

INSERT INTO users (username,email,phone,password,country,city,is_handyman) VALUES ('fadi','fadi123@gmail.com',22222222,'fff123','palestine','gaza',false);

INSERT INTO services (name) VALUES ('builder');

INSERT INTO handyman (handyman_id, job_title,hour_rate,description) 
VALUES (1,1,15,'good builder');

INSERT INTO jobs (client_id,handyman_id,description,dead_line,price,status,message,street,building_number,flat_number) 
VALUES (2,1,'build the house','2019-09-24T07:02:08.773Z',15,'pending','build my house','omar el mukhtar','123','12');

INSERT INTO jobs (client_id,handyman_id,description,dead_line,price,status,message,street,building_number,flat_number) 
VALUES (2,1,'build the flat','2019-09-24T07:02:08.773Z',15,'accepted','build the flat','omar el mukhtar','12','142');

INSERT INTO jobs (client_id,handyman_id,description,dead_line,price,status,message,street,building_number,flat_number) 
VALUES (2,1,'build the flat','2019-09-24T07:02:08.773Z',20,'decliend','build the room','omar el mukhtar','132','1422');

COMMIT;
