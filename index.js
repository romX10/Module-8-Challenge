const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');



function init() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'initialize',
            message: 'Would you like to add a new employee?',
            choices: ['Yes', 'No']
        }
    ])
    .then((answers) => {
        if (answers.initialize === 'No') {
            return
        } 
        else {
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'jobType',
                    message: 'What type of job would you like to add?',
                    choices: ['Employee','Engineer', 'Manager', 'Intern']
                }
            ])
            .then((answers) => {
                if (answers.jobType === 'Employee') {
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "What is this person's name?",
                        },
                        {
                            type: 'input',
                            name: 'id',
                            message: "What is this person's id?",
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: "What is this person's email?",
                        }
                    ])
                    .then((answers) => {
                        var EmpName = answers.name;
                        var id = answers.id;
                        var email = answers.email;

                        const worker = new Employee(EmpName, id, email);
                        worker.getName();
                    })
                }
            })
        }
    })
}
init();

