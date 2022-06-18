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
  const manager = managerData => {
    return `
    <div class="card border-dark mb-3 col-12 d-flex justify-content-center" style="max-width: 18rem;">
    <div class="card-header custom-header">${managerData.getName()}</div>
    <div class="card-body text-light custom-body">
      <h5 class="card-title">${managerData.getRole()}</h5>
      <ul>
        <li>${managerData.getId()}</li>
        <li>${managerData.getEmail()}</li>
        <li>${managerData.getOffice()}</li>
      </ul>
    </div>
  </div>
` }
  const engineer = engineerData => { 
    return`
    <div class="card border-dark mb-3 col-12 d-flex justify-content-center" style="max-width: 18rem;">
    <div class="card-header custom-header">${engineerData.getName()}</div>
    <div class="card-body text-light custom-body">
      <h5 class="card-title">${engineerData.getRole()}</h5>
      <ul>
        <li>${engineerData.getId()}</li>
        <li>${engineerData.getEmail()}</li>
        <li>${engineerData.getGithub()}</li>
      </ul>
    </div>
  </div>
` }
  

  const intern = internData => { 
    return`
    <div class="card border-dark mb-3 col-12 d-flex justify-content-center" style="max-width: 18rem;">
    <div class="card-header custom-header">${internData.getName()}</div>
    <div class="card-body text-light custom-body">
      <h5 class="card-title">${internData.getRole()}</h5>
      <ul>
        <li>${internData.getId()}</li>
        <li>${internData.getEmail()}</li>
        <li>${internData.getSchool()}</li>
      </ul>
    </div>
  </div>
` }

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
<header class = "container">
<div class = "d-flex justify-center my-team">
  <h1> Meet The Team! </h1>
</div>
</header>
<main class = "container custom-container d-flex justify-content-center">
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