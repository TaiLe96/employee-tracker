var mysql = require("mysql");
var inquirer = require("inquirer");
var employee;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: "password",
    database: "employee_db"
});
//connect to the mysql server and sql database
connection.connect(function(err){
    if (err) throw err;
    question();
});


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
                "View All Employees By Manager",
                "Add Employee",
                "Remove Employee",
                "Update Employee",
                "Update Employee Manager",
                "View All Role",
                "Done"
            ]
        })
        .then(function (choices) {
            if (choices.todo === "View All Employees") {
                showEmployee();
            } else if (choices.todo === "View All Employee By Department") {
                showEmployeeByDepartment();
            } else if (choices.todo === "View All Employees By Manager") {
                showEmployeeByManager();
            } else if (choices.todo === "Add Employee") {
                addEmployee();
            }else if (choices.todo === "Remove Employee"){
                removeEmployee();
            }else if (choices.todo === "Update Employee") {
                updateEmployee();
            } else if (choices.todo === "Update Employee Manager") {
                updateEmployeeManager();
            } else {
                viewAllRole();
            }
        })
};


// Function to show all employee
function showEmployee(){
    console.log("selecting all employee...\n");
    var query = "SELECT * FROM employee";
    connection.query("SELECT * FROM employee", function(err, res){
        if (err) throw err;
        console.log(res);
    })
};






// Function to add new employee
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
        )
    })
}

// function removeEmployee(){
//     connection.query("DELETE FROM employee WHERE ?", )
// }

// function updateEmployee(){
//     var query = connection.query("UPDATE empolyee SET ? WHERE ?", )
// }


