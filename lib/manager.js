const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        console.log(`${this.officeNumber}`);
    }
    getRole() {
        console.log(`${this.constructor.name}`)
    }
}

module.exports = Manager;