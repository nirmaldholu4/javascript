let quizData = [
    {
        question: "Which of the following is correct about features of JavaScript?",
        options: [
            "It is a lightweight, interpreted programming language.",
            "It is designed for creating network-centric applications.",
            "It is complementary to and integrated with Java.",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "How can you get the type of arguments passed to a function?",
        options: [
            "using typeof operator",
            "using getType function",
            "using Both of the above",
            "None of the above"
        ],
        answer: "using typeof operator"
    },
    {
        question: "Which built-in method returns the character at a specified index?",
        options: [
            "characterAt()",
            "charAt()",
            "charCodeAt()",
            "None of the above"
        ],
        answer: "charAt()"
    },
    {
        question: "Which built-in method combines the text of two strings and returns a new string?",
        options: [
            "append()",
            "concat()",
            "attach()",
            "None of the above"
        ],
        answer: "concat()"
    },
    {
        question: "Which built-in method returns the calling string value converted to upper case?",
        options: [
            "toUpperCase()",
            "toUpper()",
            "changeCase(upper)",
            "None of the above"
        ],
        answer: "toUpperCase()"
    },
    {
        question: "Which of the following function of Array object adds elements to the front of an array?",
        options: [
            "unshift()",
            "shift()",
            "push()",
            "pop()"
        ],
        answer: "unshift()"
    },
    {
        question: "Which of the following function of Array object returns a string representing the array?",
        options: [
            "toString()",
            "toLocaleString()",
            "join()",
            "concat()"
        ],
        answer: "toString()"
    },
    {
        question: "How do you create a function in JavaScript?",
        options: [
            "function myFunction()",
            "function:myFunction()",
            "function = myFunction()",
            "None of the above"
        ],
        answer: "function myFunction()"
    },
    {
        question: "How do you write an IF statement in JavaScript?",
        options: [
            "if (i == 5)",
            "if i = 5 then",
            "if i == 5 then",
            "if i = 5"
        ],
        answer: "if (i == 5)"
    },
    {
        question: "How does a FOR loop start in JavaScript?",
        options: [
            "for (i = 0; i <= 5; i++)",
            "for (i <= 5; i++)",
            "for (i = 0; i <= 5)",
            "for i = 1 to 5"
        ],
        answer: "for (i = 0; i <= 5; i++)"
    }
];

let index = 0;
var id;
var timeupQuestion = [];
var nextQuestion = [];
var score = 0;
var flag = 0;
var userAnswers = new Array(quizData.length).fill(null); 

function getData(index) {
    clearInterval(id);

    document.querySelectorAll('.timer span')[0].innerText = "01";
    document.querySelectorAll('.timer span')[1].innerText = "00";
    
    if (index === quizData.length - 1) {
        document.querySelector('.next').disabled = true;
        document.querySelector('.next').classList.add('no-cursor');
    } else {
        document.querySelector('.next').disabled = false;
        document.querySelector('.next').classList.remove('no-cursor');
    }

    if (index === 0) {
        document.querySelector('.pre').disabled = true;
        document.querySelector('.pre').classList.add('no-cursor');
    } else {
        document.querySelector('.pre').disabled = false;
        document.querySelector('.pre').classList.remove('no-cursor');
    }

    document.querySelector('.questionList').innerHTML = `
    <article>
            <h2>${index + 1}. ${quizData[index].question}</h2>
            <main>
                <aside><input type="radio" name="qa" value="${quizData[index].options[0]}" id="id1" ${userAnswers[index] === quizData[index].options[0] ? 'checked' : ''}><label for="id1">${quizData[index].options[0]}</label></aside>
                <aside><input type="radio" name="qa" value="${quizData[index].options[1]}" id="id2" ${userAnswers[index] === quizData[index].options[1] ? 'checked' : ''}><label for="id2">${quizData[index].options[1]}</label></aside>
                <aside><input type="radio" name="qa" value="${quizData[index].options[2]}" id="id3" ${userAnswers[index] === quizData[index].options[2] ? 'checked' : ''}><label for="id3">${quizData[index].options[2]}</label></aside>
                <aside><input type="radio" name="qa" value="${quizData[index].options[3]}" id="id4" ${userAnswers[index] === quizData[index].options[3] ? 'checked' : ''}><label for="id4">${quizData[index].options[3]}</label></aside>
            </main>
    </article>
    `;

    setTimeout(() => {
        document.querySelectorAll('.timer span')[0].innerText = "00";
        document.querySelectorAll('.timer span')[1].innerText = "59";
    }, 1000);

    setTimeout(() => {
        id = setInterval(() => {
            if (document.querySelectorAll('.timer span')[1].innerText == "0") {
                clearInterval(id);
                timeupQuestion.push(index);
                
                if (index == quizData.length - 1) {
                    calculateAndShowResult();
                } else {
                    index++;
                    getData(index);
                }
                return;
            }
            document.querySelectorAll('.timer span')[1].innerText--;
        }, 1000);
    }, 1000);
}

getData(index);

document.querySelector('.next').onclick = function (e) {
    e.preventDefault();
    saveAnswer(); 
    nextQuestion.push(index);
    index++;
    getData(index);
}

document.querySelector('.pre').onclick = function (e) {
    e.preventDefault();
    saveAnswer(); 
    index--;
    getData(index);
}

function saveAnswer() {
    let optionsElements = document.getElementsByName('qa');
    for (let i = 0; i < optionsElements.length; i++) {
        if (optionsElements[i].checked) {
            userAnswers[index] = optionsElements[i].value;
            break;
        }
    }
}

function calculateAndShowResult() {
    clearInterval(id);
    
    score = 0;
    let attempted = 0;
    let totalQuestions = quizData.length;

    for (let i = 0; i < totalQuestions; i++) {
        if (userAnswers[i] !== null) {
            attempted++;
            if (userAnswers[i] === quizData[i].answer) {
                score++;
            }
        }
    }

    let wrongAnswers = attempted - score; 

    let resultStatus = score >= 4 ? "PASS" : "FAIL";

    let statusStyle = resultStatus === "PASS" ? "color: #2ecc71; font-weight: bold;" : "color: #ff5e5f; font-weight: bold;";

    document.querySelector('.wrapper').style.display = "none";
    document.body.classList.add('final');
    
    document.querySelector('.result').innerHTML = `
        <h2 style="margin-bottom: 30px; font-size: 36px;">Result</h2>
        <div style="text-align: left; font-family: Calibri; font-size: 24px; line-height: 2.2;">
            <p>Total Questions : <b>${totalQuestions}</b></p>
            <p>Attempted : <b>${attempted}</b></p>
            <p>Correct : <b>${score}</b></p>
            <p>Wrong : <b>${wrongAnswers}</b></p>
            <p style="margin-top: 25px;">Score : <b>${score}/${totalQuestions}</b></p>
            <p style="margin-top: 25px;">Result : <span style="${statusStyle}">${resultStatus}</span></p>
        </div>
    `;
}

document.querySelector('.submit').onclick = function (e) {
    e.preventDefault();
    saveAnswer();

    if (userAnswers[index] === null) {
        alert("Please select an option for this question!");
        return;
    }

    if (index == quizData.length - 1) {
        calculateAndShowResult();
    } else {
        index++;
        getData(index);
    }
}