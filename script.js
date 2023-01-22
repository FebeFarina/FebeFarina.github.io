// JavaScript for the Quiz page

// Get questions from JSON files
var allQuestions = []
Promise.all([
  fetch('data/questions1.json'),
  fetch('data/questions2.json'),
  fetch('data/questions3.json'),
  fetch('data/questions4.json'),
  fetch('data/questions5.json')
])
  .then(responses => Promise.all(responses.map(res => res.json())))
  .then(questionArrays => {
    // flatten the arrays
    allQuestions = questionArrays.flat();
    // Shuffle the questions
    shuffle(allQuestions);
    // Get 2 random questions from each file
    var selectedQuestions = allQuestions.slice(0, 10);
    // Generate HTML for the questions
    var quizHTML = "";
    for (var i = 0; i < selectedQuestions.length; i++) {
      quizHTML += "<p>" + selectedQuestions[i].question + "</p>";
      quizHTML += "<input type='text' id='answer" + i + "'>";
    }
    // Add the questions to the page
    document.getElementById("questions").innerHTML = quizHTML;
    // Add event listener to submit button
    document.getElementById("quiz-form").addEventListener("submit", function (e) {
      e.preventDefault();
      showAnswers();
    });
  });
// Function to show the answers
function showAnswers() {
  var resultHTML = "";
  for (var i = 0; i < selectedQuestions.length; i++) {
    var userAnswer = document.getElementById("answer" + i).value;
    var correctAnswer = selectedQuestions[i].answer;
    if (userAnswer === correctAnswer) {
      resultHTML += "<p>Question " + (i + 1) + ": Correct</p>";
    } else {
      resultHTML += "<p>Question " + (i + 1) + ": Incorrect, the correct answer is: " + correctAnswer + "</p>";
    }
  }
  document.getElementById("result").innerHTML = resultHTML;
  document.getElementById("result").style.display = "block";
}

