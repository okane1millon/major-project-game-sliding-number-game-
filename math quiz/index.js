const allQuestions = [
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
    { question: "What is 5 - 3?", options: ["2", "3", "4", "5"], answer: "2" },
    { question: "What is 7 * 3?", options: ["21", "20", "22", "19"], answer: "21" },
    { question: "What is 12 / 4?", options: ["3", "4", "2", "6"], answer: "3" },
    { question: "What is 9 + 8?", options: ["17", "16", "18", "15"], answer: "17" },
    { question: "What is 10 - 7?", options: ["2", "3", "4", "5"], answer: "3" },
    { question: "What is 6 * 5?", options: ["30", "25", "35", "40"], answer: "30" },
    { question: "What is 15 / 3?", options: ["5", "4", "6", "7"], answer: "5" },
    { question: "What is 8 + 11?", options: ["19", "18", "20", "21"], answer: "19" },
    { question: "What is 14 - 6?", options: ["8", "9", "7", "10"], answer: "8" },
    { question: "What is 3 * 7?", options: ["21", "20", "22", "19"], answer: "21" },
    { question: "What is 18 / 2?", options: ["9", "8", "7", "10"], answer: "9" },
    { question: "What is 11 + 9?", options: ["20", "21", "22", "19"], answer: "20" },
    { question: "What is 13 - 5?", options: ["8", "9", "7", "10"], answer: "8" },
    { question: "What is 4 * 6?", options: ["24", "25", "23", "22"], answer: "24" },
    { question: "What is 20 / 4?", options: ["5", "4", "6", "7"], answer: "5" },
    { question: "What is 7 + 12?", options: ["19", "18", "20", "21"], answer: "19" },
    { question: "What is 9 - 4?", options: ["5", "6", "4", "7"], answer: "5" },
    { question: "What is 5 * 5?", options: ["25", "20", "30", "15"], answer: "25" },
    { question: "What is 36 / 6?", options: ["6", "5", "7", "8"], answer: "6" },
    { question: "What is 15 + 7?", options: ["22", "23", "24", "21"], answer: "22" },
    { question: "What is 18 - 9?", options: ["9", "8", "10", "11"], answer: "9" },
    { question: "What is 8 * 3?", options: ["24", "25", "23", "22"], answer: "24" },
    { question: "What is 24 / 4?", options: ["6", "5", "7", "8"], answer: "6" },
    { question: "What is 13 + 6?", options: ["19", "20", "21", "18"], answer: "19" },
    { question: "What is 11 - 4?", options: ["7", "8", "6", "9"], answer: "7" },
    { question: "What is 9 * 2?", options: ["18", "20", "16", "22"], answer: "18" },
    { question: "What is 40 / 5?", options: ["8", "7", "9", "10"], answer: "8" },
    { question: "What is 14 + 8?", options: ["22", "23", "24", "21"], answer: "22" },
    { question: "What is 17 - 6?", options: ["11", "10", "12", "9"], answer: "11" },
    { question: "What is 7 * 4?", options: ["28", "30", "26", "32"], answer: "28" },
    { question: "What is 27 / 3?", options: ["9", "8", "7", "10"], answer: "9" },
    { question: "What is 16 + 5?", options: ["21", "22", "20", "23"], answer: "21" },
    { question: "What is 12 - 7?", options: ["5", "6", "4", "7"], answer: "5" },
    { question: "What is 6 * 3?", options: ["18", "20", "22", "16"], answer: "18" },
    { question: "What is 30 / 6?", options: ["5", "6", "4", "7"], answer: "5" },
    { question: "What is 19 + 4?", options: ["23", "24", "22", "25"], answer: "23" },
    { question: "What is 8 - 3?", options: ["5", "6", "4", "7"], answer: "5" },
    { question: "What is 5 * 6?", options: ["30", "32", "28", "25"], answer: "30" },
    { question: "What is 42 / 7?", options: ["6", "5", "7", "8"], answer: "6" },
    { question: "What is 22 + 5?", options: ["27", "26", "28", "29"], answer: "27" },
    { question: "What is 17 - 7?", options: ["10", "11", "9", "12"], answer: "10" },
    { question: "What is 5 * 8?", options: ["40", "42", "38", "44"], answer: "40" },
    { question: "What is 45 / 5?", options: ["9", "8", "7", "10"], answer: "9" },
    { question: "What is 30 + 4?", options: ["34", "32", "36", "35"], answer: "34" },
    { question: "What is 24 - 9?", options: ["15", "16", "14", "17"], answer: "15" },
    { question: "What is 7 * 6?", options: ["42", "44", "40", "38"], answer: "42" },
    { question: "What is 63 / 7?", options: ["9", "8", "10", "11"], answer: "9" },
    { question: "What is 27 + 6?", options: ["33", "32", "30", "34"], answer: "33" },
    { question: "What is 12 - 5?", options: ["7", "8", "6", "9"], answer: "7" },
    { question: "What is 9 * 7?", options: ["63", "60", "64", "61"], answer: "63" },
    { question: "What is 72 / 8?", options: ["9", "8", "10", "7"], answer: "9" },
    { question: "What is 14 + 9?", options: ["23", "22", "24", "25"], answer: "23" },
    { question: "What is 20 - 6?", options: ["14", "15", "13", "16"], answer: "14" },
    { question: "What is 8 * 9?", options: ["72", "71", "70", "69"], answer: "72" },
    { question: "What is 48 / 6?", options: ["8", "9", "10", "7"], answer: "8" }
];

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let questionCount = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

