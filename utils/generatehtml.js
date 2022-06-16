const fs = require("fs");
function writeToFile(html){
  fs.writeFile("./output/index.html", html, function (error){
      if (error) {
          return console.log(error)
      }
      console.log("Success!")
      process.exit();
  })
}

const generatehtml = (data) => {
const template = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
</head>

<body>
    
      <div class="card bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">Manager Name</div>
        <div class="card-body">
          <h5 class="card-title">Manager</h5>
          <ul>
            <li>ID</li>
            <li>Email</li>
            <li>Office Number</li>
          </ul>
      </div>

      <div class="card bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">Engineer Name</div>
        <div class="card-body">
          <h5 class="card-title">Engineer</h5>
          <ul>
            <li>ID</li>
            <li>Email</li>
            <li>Github</li>
          </ul>
        </div>
      </div>
      
      <div class="card bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">Intern Name</div>
        <div class="card-body">
          <h5 class="card-title">Intern</h5>
          <ul>
            <li>ID</li>
            <li>Email</li>
            <li>School</li>
          </ul>
        </div>
      </div>
      
      
</body>

</html>`
writeToFile(template);
    }
module.exports = generatehtml;