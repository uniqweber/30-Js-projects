const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      {
        text: "Paris",
        correct: true,
      },
      {
        text: "London",
        correct: false,
      },
      {
        text: "Berlin",
        correct: false,
      },
      {
        text: "Madrid",
        correct: false,
      },
    ],
  },
  {
    question: "What is the capital of Germany?",
    answers: [
      {
        text: "Paris",
        correct: false,
      },
      {
        text: "London",
        correct: false,
      },
      {
        text: "Berlin",
        correct: true,
      },
      {
        text: "Madrid",
        correct: false,
      },
    ],
  },
  {
    question: "What is the capital of Italy?",
    answers: [
      {
        text: "Paris",
        correct: false,
      },
      {
        text: "Rome",
        correct: true,
      },
      {
        text: "Madrid",
        correct: false,
      },
      {
        text: "Berlin",
        correct: false,
      },
    ],
  },
  {
    question: "What is the capital of Spain?",
    answers: [
      {
        text: "Paris",
        correct: false,
      },
      {
        text: "Madrid",
        correct: true,
      },
      {
        text: "Rome",
        correct: false,
      },
      {
        text: "Berlin",
        correct: false,
      },
    ],
  },
];

const questionTitle = document.getElementById("question");
const answerBox = document.getElementById("answers");
const nextButton = document.getElementById("next");

let currentQuestion = 0;
let score = 0;

function showQuiz() {
  answerBox.innerHTML = "";
  questionTitle.innerText = `${currentQuestion + 1}. ${
    questions[currentQuestion].question
  }`;
  questions[currentQuestion].answers.forEach(({ text, correct }) => {
    const button = document.createElement("button");
    button.innerText = text;
    button.classList.add(
      "px-4",
      "py-2",
      "rounded-md",
      "border",
      "border-gray-300",
      "hover:bg-gray-800",
      "hover:text-white",
      "duration-300"
    );
    // button.dataset.correct = correct;
    answerBox.appendChild(button);
    // button.addEventListener("click", handleAnswerClick);
    button.addEventListener("click", () => {
      handleAnswerClick(button, correct);
    });
  });
}

function handleAnswerClick(option, answer) {
  //   const button = e.target;
  //   button.classList.add(
  //     button.dataset.correct === "true" ? "bg-green-500" : "bg-red-500"
  //   );
  //   if (button.dataset.correct === "true") {
  //     score++;
  //   } else {
  //     Array.from(answerBox.children).forEach((btn) => {
  //       btn.dataset.correct === "true" && btn.classList.add("bg-green-500");
  //     });
  //   }
  //   [...answerBox.children].forEach((btn) => {
  //     btn.disabled = true;
  //     btn.classList.add("cursor-not-allowed");
  //     btn.classList.remove("hover:bg-gray-800", "hover:text-white");
  //   });
  option.classList.add(answer ? "bg-green-500" : "bg-red-500");
  answer && score++;
  !answer &&
    [...answerBox.children].forEach(
      (btn, index) =>
        questions[currentQuestion].answers[index].correct &&
        btn.classList.add("bg-green-500")
    );

  [...answerBox.children].forEach((btn) => {
    btn.disabled = true;
    btn.classList.add("cursor-not-allowed");
    btn.classList.remove("hover:bg-gray-800", "hover:text-white");
  });

  nextButton.classList.remove("hidden");
  nextButton.classList.remove("hidden");
  nextButton.addEventListener("click", handleNextButton);
}

function handleNextButton() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuiz();
  } else {
    showScore();
  }
}

function showScore() {
  questionTitle.innerText = `You scored ${score} out of ${questions.length}`;
  answerBox.innerHTML = "";
  nextButton.innerText = "Play Again";
  nextButton.classList.remove("hidden");
  nextButton.addEventListener("click", playAgain);
}

function playAgain() {
  score = 0;
  currentQuestion = 0;
  nextButton.innerText = "Next";
  nextButton.classList.add("hidden");
  nextButton.removeEventListener("click", playAgain);
  showQuiz();
}

showQuiz();
