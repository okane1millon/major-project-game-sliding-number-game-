const allQuestions = [
    { question: "What is the opposite of 'hot'?", options: ["cold", "warm", "sunny", "dry"], answer: "cold" },
    { question: "Which one is a noun?", options: ["run", "happily", "dog", "quickly"], answer: "dog" },
    { question: "Complete the sentence: She ___ a book.", options: ["reads", "read", "reading", "reader"], answer: "reads" },
    { question: "What is the plural of 'cat'?", options: ["cats", "cat", "cat's", "cates"], answer: "cats" },
    { question: "Which word is a verb?", options: ["quick", "jump", "blue", "sad"], answer: "jump" },
    { question: "What is the past tense of 'go'?", options: ["went", "goes", "going", "gone"], answer: "went" },
    { question: "What is the opposite of 'happy'?", options: ["sad", "joyful", "excited", "angry"], answer: "sad" },
    { question: "Which one is a proper noun?", options: ["city", "dog", "London", "book"], answer: "London" },
    { question: "Complete the sentence: They ___ to school every day.", options: ["go", "goes", "going", "gone"], answer: "go" },
    { question: "What is the singular of 'children'?", options: ["child", "childs", "childes", "childer"], answer: "child" },
    { question: "Which of these is a color?", options: ["jump", "green", "book", "run"], answer: "green" },
    { question: "What is the opposite of 'happy'?", options: ["sad", "fast", "tall", "slow"], answer: "sad" },
    { question: "Which word is a preposition?", options: ["under", "happy", "cat", "run"], answer: "under" },
    { question: "What is the correct form of 'be' for 'I'?", options: ["am", "is", "are", "was"], answer: "am" },
    { question: "Which word means 'quickly'?", options: ["slowly", "fast", "quietly", "loudly"], answer: "fast" },
    { question: "What is the opposite of 'young'?", options: ["old", "new", "big", "small"], answer: "old" },
    { question: "Which of these is an adjective?", options: ["beautiful", "run", "quickly", "happy"], answer: "beautiful" },
    { question: "What is the plural of 'child'?", options: ["children", "childs", "childes", "childs"], answer: "children" },
    { question: "What is the past tense of 'go'?", options: ["went", "goes", "going", "gone"], answer: "went" },
    { question: "Which word is an adverb?", options: ["slowly", "cat", "happy", "dog"], answer: "slowly" },
    { question: "What is the opposite of 'hot'?", options: ["cold", "warm", "big", "small"], answer: "cold" },
    { question: "Which word is a pronoun?", options: ["he", "happy", "blue", "apple"], answer: "he" },
    { question: "What is the correct form of 'have' for 'they'?", options: ["have", "has", "had", "having"], answer: "have" },
    { question: "Which word means 'a place where you live'?", options: ["house", "car", "tree", "book"], answer: "house" },
    { question: "What is the opposite of 'empty'?", options: ["full", "small", "big", "new"], answer: "full" },
    { question: "What is the plural of 'dog'?", options: ["dogs", "dog", "dog's", "doges"], answer: "dogs" },
    { question: "What is the opposite of 'slow'?", options: ["fast", "quick", "running", "walking"], answer: "fast" },
    { question: "Which one is a verb?", options: ["eat", "happy", "beautiful", "apple"], answer: "eat" },
    { question: "Which word is an adjective?", options: ["big", "eat", "run", "sadly"], answer: "big" },
    { question: "Complete the sentence: They ___ football.", options: ["play", "playing", "plays", "played"], answer: "play" },
    { question: "What is the past tense of 'eat'?", options: ["ate", "eaten", "eat", "eating"], answer: "ate" },
    { question: "Which word is an adverb?", options: ["slowly", "happy", "fast", "blue"], answer: "slowly" },
    { question: "What is the opposite of 'big'?", options: ["small", "tiny", "large", "huge"], answer: "small" },
    { question: "Which one is a proper noun?", options: ["John", "car", "city", "dog"], answer: "John" },
    { question: "Complete the sentence: He ___ to the store.", options: ["went", "going", "goes", "gone"], answer: "went" },
    { question: "Which one is a noun?", options: ["chair", "run", "sing", "quick"], answer: "chair" },
    { question: "What is the opposite of 'day'?", options: ["night", "light", "bright", "sun"], answer: "night" },
    { question: "Which word is a pronoun?", options: ["she", "quick", "blue", "apple"], answer: "she" },
    { question: "What is the plural of 'car'?", options: ["cars", "car", "car's", "cares"], answer: "cars" },
    { question: "What is the opposite of 'full'?", options: ["empty", "big", "small", "large"], answer: "empty" },
    { question: "Which one is a verb?", options: ["run", "quick", "blue", "sad"], answer: "run" },
    { question: "Complete the sentence: She ___ happy.", options: ["is", "are", "was", "am"], answer: "is" },
    { question: "What is the plural of 'box'?", options: ["boxes", "box", "box's", "boxs"], answer: "boxes" },
    { question: "Which one is a color?", options: ["red", "run", "happy", "dog"], answer: "red" },
    { question: "What is the opposite of 'light'?", options: ["dark", "bright", "blue", "small"], answer: "dark" },
    { question: "Which word is an adjective?", options: ["blue", "run", "quickly", "apple"], answer: "blue" },
    { question: "Complete the sentence: They ___ to the park.", options: ["go", "going", "went", "goes"], answer: "go" },
    { question: "What is the past tense of 'read'?", options: ["read", "reading", "reads", "reader"], answer: "read" },
    { question: "What is the opposite of 'short'?", options: ["tall", "small", "big", "large"], answer: "tall" },
    { question: "Which word is a preposition?", options: ["under", "happy", "run", "dog"], answer: "under" },
    { question: "Which word is a pronoun?", options: ["they", "blue", "run", "apple"], answer: "they" },
    { question: "Complete the sentence: The cat is ___ the table.", options: ["on", "in", "under", "over"], answer: "on" },
    { question: "What is the plural of 'apple'?", options: ["apples", "apple", "apple's", "appels"], answer: "apples" },
    { question: "What is the opposite of 'fast'?", options: ["slow", "quick", "small", "big"], answer: "slow" }
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
