class Employee {
	constructor(salary) {
		this.salary = salary;
	}
	GetSalary() {
		return this.salary + '$';
	}
}

let employee = new Employee(4000);
console.log(employee.GetSalary());