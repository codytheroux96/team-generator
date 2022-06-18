const Manager = require("../lib/manager");

describe("Manager")
it("Creates new manager", () => {
    const manager = new Manager("Your manager", "ab12", "your@manager.com", "manager-school");
    expect(manager.name).toBe("Your manager");
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.school).toEqual(expect.any(String));
})

describe("get")
it("Checks all methods for manager class", () => {
    const manager = new manager("Your manager", "ab12", "your@manager.com", "1234");
    expect(manager.getName()).toBe(manager.name);
    expect(manager.getId()).toBe(manager.id);
    expect(manager.getEmail()).toBe(manager.email);
    expect(manager.getOffice()).toBe(manager.office);
    expect(manager.getRole()).toBe("Manager");
})