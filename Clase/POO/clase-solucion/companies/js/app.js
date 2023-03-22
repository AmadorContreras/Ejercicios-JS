import { Company } from "../js/Company.js";
import { Employee } from "../js/Employees.js";
const container = document.querySelector('#com-container');


function init() {
    getCompanies();
}

init();


// Funcion que coge datos de companies
function getCompanies() {
    fetch("./data/companies.json")
        .then(res => res.json())
        .then(data => {
            data.forEach(com => {

                const employeesList = [];
                com.employees.forEach(emp => {
                    const empOBJ = new Employee(emp.id, emp.nif, emp.name, emp.surname1, emp.surname2, emp.email, emp.salary);
                    employeesList.push(empOBJ);
                });

                // Creamos los datos iniciales || JSON a Programacion orientada a objetos P.O.O.
                const company = new Company(com.id, com.name, com.web, com.email);
                container.innerHTML += company.render();
            });

        });
}


