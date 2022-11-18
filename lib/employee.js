class Employee {
    constructor(name, id, email) {
this.name = name;
this.id = id;
this.email = email;
    }
getName() {
    if(this.name) {
        console.log(`${this.name}`)
    }
}
getId() {
    if(this.id) {
        console.log(`${this.id}`)
    }
}
getEmail() {
    if(this.email) {
        console.log(`${this.email}`)
    }
}
getRole() {
    console.log(`${this.constructor.name}`)
}
}
module.exports = Employee;