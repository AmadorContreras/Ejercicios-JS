import { Employee } from "../js/Employees.js";

export class Company {

    constructor(id, name, web, email, employees) {
        this.id = id;
        this.name = name;
        this.web = web;
        this.email = email;


        this.employees = employees;
    }

    render() {
        let employeesHTML = '';
        this.employees.forEach(emp => {
            // es lo que nos trae un parrafo
            employeesHTML += emp.render();
        });


        let totalSalary = 0;
        this.employees.forEach(e => {
            totalSalary += e.salary
        });

        return `
        <div>
            <div class="compainy">
                <div class="id"> ${this.id} </div>
                <div class="name"> ${this.name} </div>
                <div class="web"> ${this.web} </div>
                <div class="email"> ${this.email} </div>
            </div>
            <div class="emp-container">
                        <div class="employees"> ${employeesHTML} </div>
                        <div class="totalSalary">
                            <p> 
                                Total de gasto en salrios es de: ${totalSalary} €
                            </p>
                        </div>
            </div>
        </div>
            
        `;
    }
}