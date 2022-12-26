const Employee = require('./Employee');


class Manager extends Employee{
    constructor(id, email ,github) {
        super(id,email,github);
        this.employeeRole = this.employeeRole;
    }
    officeNumber(){
        return this.employeeRole;
    }
    
    Role(){
        return "Manager";
    }
}

module.exports = Manager;
