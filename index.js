const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
var workers = [];
const generateEmployee = ({name, id, email}) =>
`

<h1> Employee : ${name}</h1>
<h2>Id : ${id}</h2>
<h3>Email : ${email}</h3>
`;
const generateEngineer = ({name, id, email, github}) =>
`
<h1>Engineer : ${name}</h1>
<h2>Id : ${id}</h2>
<h3>Email : ${email}</h3>
<h4>Github username : ${github}</h4>
`;
const generateManager = ({name, id, email, officeNumber}) =>
`
<h1>${name}</h1>
<h2>${id}</h2>
<h3>${email}</h3>
<h4>${officeNumber}</h4>
`;
const generateIntern = ({name, id, email, school}) =>
`
<h1>${name}</h1>
<h2>${id}</h2>
<h3>${email}</h3>
<h4>${school}</h4>
`;

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
                        const newEmployee = generateEmployee(answers);

                        fs.appendFile('index.html', newEmployee, (error) =>
                          error ? console.log(error) : console.log('Employee successfully added!')
                        );
                    });
                }
                else if (answers.jobType === 'Engineer') {
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
                        },
                        {
                            type: 'input',
                            name: 'github',
                            message: "What is this person's github username?",
                        }
                    ])
                    .then((answers) => {
                        const newEngineer = generateEngineer(answers);

                        fs.appendFile('index.html', newEngineer, (error) =>
                          error ? console.log(error) : console.log('Engineer successfully added!')
                        );
                    });
                }
                else if (answers.jobType === 'Manager') {
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
                        },
                        {
                            type: 'input',
                            name: 'officeNumber',
                            message: "What is this person's office number",
                        }
                    ])
                    .then((answers) => {
                        const newManager = generateManager(answers);

                        fs.appendFile('index.html', newManager, (error) =>
                          error ? console.log(error) : console.log('Manager successfully added!')
                        );
                    });

                }
                else {
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
                        },
                        {
                            type: 'input',
                            name: 'school',
                            message: "What is this person's school?",
                        }
                    ])
                    .then((answers) => {
                        const newIntern = generateIntern(answers);

                        fs.appendFile('index.html', newIntern, (error) =>
                          error ? console.log(error) : console.log('Intern successfully added!')
                        );
                    });
                }
            })
        }
    })
}
init();

