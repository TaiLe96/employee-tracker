# employee-tracker

# Summary
    - This is an app called employee-tracker. It allows user to view, add and update employees infomarion through NODE.

# Technologies Used
    - MySql: used to store database.
    - Javascript: used to set functions.
    - Sql files: to create tables.

# Code Snippet
```js
async function addRole(roleInfo) {
    // INSERT into role (title, salary, department_id) VALUES ("Saleperson", 600000, 1);
    const departmentId = await getDepartmentId(roleInfo.departmentName);
    const salary = roleInfo.salary;
    const title = roleInfo.roleName;
    let query = 'INSERT into role (title, salary, department_id) VALUES (?,?,?)';
    let args = [title, salary, departmentId];
    const rows = await db.query(query, args);
    console.log(`Added role ${title}`);
}
```
These code used to add role information and insert them to the database query.

```js
async function getAddEmployeeInfo() {
    const managers = await getManagerNames();
    const roles = await getRoles();
    return inquirer
        .prompt([
            {
                type: "input",
                name: "first_name",
                message: "What is the employee's first name?"
            },
            {
                type: "input",
                name: "last_name",
                message: "What is the employee's last name?"
            },
            {
                type: "list",
                message: "What is the employee's role?",
                name: "role",
                choices: [
                    // populate from db
                    ...roles
                ]
            },
            {
                type: "list",
                message: "Who is the employee's manager?",
                name: "manager",
                choices: [
                    // populate from db
                    ...managers
                ]
            }
        ])
}
```
Instead of writing all the choices. I generate them from the database.

# Author Links
[LinkedIn](www.linkedin.com/in/tu-tai-le-2a9646139)
[GitHub](https://github.com/TaiLe96)