const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        console.log(`${this.github}`);
    }
    getRole() {
        console.log(`${this.constructor.name}`);
    }
}

module.exports = Engineer;