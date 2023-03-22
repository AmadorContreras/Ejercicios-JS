export class Employee {

    constructor(id, nif, name, surname1, surname2, email, salary){
        this.id=id;
        this.nif=nif;
        this.name=name;
        this.surname1=surname1;
        this.surname2=surname2;
        this.email=email;
        this.salary=salary;
        
    }
    render (){
        return `
        <div>
            <p>
            ${this.name}
            ${this.surname1}
            ${this.surname2}
            </p>
            <p>${this.salary} €</p>
        </div>
        `;

    }

}