const allQuestions = [
    { question: "‘गर्म’ का विपरीत क्या है?", options: ["ठंडा", "गर्म", "सूखा", "सूरज"], answer: "ठंडा" },
    { question: "नामवाचक शब्द कौन सा है?", options: ["दौड़ना", "खुशी से", "कुत्ता", "जल्दी"], answer: "कुत्ता" },
    { question: "वाक्य पूरा करें: वह ___ एक किताब।", options: ["पढ़ता है", "पढ़ते हैं", "पढ़ना", "पढ़ने वाला"], answer: "पढ़ता है" },
    { question: "‘बच्चे’ का एकवचन क्या है?", options: ["बच्चा", "बच्चे", "बच्चों", "बच्चा"], answer: "बच्चा" },
    { question: "क्रिया कौन सा शब्द है?", options: ["तेज़", "कूदना", "नीला", "उदास"], answer: "कूदना" },
    { question: "‘जाना’ का भूतकाल क्या है?", options: ["गया", "जाता है", "जाना", "जाते हैं"], answer: "गया" },
    { question: "‘खुश’ का विपरीत क्या है?", options: ["उदास", "आनंदित", "उत्साहित", "गुस्सा"], answer: "उदास" },
    { question: "सही नामवाचक शब्द कौन सा है?", options: ["शहर", "कुत्ता", "दिल्ली", "किताब"], answer: "दिल्ली" },
    { question: "वाक्य पूरा करें: वे ___ स्कूल जाते हैं।", options: ["जाते हैं", "जाता है", "जाना", "जाते"], answer: "जाते हैं" },
    { question: "‘बच्चे’ का एकवचन क्या है?", options: ["बच्चा", "बच्चे", "बच्चों", "बच्चा"], answer: "बच्चा" },
    { question: "‘सूरज’ का विपरीत क्या है?", options: ["चाँद", "तारा", "सूरज", "रात"], answer: "चाँद" },
    { question: "‘नीला’ का विशेषण क्या है?", options: ["रंग", "पशु", "वृक्ष", "पुष्प"], answer: "रंग" },
    { question: "‘वह’ का विशेषण क्या है?", options: ["सावधान", "उम्र", "आदमी", "नीला"], answer: "आदमी" },
    { question: "‘बच्चा’ का बहुवचन क्या है?", options: ["बच्चे", "बच्चों", "बच्चा", "बच्चा"], answer: "बच्चे" },
    { question: "‘दौड़ना’ का विपरीत क्या है?", options: ["रुकना", "चलना", "सिखना", "कूदना"], answer: "रुकना" },
    { question: "वाक्य पूरा करें: वह ___ बर्तन धोती है।", options: ["साफ", "साफ-सुथरा", "साफ-सुथरी", "साफ-सफाई"], answer: "साफ-सुथरी" },
    { question: "‘गाड़ी’ का बहुवचन क्या है?", options: ["गाड़ियों", "गाड़ियाँ", "गाड़ी", "गाड़ियों"], answer: "गाड़ियाँ" },
    { question: "‘किताब’ का बहुवचन क्या है?", options: ["किताबें", "किताब", "किताबों", "किताब"], answer: "किताबें" },
    { question: "वाक्य पूरा करें: मैं ___ खेलता हूँ।", options: ["कभी", "नहीं", "सपना", "हर दिन"], answer: "हर दिन" },
    { question: "‘संगीत’ का विपरीत क्या है?", options: ["शोर", "संगीत", "ध्वनि", "गाना"], answer: "शोर" },
    { question: "‘अच्छा’ का विपरीत क्या है?", options: ["बुरा", "अच्छा", "सुंदर", "मज़ेदार"], answer: "बुरा" },
    { question: "‘बड़ा’ का विपरीत क्या है?", options: ["छोटा", "बड़ा", "मोटा", "लंबा"], answer: "छोटा" },
    { question: "‘रात’ का विपरीत क्या है?", options: ["दिन", "रात", "सूरज", "चाँद"], answer: "दिन" },
    { question: "‘पानी’ का विशेषण क्या है?", options: ["ठंडा", "गर्म", "गहरा", "साफ"], answer: "साफ" },
    { question: "वाक्य पूरा करें: वह ___ जाती है।", options: ["पढ़ाई", "स्कूल", "खेल", "गाड़ी"], answer: "स्कूल" },
    { question: "‘कविता’ का विपरीत क्या है?", options: ["गद्य", "कहानी", "कविता", "गीत"], answer: "गद्य" },
    { question: "‘साल’ का बहुवचन क्या है?", options: ["साल", "सालों", "सालों", "साल"], answer: "साल" },
    { question: "‘हवा’ का विशेषण क्या है?", options: ["ताज़ा", "पुराना", "सर्द", "गर्म"], answer: "ताज़ा" },
    { question: "‘दुखी’ का विपरीत क्या है?", options: ["खुश", "उदास", "आनंदित", "मुस्कुराता"], answer: "खुश" },
    { question: "‘आनंद’ का विशेषण क्या है?", options: ["आनंदित", "दुख", "खुश", "उदासी"], answer: "आनंदित" },
    { question: "‘बाल’ का बहुवचन क्या है?", options: ["बाल", "बालों", "बाल", "बाल"], answer: "बाल" },
    { question: "‘पंखा’ का बहुवचन क्या है?", options: ["पंखे", "पंखा", "पंखा", "पंख"], answer: "पंखे" },
    { question: "‘दीवार’ का बहुवचन क्या है?", options: ["दीवार", "दीवारें", "दीवारों", "दीवार"], answer: "दीवारें" },
    { question: "वाक्य पूरा करें: वह ___ बहुत खुश है।", options: ["हमेशा", "कभी", "नहीं", "एक बार"], answer: "हमेशा" },
    { question: "‘बच्चा’ का विशेषण क्या है?", options: ["छोटा", "बड़ा", "मोटा", "पतला"], answer: "छोटा" },
    { question: "‘कला’ का विपरीत क्या है?", options: ["विज्ञान", "संगीत", "कला", "भाषा"], answer: "विज्ञान" },
    { question: "‘सपना’ का विशेषण क्या है?", options: ["असली", "नकली", "काल्पनिक", "सच्चा"], answer: "काल्पनिक" },
    { question: "‘मध्यम’ का विपरीत क्या है?", options: ["बड़ा", "छोटा", "ऊँचा", "कम"], answer: "छोटा" },
    { question: "‘घड़ी’ का बहुवचन क्या है?", options: ["घड़ियाँ", "घड़ी", "घड़ी", "घड़ी"], answer: "घड़ियाँ" },
    { question: "‘फल’ का बहुवचन क्या है?", options: ["फल", "फलियाँ", "फल", "फलों"], answer: "फलों" },
    { question: "‘किताब’ का विशेषण क्या है?", options: ["लाल", "पुरानी", "छोटी", "नयी"], answer: "नयी" },
    { question: "‘उम्र’ का विपरीत क्या है?", options: ["किशोर", "युवा", "बुजुर्ग", "छोटा"], answer: "छोटा" },
    { question: "‘पक्षी’ का बहुवचन क्या है?", options: ["पक्षी", "पक्षियों", "पक्षियों", "पक्षी"], answer: "पक्षी" },
    { question: "‘बच्चा’ का विशेषण क्या है?", options: ["छोटा", "बड़ा", "मोटा", "पतला"], answer: "छोटा" },
    { question: "‘नया’ का विपरीत क्या है?", options: ["पुराना", "नया", "हरा", "नीला"], answer: "पुराना" },
    { question: "‘घर’ का विशेषण क्या है?", options: ["लंबा", "बड़ा", "छोटा", "काले"], answer: "बड़ा" },
    { question: "‘टेबल’ का बहुवचन क्या है?", options: ["टेबल", "टेबलें", "टेबल", "टेबल"], answer: "टेबलें" },
    { question: "‘संतरा’ का बहुवचन क्या है?", options: ["संतरे", "संतरा", "संतरे", "संतरा"], answer: "संतरे" },
    { question: "‘अच्छा’ का विशेषण क्या है?", options: ["उम्दा", "साधारण", "बुरा", "खराब"], answer: "उम्दा" },
    { question: "‘फूल’ का बहुवचन क्या है?", options: ["फूल", "फूलों", "फूल", "फूल"], answer: "फूल" },
    { question: "‘कपड़ा’ का बहुवचन क्या है?", options: ["कपड़े", "कपड़ा", "कपड़े", "कपड़े"], answer: "कपड़े" },
    { question: "‘चाँद’ का विपरीत क्या है?", options: ["सूरज", "रात", "चाँद", "तारा"], answer: "सूरज" },
    { question: "‘गर्मी’ का विपरीत क्या है?", options: ["ठंडक", "गर्मी", "सूरज", "हवा"], answer: "ठंडक" },
    { question: "‘छोटा’ का विशेषण क्या है?", options: ["बड़ा", "मोटा", "लंबा", "ऊँचा"], answer: "बड़ा" },
    { question: "‘सफल’ का विपरीत क्या है?", options: ["असफल", "सफल", "साधारण", "अधूरा"], answer: "असफल" },
    { question: "‘सात’ का विपरीत क्या है?", options: ["तीन", "छह", "आठ", "पाँच"], answer: "पाँच" },
    { question: "‘काले’ का विपरीत क्या है?", options: ["सफेद", "नीला", "हरा", "लाल"], answer: "सफेद" },
    { question: "‘सुनहरा’ का विपरीत क्या है?", options: ["चांदी", "सुनहरा", "काले", "भूरा"], answer: "चांदी" },
    { question: "‘मिठा’ का विपरीत क्या है?", options: ["खट्टा", "मिठा", "तीखा", "अम्ल"], answer: "खट्टा" },
    { question: "‘माँ’ का बहुवचन क्या है?", options: ["माँ", "माएँ", "माँ", "माय"], answer: "माएँ" },
    { question: "‘दूध’ का विशेषण क्या है?", options: ["सादा", "गर्म", "ठंडा", "नया"], answer: "गर्म" },
    { question: "‘डाकघर’ का बहुवचन क्या है?", options: ["डाकघर", "डाकघरों", "डाकघर", "डाकघर"], answer: "डाकघरों" },
    { question: "‘अध्यक्ष’ का विपरीत क्या है?", options: ["सदस्य", "अध्यक्ष", "सेक्रेटरी", "पार्टी"], answer: "सदस्य" },
    { question: "‘बड़ा’ का विशेषण क्या है?", options: ["छोटा", "मोटा", "पतला", "लंबा"], answer: "छोटा" },
    { question: "‘छोटा’ का विपरीत क्या है?", options: ["बड़ा", "मोटा", "लंबा", "मध्यम"], answer: "बड़ा" },
    { question: "‘गाय’ का बहुवचन क्या है?", options: ["गाय", "गायें", "गायों", "गाय"], answer: "गायें" },
    { question: "‘सच्चा’ का विपरीत क्या है?", options: ["झूठा", "सच्चा", "असली", "सफेद"], answer: "झूठा" }
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
