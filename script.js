// JavaScript for the Quiz page

// Get questions from JSON file
fetch('questions.json')
  .then(response => response.json())
  .then(questions => {
    // Shuffle the questions
    shuffle(questions);

    // Get 10 random questions
    var selectedQuestions = questions.slice(0, 10);

    // Generate HTML for the questions
    var quizHTML = "";
    for (var i = 0; i < selectedQuestions.length; i++) {
      quizHTML += "<p>" + selectedQuestions[i].question + "</p>";
      quizHTML += "<input type='text' id='answer" + i + "'>";
    }

    // Add the questions to the page
    document.getElementById("questions").innerHTML = quizHTML;

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
  })

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
