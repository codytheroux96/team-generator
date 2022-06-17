const fs = require("fs");
function writeToFile(html) {
  fs.writeFile("./output/index.html", html, function (error) {
    if (error) {
      return console.log(error)
    }
    console.log("Success!")
    process.exit();
  })
}

const generatehtml = (data) => {
  console.log(data)
  const manager = managerData => `
  <div class="card bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header">${managerData.getName()}</div>
  <div class="card-body">
    <h5 class="card-title">${managerData.getRole()}</h5>
    <ul>
      <li>${managerData.getId()}</li>
      <li>${managerData.getEmail()}</li>
      <li>${managerData.getOffice()}</li>
    </ul>
  </div>
`
  

  const engineer = engineerData => `
  <div class="card bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header">${managerData.getName()}</div>
  <div class="card-body">
    <h5 class="card-title">${managerData.getRole()}</h5>
    <ul>
      <li>${engineerData.getId()}</li>
      <li>${engineerData.getEmail()}</li>
      <li>${engineerData.getGithub()}</li>
    </ul>
  </div>
`
  

  const intern = internData => `
  <div class="card bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header">${internData.getName()}</div>
  <div class="card-body">
    <h5 class="card-title">${internData.getRole()}</h5>
    <ul>
      <li>${internData.getId()}</li>
      <li>${internData.getEmail()}</li>
      <li>${internData.getSchool()}</li>
    </ul>
  </div>
`
  

  const employeessCards = employees => {
    let employeesHtml = ""
    for (i = 0; i < employees.length; i++) {
      if (employees[i].getRole() === "Manager") {
        employeesHtml += manager(employees[i])
      }
      if (employees[i].getRole() === "Engineer") {
        employeesHtml += engineer(employees[i])
      }
      if (employees[i].getRole() === "Intern") {
        employeesHtml += intern(employees[i])
      }
    }
    return employeesHtml;
  }
  writeToFile(employeessCards(data));
}
module.exports = generatehtml;