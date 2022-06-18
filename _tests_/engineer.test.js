const Engineer = require("../lib/engineer");

describe("Engineer")
it("Creates new engineer", () => {
    const engineer = new Engineer("Your engineer", "ab12", "your@engineer.com", "your-engineer");
    expect(engineer.name).toBe("Your engineer");
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})

describe("get")
it("Checks all methods for Engineer class", () => {
    const engineer = new Engineer("Your engineer", "ab12", "your@engineer.com", "your-engineer");
    expect(engineer.getName()).toBe(engineer.name);
    expect(engineer.getId()).toBe(engineer.id);
    expect(engineer.getEmail()).toBe(engineer.email);
    expect(engineer.getGithub()).toBe(engineer.github);
    expect(engineer.getRole()).toBe("Engineer");
})