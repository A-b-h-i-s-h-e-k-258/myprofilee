// Function for calculating grades
const calculate = () => {
  // Getting input from user into height variable.
  let PSP = document.querySelector("#PSP").value;
  let FEE = document.querySelector("#FEE").value;
  let LAL = document.querySelector("#LAL").value;
  let EP = document.querySelector("#EP").value;
  let grades = "";

  // Input is string so typecasting is necessary. */
  let totalgrades =
    parseFloat(PSP) +
    parseFloat(FEE) +
    parseFloat(LAL) +
    parseFloat(EP);
    totalgrades*=10;

  // Checking the condition for the providing the
  // grade to student based on percentage
  let percentage = (totalgrades / 400) * 100;
  if (percentage <= 100 && percentage >= 80) {
    grades = "A";
  } else if (percentage <= 79 && percentage >= 60) {
    grades = "B";
  } else if (percentage <= 59 && percentage >= 40) {
    grades = "C";
  } else {
    grades = "F";
  }
  // Checking the values are empty if empty than
  // show please fill them
  if (PSP == "" || FEE == "" || LAL == "" || EP == "") {
    document.querySelector("#showdata").innerHTML =
      "Please enter all the fields";
  } else {
    // Checking the condition for the fail and pass
    if (percentage >= 39.5) {
      document.querySelector(
        "#showdata"
      ).innerHTML = ` Out of 40 your total is ${totalgrades/10} 
            and CGPA is ${percentage/10}. <br> 
            Your grade is ${grades}. You are Pass. `;
    } else {
      document.querySelector(
        "#showdata"
      ).innerHTML = ` Out of 40 your total is ${totalgrades/10} 
            and CGPA is ${percentage/10}. <br> 
            Your grade is ${grades}. You are Fail. `;
    }
  }
};
