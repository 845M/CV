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
  },
  {
    question: "What is the purpose of CSS?",
    answers: [
      "To structure web pages",
      "To style web pages",
      "To add interactivity",
      "To store data"
    ],
    correct: 1
  },
  {
    question: "What does JS stand for?",
    answers: [
      "JavaScript",
      "Just Style",
      "Java Style",
      "JScript"
    ],
    correct: 0
  },
  {
    question: "Which tag is used for headings in HTML?",
    answers: [
      "<p>",
      "<h1>",
      "<div>",
      "<span>"
    ],
    correct: 1
  },
  {
    question: "What is Bootstrap?",
    answers: [
      "A JavaScript framework",
      "A CSS framework",
      "A database",
      "An operating system"
    ],
    correct: 1
  },
  {
    question: "What is the DOM?",
    answers: [
      "Document Object Model",
      "Data Object Model",
      "Dynamic Object Model",
      "Document Oriented Model"
    ],
    correct: 0
  },
  {
    question: "Which method is used to add an element to the end of an array in JavaScript?",
    answers: [
      "push()",
      "pop()",
      "shift()",
      "unshift()"
    ],
    correct: 0
  },
  {
    question: "What does API stand for?",
    answers: [
      "Application Programming Interface",
      "Advanced Programming Interface",
      "Application Process Interface",
      "Advanced Process Interface"
    ],
    correct: 0
  },
  {
    question: "Which HTML element is used for forms?",
    answers: [
      "<form>",
      "<input>",
      "<button>",
      "<label>"
    ],
    correct: 0
  },
  {
    question: "What is responsive design?",
    answers: [
      "Design that adapts to different screen sizes",
      "Design with fixed widths",
      "Design for mobile only",
      "Design for desktop only"
    ],
    correct: 0
  },
  {
    question: "Which CSS property is used for text color?",
    answers: [
      "color",
      "background-color",
      "font-size",
      "margin"
    ],
    correct: 0
  },
  {
    question: "What is Git?",
    answers: [
      "A version control system",
      "A programming language",
      "A database",
      "A framework"
    ],
    correct: 0
  },
  {
    question: "What is the latest version of HTML?",
    answers: [
      "HTML4",
      "HTML5",
      "XHTML",
      "HTML3"
    ],
    correct: 1
  },
  {
    question: "Which JavaScript keyword is used to declare a constant variable?",
    answers: [
      "var",
      "let",
      "const",
      "function"
    ],
    correct: 2
  },
  {
    question: "What does PHP stand for?",
    answers: [
      "Personal Home Page",
      "PHP: Hypertext Preprocessor",
      "Public HTML Processor",
      "Private Hosting Platform"
    ],
    correct: 1
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
