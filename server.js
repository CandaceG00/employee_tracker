const mysql = require('mysql');
const inquirer = require('inquirer');


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
