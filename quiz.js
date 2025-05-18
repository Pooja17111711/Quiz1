
const questions = {
  education: [
    {
      question: "Q1) What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Perth", "Canberra",],
      answer: 4
    },
    {
      question: "Q2) Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
      answer: 2
    },
    {
      question: "Q3) How many continents are there in the world?",
      options: ["5", "6", "7", "8"],
      answer: 3
    },
    {
      question: "Q4) In which year did World War II end?",
      options: ["1940", "1945", "1939", "1950"],
      answer: 2
    },
    {
      question: "Q5) Which part of the plant conducts photosynthesis?",
      options: ["Leaf", "Flower", "Root", "Stem"],
      answer: 1
    },
    {
      question: "Q6) Who discovered gravity?",
      options: ["Albert Einstein", "Galileo Galilei", " Isaac Newton", "Nikola Tesla"],
      answer: 3
    },
    {
      question: "Q7) What is the longest river in the world?",
      options: ["Amazon", "Yangtze", "Mississippi", "Nile"],
      answer: 4
    },
    {
      question: "Q8) Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Mercury"],
      answer: 2
    },
    {
      question: "Q9) What is the chemical symbol for gold?",
      options: ["Au", "G", "Ag", "Go"],
      answer: 1
    },
    {
      question: "Q10) Which planet is closest to the sun?",
      options: ["Earth", "Mars", "Mercury", "Venus"],
      answer: 3
    }

  ],
  sports: [
    {
      question: "Q1) Which country won the FIFA World Cup in 2022?",
      options: ["Germany", "Brazil", "France", "Argentina"],
      answer: 4
    },
    {
      question: "Q2) In which year were the first modern Olympics held?",
      options: ["1896", "1900", "1800", "1912"],
      answer: 1
    },
    {
      question: "Q3) In which year did India first win the Cricket World Cup?",
      options: ["1975", "2003", "1996", "1983"],
      answer: 4
    },
    {
      question: "Q4) What is the full name of BCCI?",
      options: ["Board of Cricket Control India", "Board of Control for Cricket in India", "Bureau of Cricket Council India", "Board Council for Cricket in India"],
      answer: 2
    },
    {
      question: "Q5) Who is the only cricketer to score 100 international centuries?",
      options: ["Ricky Ponting", "Virat Kohli", "Sachin Tendulkar", "MS Dhoni"],
      answer: 3
    },
    {
      question: "Q6) What is the length of a standard cricket pitch?",
      options: ["20 yards", "22 yards", "18 yards", "25 yards"],
      answer: 2
    },
    {
      question: "Q7) What does NBA stand for?",
      options: ["National Baseball Association", "National Basketball Association", " National Boxing Association", " None of these"],
      answer: 2
    },
    {
      question: "Q8) How many players are on a baseball team on the field?",
      options: ["9", "15", "10", "11"],
      answer: 1
    },
    {
      question: "Q9) Which Indian won the first individual Olympic gold medal?",
      options: ["Neeraj Chopra", "Abhinav Bindra", "Sushil Kumar", " Leander Paes"],
      answer: 2
    },
    {
      question: "Q10) Which country won the Cricket World Cup 2019",
      options: ["India", "England", "Australia", "New Zealand"],
      answer: 3
    }

  ],
  political: [
    {
      question: "Q1) Who is known as the 'Father of the Indian Nation'?",
      options: ["Mahatma Gandhi", "Trump", "Rajiv Gandhi", "None"],
      answer: 1
    },
    {
      question: "Q2) What is the upper house of the Indian Parliament called?",
      options: ["Lok Sabha",  "Senate", "Rajya Sabha", " Council of States"],
      answer: 3
    },
    {
      question: "Q3) Who was the first Prime Minister of India?",
      options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Narendra Modi"],
      answer: 2
    },
    {
      question: "Q4) Which article of the Constitution declares India as a secular state?",
      options: ["Article 14", "Article 25", "Article 44", "Preamble"],
      answer: 4
    },
    {
      question: "Q5) How many seats are there in the Lok Sabha?",
      options: ["545", "552", "500", "560"],
      answer: 1
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
