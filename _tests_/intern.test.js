const {Intern} = require("../lib/intern");

test("Creates new Intern", () => {
    const employee = new Intern("Your intern", "ab12", "your@intern.com", "intern-school");
    expect(employee.name).toBe("Your intern");
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
})

test("Checks all methods for Intern class", () => {
    const employee = new Intern("Your intern", "ab12", "your@intern.com", "intern-school");
    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getSchool()).toBe(employee.school);
    expect(employee.getRole()).toBe("Intern");
})