const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'new_password',
    database: 'employee_db'
});

connection.connect(function(err){
    if (err) throw err;
    cli_prompt();
});


const mainPrompt = [
    {
        name: "action",
        type: "list",
        message: "Select an action",
        choices: [
            
            "View employees",
            "View roles",
            "View departments",
            "Add department",
            "Add role",
            "Add employee",
            "Edit employee",
            "Remove employee",
            "EXIT"
        ] 
    }
];

function cli_prompt() {
    inquirer.prompt(mainPrompt)
    .then(function(answer) {
        if(answer.action == "View employees") {
            viewAll();
        }else if(answer.action == "View departments") {
            viewDept();
        }else if(answer.action == "View roles") {
            viewRoles();
        }else if(answer.action == "Add employee") {
            addEmployee();
        }else if(answer.action == "Add department") {
            addDept();
        }else if(answer.action == "Add role") {
            addRole();
        }else if(answer.action == "Edit employee") {
            updateEmployee();
        }else if(answer.action == "Remove employee") {
            deleteEmployee();
        }else if(answer.action == "EXIT") {
            exit();
        };
    });    
};


function viewAll() {
    let query =
        "SELECT employees.first_name, employees.last_name, roles.title, roles.salary, department.dept_name AS department, employees.manager_id " +
        "FROM employees " +
        "JOIN roles ON roles.id = employees.role_id " +
        "JOIN department ON roles.department_id = department.id " +
        "ORDER BY employees.id;"
    ;

    connection.query(query, function(err, res) {
        if (err) throw err;
        for(i = 0; i < res.length; i++) {
            if(res[i].manager_id == 0) {     
                res[i].manager = "None" 
            }else{
                res[i].manager = res[res[i].manager_id - 1].first_name + " " + res[res[i].manager_id - 1].last_name;
            };
            delete res[i].manager_id;
        };

        console.table(res); 
        cli_prompt();
    });
};

function viewDept() {
    let query = "SELECT department.dept_name AS departments FROM department;";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res); 
        cli_prompt();
    });
};