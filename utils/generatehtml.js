//function that writes this information to a new html page
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
//these are the employee cards that will be generated with the info that the user gives by answering the corresponding prompts
const generatehtml = (data) => {
  const manager = managerData => {
    return `
    <div class="card border-dark mb-3 col-12 d-flex justify-content-center custom-card" style="max-width: 18rem;">
    <div class="card-header">${managerData.getName()}</div>
    <div class="card-body text-dark">
      <h5 class="card-title">${managerData.getRole()}</h5>
      <ul>
        <li>ID: ${managerData.getId()}</li>
        <li>Email: ${managerData.getEmail()}</li>
        <li>Office number: ${managerData.getOffice()}</li>
      </ul>
    </div>
  </div>
` }

  const engineer = engineerData => { 
    return`
    <div class="card border-dark mb-3 col-12 d-flex justify-content-center custom-card" style="max-width: 18rem;">
    <div class="card-header">${engineerData.getName()}</div>
    <div class="card-body text-dark">
      <h5 class="card-title">${engineerData.getRole()}</h5>
      <ul>
        <li>ID: ${engineerData.getId()}</li>
        <li>Email: ${engineerData.getEmail()}</li>
        <li>Github: ${engineerData.getGithub()}</li>
      </ul>
    </div>
  </div>
` }
  
  const intern = internData => { 
    return`
    <div class="card border-dark mb-3 col-12 d-flex justify-content-center custom-card" style="max-width: 18rem;">
    <div class="card-header">${internData.getName()}</div>
    <div class="card-body text-dark">
      <h5 class="card-title">${internData.getRole()}</h5>
      <ul>
        <li>ID: ${internData.getId()}</li>
        <li>Email: ${internData.getEmail()}</li>
        <li>School: ${internData.getSchool()}</li>
      </ul>
    </div>
  </div>
` }
//this for loop will generate a new employee card depending on which employee the user selects to give info about
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
  //this is the template for the html that will be generated
  const template = data => {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Generator</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
      integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
</head>

<body>
<header class = "container col-12 md-6 custom-header">
<div class = "d-flex justify-center my-team">
  <h1> Meet The Team! </h1>
</div>
</header>
<main class = "container d-flex justify-content-center custom-container">
${employeessCards(data)}
</main>
    
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"></script>
</html>
`
  }

  writeToFile(template(data));
}
module.exports = generatehtml;