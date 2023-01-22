// JavaScript for the Quiz page
var selectedQuestions = []
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
    selectedQuestions = allQuestions.slice(0, 10);
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
    var correctAnswer = selectedQuestions[i].answer;
    resultHTML += "<p>Question " + (i + 1) + ": " + correctAnswer + "</p>";
  }
  document.getElementById("result").innerHTML = resultHTML;
  document.getElementById("result").style.display = "block";
}

// Shuffle function
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}