const {Manager} = require("../lib/manager");

test("Creates new Manager", () => {
    const employee = new Manager("Your manager", "ab12", "your@manager.com", "manager-school");
    expect(employee.name).toBe("Your manager");
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.office).toEqual(expect.any(String));
})

test("Checks all methods for Manager class", () => {
    const employee = new Manager("Your manager", "ab12", "your@manager.com", "1234");
    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getOffice()).toBe(employee.office);
    expect(employee.getRole()).toBe("Manager");
})