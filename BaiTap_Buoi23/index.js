console.log("Bài 1:");
class Employee {
  // Viết code ở đây
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    // this.language = language;
  }
  getInfo() {
    console.log(`${this.name} - Tuổi: ${this.age} - Lương: ${this.salary}`);
  }
}
class Developer extends Employee {
  // Viết code ở đây
  constructor(name, age, salary, language) {
    super(name, age, salary);
    this.language = language;
  }
}
class Manager extends Employee {
  // Viết code ở đây
  constructor(name, age, salary) {
    super(name, age, salary);
    this.employees = [];
  }
  addEmployee(employee) {
    return this.employees.push(employee);
  }
  getInfo() {
    console.log(`${this.name} - Tuổi: ${this.age} - Lương: ${this.salary}`);
  }
}
const dev1 = new Developer("John", 28, 5000, "JavaScript");
const dev2 = new Developer("Jane", 30, 5500, "Python");
const manager = new Manager("Alice", 35, 8000);
manager.addEmployee(dev1);
manager.addEmployee(dev2);
manager.getInfo();
// console.log(manager);
