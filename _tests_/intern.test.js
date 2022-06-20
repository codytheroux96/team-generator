const Intern = require("../lib/intern");

describe("Intern", () => {
it("Creates new Intern", () => {
    const intern = new Intern("Your intern", "ab12", "your@intern.com", "intern-school");
    expect(intern.name).toBe("Your intern");
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

describe("get", () => {
it("Checks all methods for Intern class", () => {
    const intern = new Intern("Your intern", "ab12", "your@intern.com", "intern-school");
    expect(intern.getName()).toBe(intern.name);
    expect(intern.getId()).toBe(intern.id);
    expect(intern.getEmail()).toBe(intern.email);
    expect(intern.getSchool()).toBe(intern.school);
    expect(intern.getRole()).toBe("Intern");
})
})
})