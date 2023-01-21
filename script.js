function showAnswers() {
  var answers = document.getElementById("answers");
  answers.innerHTML = "";
  var question1 = document.getElementById("question1").value;
  var question2 = document.getElementById("question2").value;
  answers.innerHTML += "Answer 1: " + question1 + "<br>";
  answers.innerHTML += "Answer 2: " + question2 + "<br>";
  // Add code for the remaining 8 questions here
}
