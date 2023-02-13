const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

const generateEmployee = ({name, id, email}) =>
`
        <div class="card" style="width: 18rem;">
            <div class="card-header bg-primary text-white">
                <h5>${name}</h5>
                <h5><i class="fa-solid fa-user"></i> Employee</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><i class="fa-solid fa-circle-info"></i> ID: ${id}</li>
                <li class="list-group-item"><i class="fa-solid fa-envelope"></i> Email: <a>${email}</a></li>
            </ul>
        </div>
`;
const generateEngineer = ({name, id, email, github}) =>
`
        <div class="card" style="width: 18rem;">
            <div class="card-header bg-primary text-white">
                <h5>${name}</h5>
                <h5><i class="fa-solid fa-gear"></i> Engineer</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><i class="fa-solid fa-circle-info"></i> ID: ${id}</li>
                <li class="list-group-item"><i class="fa-solid fa-envelope"></i> Email: ${email}</li>
                <li class="list-group-item"><i class="fa-brands fa-github"></i> Github: <a href="github.com/${github}">${github}</a></li>
            </ul>
        </div>
`;
const generateManager = ({name, id, email, officeNumber}) =>
`
        <div class="card" style="width: 18rem;">
            <div class="card-header bg-primary text-white">
                <h5>${name}</h5>
                <h5><i class="fa-solid fa-suitcase"></i> Manager</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><i class="fa-solid fa-circle-info"></i> ID: ${id}</li>
                <li class="list-group-item"><i class="fa-solid fa-envelope"></i> Email: <a>${email}</a></li>
                <li class="list-group-item"><i class="fa-solid fa-building"></i> Office Number: ${officeNumber}</li>
            </ul>
        </div>
`;
const generateIntern = ({name, id, email, school}) =>
`
        <div class="card" style="width: 18rem;">
            <div class="card-header bg-primary text-white">
                <h5>${name}</h5>
                <h5><i class="fa-solid fa-graduation-cap"></i> Intern</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><i class="fa-solid fa-circle-info"></i> ID: ${id}</li>
                <li class="list-group-item"><i class="fa-solid fa-envelope"></i> Email: <a>${email}</a></li>
                <li class="list-group-item"><i class="fa-solid fa-school-flag"></i> School: ${school}</li>
            </ul>
        </div>
`;
const startTags = `<htmlNEW TEXT lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <title>Employee List</title>
    <script src="https://kit.fontawesome.com/b8ecb5e766.js" crossorigin="anonymous"></script>
</head>
<body>
    <nav class="navbar bg-danger">
        <div class="container-fluid">
          <a class="navbar-brand text-white mx-auto" href="#">My Team</a>
        </div>
    </nav>
    <div class="card-group">`
const endingTags = `</div> </body> </html>`;

function start() {
    fs.appendFile('index.html', startTags, (error) =>
                    error ? console.log(error) : console.log(' ')
                    );
}
function init() {
    console.log('');
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
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'done',
                    message: 'Are you done adding employees?',
                    choices: ['Yes', 'No']
                }
            ])
            .then((answers) => {
                if (answers.done === 'Yes') {
                    fs.appendFile('index.html', endingTags, (error) =>
                    error ? console.log(error) : console.log('HTML Successfully generated!')
                    );
                }
                else {
                    init();
                }
            })
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
                        init();
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
                        init();
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
                        init();
                       
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
                        init();
                    });
                }
            })
        }
    })
}

start();
init();

