const quizData = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Text Making Language"
    ],
    correct: 1
  },
  {
    question: "Which language is used for styling web pages?",
    answers: ["HTML", "JQuery", "CSS", "XML"],
    correct: 2
  },
  {
    question: "Which one is a JavaScript framework?",
    answers: ["Laravel", "Django", "React", "Bootstrap"],
    correct: 2
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEls = document.getElementsByName("answer");
const answerTexts = [
  document.getElementById("a_text"),
  document.getElementById("b_text"),
  document.getElementById("c_text"),
  document.getElementById("d_text")
];

function loadQuiz() {
  deselectAnswers();
  const q = quizData[currentQuestion];
  questionEl.innerText = q.question;
  q.answers.forEach((ans, index) => {
    answerTexts[index].innerText = ans;
  });
}

function deselectAnswers() {
  answersEls.forEach(a => a.checked = false);
}

function submitAnswer() {
  let selected = null;

  answersEls.forEach(answer => {
    if (answer.checked) {
      selected = parseInt(answer.value);
    }
  });

  if (selected === null) return;

  if (selected === quizData[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuiz();
  } else {
    document.getElementById("quiz-box").innerHTML =
      `<h3>You scored ${score} / ${quizData.length}</h3>`;
  }
}

loadQuiz();
