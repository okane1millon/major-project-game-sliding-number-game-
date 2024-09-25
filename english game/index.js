const words = [
    { word: "cat", hint: "A small animal that purrs." },
    { word: "dog", hint: "A popular pet known for barking." },
    { word: "ball", hint: "A round toy used in many games." },
    { word: "car", hint: "A vehicle used for traveling on roads." },
    { word: "sun", hint: "The big bright star in the sky." },
    { word: "hat", hint: "Something you wear on your head." },
    { word: "bat", hint: "A flying animal or a tool used in baseball." },
    { word: "book", hint: "A set of pages with words to read." },
    { word: "cup", hint: "A small container used for drinking." },
    { word: "fish", hint: "An animal that swims in water." },
    { word: "tree", hint: "A tall plant with leaves and a trunk." },
    { word: "milk", hint: "A white drink from cows." },
    { word: "bird", hint: "An animal with wings that can fly." },
    { word: "bed", hint: "Furniture where you sleep." },
    { word: "shoe", hint: "What you wear on your feet." },
    { word: "egg", hint: "Food that comes from chickens." },
    { word: "frog", hint: "A green animal that jumps and lives near water." },
    { word: "bag", hint: "Something you use to carry things." },
    { word: "kite", hint: "A toy that flies in the wind." },
    { word: "box", hint: "A container to store things." },
    { word: "key", hint: "An object used to unlock doors." },
    { word: "cake", hint: "A sweet dessert usually for birthdays." },
    { word: "door", hint: "A wooden or glass structure used to enter a room." },
    { word: "pen", hint: "A tool used for writing." },
    { word: "sock", hint: "Clothing worn on your feet inside shoes." },
    { word: "balloon", hint: "A colorful object filled with air or gas." },
    { word: "chair", hint: "Furniture used to sit on." },
    { word: "soap", hint: "Used to clean your hands." },
    { word: "plate", hint: "What you eat food on." },
    { word: "lamp", hint: "An object that gives light." },
    { word: "cow", hint: "An animal that gives milk." },
    { word: "rain", hint: "Water that falls from the sky." },
    { word: "snow", hint: "Frozen water that falls from the sky." },
    { word: "toy", hint: "Something kids play with." },
    { word: "apple", hint: "A red or green fruit." },
    { word: "banana", hint: "A yellow fruit." },
    { word: "soap", hint: "Used to wash your hands." },
    { word: "paint", hint: "Colored liquid used for art." },
    { word: "bear", hint: "A large animal that lives in forests." },
    { word: "star", hint: "A shiny object in the night sky." },
    { word: "bus", hint: "A large vehicle that carries people." },
    { word: "cake", hint: "A sweet treat, often eaten on birthdays." },
    { word: "train", hint: "A long vehicle that moves on tracks." },
    { word: "ice", hint: "Frozen water." },
    { word: "grape", hint: "A small round fruit." },
    { word: "mouse", hint: "A small animal that squeaks." },
    { word: "orange", hint: "A round fruit and also a color." },
    { word: "pencil", hint: "A tool used to write or draw." },
    { word: "water", hint: "A liquid we drink every day." },
    { word: "soap", hint: "What you use to clean yourself." },
    { word: "tree", hint: "A tall plant with leaves." },
    { word: "bread", hint: "A food used to make sandwiches." },
    { word: "plane", hint: "A flying vehicle." },
    { word: "moon", hint: "The object you see in the night sky." },
    { word: "pizza", hint: "A food with cheese and toppings." },
    { word: "sand", hint: "Tiny grains found on the beach." },
    { word: "leaf", hint: "Part of a tree or plant." },
    { word: "swing", hint: "A seat that moves back and forth in the park." },
    { word: "bus", hint: "A vehicle for many passengers." }
];

let currentWord = '';
let currentHint = '';
let score = 0;
let totalTurns = 0;
const maxTurns = 5;

function shuffleWord(word) {
    let array = word.split('');
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
}

function getNewWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex].word;
    currentHint = words[randomIndex].hint;
    return shuffleWord(currentWord);
}

function updateProgressReport() {
    const progressReportElement = document.getElementById("progress-report");
    progressReportElement.innerHTML = `
        <h2>Progress Report</h2>
        <p>Total Turns: ${totalTurns}</p>
        <p>Total Score: ${score}</p>
        <p>Each correct answer gives you 2 points!</p>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    const scrambledWordElement = document.getElementById("scrambled-word");
    const hintElement = document.getElementById("hint");
    const answerInput = document.getElementById("answer-input");
    const submitButton = document.getElementById("submit-button");
    const hintButton = document.getElementById("hint-button");
    const messageElement = document.getElementById("message");

    function displayScrambledWord() {
        scrambledWordElement.textContent = getNewWord();
        answerInput.value = "";
        messageElement.textContent = ""; // Clear any previous message
        hintElement.textContent = "";    // Clear the hint
    }

    function showHint() {
        hintElement.textContent = `Hint: ${currentHint}`;
    }

    function checkAnswer() {
        const userAnswer = answerInput.value.trim();

        if (userAnswer.toLowerCase() === currentWord.toLowerCase()) {
            messageElement.textContent = "Correct! Well done.";
            messageElement.className = 'message correct';
            score += 20; // 20 marks per correct answer
        } else {
            messageElement.textContent = "Incorrect!";
            messageElement.className = 'message incorrect'; // Ensure message is updated
        }

        totalTurns++;

        if (totalTurns % maxTurns === 0) {
            updateProgressReport();
        } else {
            displayScrambledWord(); // Move to the next word
        }
    }

    submitButton.addEventListener("click", checkAnswer);
    hintButton.addEventListener("click", showHint);

    // Initialize the game
    displayScrambledWord();
});
