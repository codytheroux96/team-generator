const {Engineer} = require("../lib/engineer");

test("Creates new Engineer", () => {
    const employee = new Engineer("Your engineer", "ab12", "your@engineer.com", "your-engineer");
    expect(employee.name).toBe("Your engineer");
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));
})

test("Checks all methods for Engineer class", () => {
    const employee = new Engineer("Your engineer", "ab12", "your@engineer.com", "your-engineer");
    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getGithub()).toBe(employee.github);
    expect(employee.getRole()).toBe("Engineer");
})