BEGIN;

INSERT INTO users (username,email,phone,password,country,city,is_handyman) 
VALUES ('mossa','mossa123@gmail.com',11111111,'mmm123','palestine','gaza',true);

INSERT INTO users (username,email,phone,password,country,city,is_handyman) VALUES ('fadi','fadi123@gmail.com',22222222,'fff123','palestine','gaza',false);

INSERT INTO services (name) VALUES ('cooker');

INSERT INTO handyman (handyman_id, job_title,hour_rate,description) 
VALUES (1,1,15,'good worker');


INSERT INTO jobs (client_id,handyman_id,description,dead_line,price,status,message,street,building_number,flat_number) 
VALUES (2,1,'cook the food','12-12-2020',15,'pending','build my house','omar el mukhtar','123','12');

COMMIT;
