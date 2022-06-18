const Employee = require("../lib/employee");

describe("Employee")
it("Creates new employee", () => {
    const employee = new Employee("Your employee", "ab12", "your@employee.com");
    expect(employee.name).toBe("Your employee");
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
})

describe("get")
it("Checks all methods for Employee class", () => {
    const employee = new Employee("Your employee", "ab12", "your@employee.com");
    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe("Employee");
})
