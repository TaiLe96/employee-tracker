var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: "password",
    database: "employee_db"
});
// connect to the mysql server and sql database
// connection.connect(function(err){
//     if (err) throw err;
//     questions();
// });

// Function which prompts the users What they wants to do
function question() {
    inquirer
        .prompt({
            type: "list",
            name: "todo",
            message: "What would you like to do?",
            choices: [
                "View All Empolyees",
                "View All Employee By Department",
                "View All Roles",
                "Add Employee",
                "Remove Employee",
                "Update Employee",
                "Update Employee Manager",
                "Done"
            ]
        })
        .then(function (choices) {
            if (choices.todo === "View All Employees") {
                viewEmployee();
            } else if (choices.todo === "View All Employee By Department") {
                viewEmployeeByDepartment();
            } else if (choices.todo === "Add Employee") {
                addEmployee();
            }else if (choices.todo === "Remove Employee"){
                removeEmployee();
            // }else if (choices.todo === "Update Employee") {
            //     updateEmployee();
            } else if (choices.todo === "Update Employee Role") {
                updateEmployeeRole();
            } else if (choices.todo === "View All Roles"){
                viewAllRoles();
            } else {
                done();
            }
                
        })
};


// Function to show all employee
function viewEmployee(){
    console.log("selecting all employee...\n");
    // SELECT * FROM employee;
    connection.query("SELECT * FROM employee", function(err, res){
        if (err) throw err;
        console.log(res);
    })
    question();
};

// Function to view all employee by department
function viewEmployeeByDepartment(){
    connection.query("SELECT first_name, last_name, department.name FROM ((employee INNER JOIN role ON role_id = role.id) INNER JOIN department ON department_id = department.id)", function(err,res){
        if (err) throw err;
    })
    question();
};

function viewAllRoles(){
    connection.query("SELECT * FROM role", function(err, res){
        if (err) throw err;
    })
    question();
}


// Function to add new employee
function getDepartmentNames(){
    connection.query("SELECT name FROM department", function(err, res){
        if (err) throw err;
        let departments = [];
        
    })
}
 
function addEmployee(){
    inquirer
    .prompt([
        {
            type: "input",
            name: "firstname",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "lastname",
            message: "What is the employee's last name?"
        },
        {
            type: "list",
            name: "role",
            message: "What is the employee's role?",
            choices: [
                "Accountant",
                "Account Manager",
                "Legal Team Lead",
                "Lead Engineer",
                "Software Engineer",
                "Sales Lead",
                "Salesperson"
            ]
        },
        // {
        //     type: "list",
        //     name: "manager",
        //     message: "Who is the employee's manager?",
        //     //Choices should be pulled from database
        //     choices: [

        //     ]
        // }
    ])
    .then(function(res){
        connection.query("INSERT INTO employee SET?",
        {
            first_name: res.firstname,
            last_name: res.firstname,
            role_name: res.role,

        },
        function(err){
            if (err) throw err;
            console.log("Added successfully!");
            question();
        }
        );
    });
}

// function removeEmployee(){
//     connection.query("DELETE FROM employee WHERE ?", )
// }

// function updateEmployee(){
//     var query = connection.query("UPDATE empolyee SET ? WHERE ?", )
// }