document.addEventListener("DOMContentLoaded", () => {
    questions = shuffle([...allQuestions]); // Shuffle questions on page load
    showQuestion();
    document.getElementById("next-button").addEventListener("click", handleNext);
});

function showQuestion() {
    const questionContainer = document.getElementById("question-container");
    const questionData = questions[currentQuestionIndex];
    
    if (!questionData) {
        showFinalResult();
        return;
    }

    questionContainer.innerHTML = `
        <h2>${questionData.question}</h2>
        ${questionData.options.map(option => `
            <div class="option" onclick="selectOption('${option}', this)">${option}</div>
        `).join('')}
    `;
    document.getElementById("next-button").disabled = true; // Disable the next button until an option is selected
}

function selectOption(selectedOption, element) {
    const questionData = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');

    // Disable all options
    options.forEach(option => option.style.pointerEvents = 'none');

    // Highlight selected option
    if (selectedOption === questionData.answer) {
        element.classList.add('correct');
        score += 20; // Award 20 points for a correct answer
    } else {
        element.classList.add('incorrect');
        // Highlight the correct option
        options.forEach(option => {
            if (option.textContent === questionData.answer) {
                option.classList.add('correct');
            }
        });
    }

    document.getElementById("next-button").disabled = false; // Enable the next button
    questionCount++;
}

function handleNext() {
    if (questionCount % 5 === 0) {
        showScoreCard();
    } else {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showFinalResult();
        }
    }
}

function showScoreCard() {
    document.querySelector('.quiz-container').innerHTML = `
        <div id="score-card">
            <h2>Score Card</h2>
            <p>Your current score: ${score}</p>
            <button id="restart-button">Restart</button>
        </div>
    `;

    document.getElementById("restart-button").addEventListener("click", () => {
        // Reload the page to restart the quiz
        location.reload();
    });

    document.getElementById("continue-button").addEventListener("click", () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showFinalResult();
        }
    });
}

function showFinalResult() {
    document.querySelector('.quiz-container').innerHTML = `
        <div id="final-result">
            <h2>Your Final Score: ${score} / ${questions.length * 20}</h2>
            <button id="restart-button">Restart</button>
        </div>
    `;

    document.getElementById("restart-button").addEventListener("click", () => {
        // Reload the page to restart the quiz
        location.reload();
    });
}
