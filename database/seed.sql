use employee_db;

insert into department (name) values ("Sales");
insert into department (name) values ("Engineering");
insert into department (name) values ("Finance");
insert into department (name) values ("Legal");

insert into role (title, salary, department_id) values ("Sales Lead", 800000, 1);
insert into role (title, salary, department_id) values ("Salesperson", 60000, 1);
insert into role (title, salary, department_id) values ("Lead Engineer", 150000, 2);
insert into role (title, salary, department_id) values ("Software Engineer", 200000, 2);
insert into role (title, salary, department_id) values ("Account Manager", 150000, 3);
insert into role (title, salary, department_id) values ("Accoutant", 120000, 3);
insert into role (title, salary, department_id) values ("Legal Team Lead", 125000, 4);


insert into employee (first_name, last_name, role_id, manager_id) values ("John H.", "Patterson", 1, null);
insert into employee (first_name, last_name, role_id, manager_id) values ("Mary Kay", "Ash", 2, 1);
insert into employee (first_name, last_name, role_id, manager_id) values ("Dale", "Carnegie", 2, 1);
insert into employee (first_name, last_name, role_id, manager_id) values ("Montgomery", "Scott", 3, null);
insert into employee (first_name, last_name, role_id, manager_id) values ("Angus", "MacGyver", 4, 3);
insert into employee (first_name, last_name, role_id, manager_id) values ("Kaylee", "Frye", 4, 3);
insert into employee (first_name, last_name, role_id, manager_id) values ("Cyrus", "Smith", 4, 3);

