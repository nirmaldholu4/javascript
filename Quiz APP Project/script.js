let quizData = [
    {
        question: "What is JavaScript?",
        options: [
            "Programming Language",
            "Database",
            "Browser",
            "Operating System"
        ],
        answer: "Programming Language"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: [
            "let",
            "print",
            "define",
            "new"
        ],
        answer: "let"
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: [
            "/* */",
            "#",
            "//",
            "<!-- -->"
        ],
        answer: "//"
    },
    {
        question: "Which function is used to display a message in a popup box?",
        options: [
            "prompt()",
            "console.log()",
            "display()",
            "alert()"
        ],
        answer: "alert()"
    },
    {
        question: "Which method is used to print output in the browser console?",
        options: [
            "console.log()",
            "document.write()",
            "alert()",
            "print()"
        ],
        answer: "console.log()"
    },
    {
        question: "Which data type is used to store true or false values?",
        options: [
            "String",
            "Boolean",
            "Number",
            "Object"
        ],
        answer: "Boolean"
    },
    {
        question: "Which operator is used for strict equality comparison?",
        options: [
            "==",
            "=",
            "===",
            "!="
        ],
        answer: "==="
    },
    {
        question: "Which loop is guaranteed to execute at least once?",
        options: [
            "do...while",
            "while",
            "for",
            "forEach"
        ],
        answer: "do...while"
    },
    {
        question: "Which method converts a JSON string into a JavaScript object?",
        options: [
            "JSON.parse()",
            "JSON.stringify()",
            "parseJSON()",
            "toObject()"
        ],
        answer: "JSON.parse()"
    },
    {
        question: "Which method is used to add an element at the end of an array?",
        options: [
            "push()",
            "pop()",
            "shift()",
            "unshift()"
        ],
        answer: "push()"
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