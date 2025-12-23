const questions = [
  {
    text: "How old is your AC system?",
    options: [
      { label: "Less than 5 years", score: 0 },
      { label: "5–10 years", score: 1 },
      { label: "10–15 years", score: 2 },
      { label: "Over 15 years", score: 3 }
    ]
  },
  {
    text: "How often does your system need repairs?",
    options: [
      { label: "Rarely", score: 0 },
      { label: "Once in a while", score: 1 },
      { label: "Every year", score: 2 },
      { label: "Multiple times per year", score: 3 }
    ]
  },
  {
    text: "How are your energy bills?",
    options: [
      { label: "Normal", score: 0 },
      { label: "Slightly higher", score: 1 },
      { label: "Much higher", score: 2 }
    ]
  }
];

let current = 0;
let totalScore = 0;

const app = document.getElementById("app");

function renderQuestion() {
  const q = questions[current];
  app.innerHTML = `
    <h2>${q.text}</h2>
    ${q.options.map(o => `
      <button onclick="answer(${o.score})">${o.label}</button>
    `).join("")}
  `;
}

function answer(score) {
  totalScore += score;
  current++;

  if (current < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  let result;
  if (totalScore <= 2) result = "Repair likely makes sense.";
  else if (totalScore <= 4) result = "You're at a tipping point.";
  else result = "Replacement is likely the better option.";

  app.innerHTML = `
    <h2>Your Result</h2>
    <p>${result}</p>
    <p>A professional evaluation can confirm the best next step.</p>
  `;
}

renderQuestion();
