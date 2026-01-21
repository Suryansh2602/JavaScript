class Employee {
    #id;
    #name;
    #department;
    #salary;
    constructor(id, name, department, salary) {
        this.#id = id;
        this.#name = name;
        this.#department = department;
        this.#salary = salary;
    }
    displayInfo() {
        console.log(this.#department,
            this.#id, this.#name
        )
    }


}
emp = new Employee(1, "Suryansh", "IT", 50000);

emp.displayInfo();