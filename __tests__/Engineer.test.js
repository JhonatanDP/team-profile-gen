const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "JhonatanDP";
    const employeeInstance = new Engineer("Jhonatan", 2, "jonathandiazp@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "JhonatanDP";
    const employeeInstance = new Engineer("Jhonatan", 2, "jonathandiazp@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Jhonatan", 2, "jonathandiazp@gmail.com", "JhonatanDP");
    expect(employeeInstance.getRole()).toBe(returnValue);
});