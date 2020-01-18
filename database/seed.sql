use employee_db;

insert into department (name)
values 
("Sales"), 
("Engineering"), 
("Finance"), 
("Legal");

insert into role (title, salary, department_id)
values
("Accountant", 100000, 1),
("Account Manager", 120000, 1),
("Legal Team Lead", 140000, 2),
("Lead Engineer", 160000, 3),
("Software Engineer", 180000, 3),
("Sales Lead", 80000, 4),
("Salesperson", 600000, 4);

insert into employee (first_name, last_name, role_id, manager_id) 
values
    ("Don", "Lee", 1, null),
    ("John", "Le", 2, null),
    ("Alex", "Kim", 3, null),
    ("Kev", "Nguyen", 4, null);

