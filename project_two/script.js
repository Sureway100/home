const quizData = [
  {
    question: "Nigerians independence is what year",
    a: "1940",
    b: "1950",
    c: "1960",
    d: "1970",
    correct: "c",
  },
  {
    question: "most used andriod porgramming language",
    a: "java",
    b: "c",
    c: "python",
    d: "javascript",
    correct: "d",
  },
  {
    question: "who is the president of US",
    a: "shehu",
    b: "trump",
    c: "fenila",
    d: "buhari",
    correct: "b",
  },
  {
    question: "language of the browser",
    a: "html",
    b: "css",
    c: "json",
    d: "api",
    correct: "a",
  },
  {
    question: "what year was javascript launched",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");

//picking all  inputs with clas of answer
const answerEls = document.querySelectorAll(".answer");

const questionE1 = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionE1.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  //check to see  the answer

  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2> you answered correctly  ${score} / ${quizData.length} questions.
      </h2> <button onclick="location.reload()">RELOAD</button>
      `;
    }
  }
});
