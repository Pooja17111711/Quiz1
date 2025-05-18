
const questions = {
  education: [
    {
      question: "Q) How many players in a football team?",
      options: ["9", "10", "11", "12"],
      answer: 2
    },
    {
      question: "Q) Which country won FIFA 2018?",
      options: ["Germany", "Brazil", "France", "Argentina"],
      answer: 2
    }
  ],
  sports: [
    {
      question: "Q) How many players in a football team?",
      options: ["9", "10", "11", "12"],
      answer: 2
    },
    {
      question: "Q) Which country won FIFA 2018?",
      options: ["Germany", "Brazil", "France", "Argentina"],
      answer: 2
    }
  ],
  political: [
    {
      question: "Q) Who is the president of the USA in 2024?",
      options: ["Biden", "Trump", "Obama", "Bush"],
      answer: 0
    }
  ],
  custom: []
};

let currentQuiz = [];
let currentIndex = 0;
let score = 0;
 let selectedAnswer = null;

function showSection(className) {
  document.querySelectorAll('.menu, .quiz, .create-quiz, .result, .custom-quiz-view').forEach(div => div.classList.remove('active'));
  document.querySelector(`.${className}`).classList.add('active');
}

function startQuiz(type) {
  currentQuiz = questions[type];
  currentIndex = 0;
  score = 0;
  selectedAnswer = null;
  showSection('quiz');
  loadQuestion();
}

function loadQuestion() {
  const q = currentQuiz[currentIndex];
  document.getElementById('questionText').textContent = q.question;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
   selectedAnswer = null;

  q.options.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
     btn.className = 'option-btn';

    btn.onclick = () => {
       document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedAnswer = index;
          };
          optionsDiv.appendChild(btn);
        });
}
function nextQuestion() {
        if (selectedAnswer === null) {
          alert("Please select an option before proceeding.");
          return;
        }
        const correctAnswer = currentQuiz[currentIndex].answer;
        if (selectedAnswer === correctAnswer) score++;
        currentIndex++;
        if (currentIndex < currentQuiz.length) {
          loadQuestion();
        } else {
          showResult();
        }
      }

function showResult() {
  showSection('result');
  document.getElementById('score').textContent = `You scored ${score} out of ${currentQuiz.length}`;
}

 function goHome() {
        questions.custom = [];
        showSection('menu');
      }

function showCreateQuiz() {
  questions.custom = []; // reset on every visit
  document.getElementById('customQuestion').value = '';
  document.getElementById('customOption1').value = '';
  document.getElementById('customOption2').value = '';
  document.getElementById('customOption3').value = '';
  document.getElementById('customOption4').value = '';
  document.getElementById('customAnswer').value = '';
  showSection('create-quiz');
}

function addCustomQuestion() {
  const question = document.getElementById('customQuestion').value;
  const options = [
    document.getElementById('customOption1').value,
    document.getElementById('customOption2').value,
    document.getElementById('customOption3').value,
    document.getElementById('customOption4').value
  ];
  const answer = parseInt(document.getElementById('customAnswer').value) - 1;

  if (question && options.every(opt => opt) && answer >= 0 && answer < 4) {
    questions.custom.push({ question, options, answer });
    alert('Question added!');
    // Clear inputs
    document.getElementById('customQuestion').value = '';
    document.getElementById('customOption1').value = '';
    document.getElementById('customOption2').value = '';
    document.getElementById('customOption3').value = '';
    document.getElementById('customOption4').value = '';
    document.getElementById('customAnswer').value = '';
  } else {
    alert("Please fill out all fields and ensure the answer is 1-4.");
  }
}

function finishCustomQuiz() {
  if (questions.custom.length === 0) {
    alert('Please add atleast one question');
  } else {
    showSection('custom-quiz-view');
  }
}
