// make each catgory into an object that has key value pairs for the points, questions, and answers in each point option

let htmlCategory = {
    pointOption100: { 
                    pointValue: 100,
                    question: "What does HTML stand for?",
                    answer: "hypertext markup language"
    }, 
    pointOption200: {
                    pointValue: 200,
                    question: "What is the element tag for heading 1?",
                    answer: "<h1>"
    }, 
    pointOption300: {
                    pointValue: 300,
                    question: "How would you make a div tag with the class 'trees'?",
                    answer: "<div class='trees'>"
    }, 
    pointOption400: {
                    pointValue: 400,
                    question: "What should every HTML document start with?",
                    answer: "<!DOCTYPE html>"
    }, 
    pointOption500: {
                    pointValue: 500,
                    question: "What is the child element tag of an unordered list?",
                    answer: "<li>"
    }

}

let cssCategory = {
    pointOption100: {
                    pointValue: 100, 
                    question: "What does the 'C' in CSS stand for?",
                    answer: "cascading"
    }, 
    pointOption200: {
                    pointValue: 200, 
                    question: "How would you make a font color 'pink' (as a string)?",
                    answer: "color: pink;"
    }, 
    pointOption300:
                    {
                    pointValue: 300,
                    question: "How would you denote the css selector for the class 'movies'?",
                    answer: ".movies"
    }, 
    pointOption400:
                    {
                    pointValue: 400,
                    question: "How would you denote the css selector for the id 'ferrari'?",
                    answer: "#ferrari"
    }, 
    pointOption500:
                    {
                    pointValue: 500,
                    question: "What tag would you write to link the css stylesheet styles.css to your HTML?",
                    answer: "<link rel='stylesheet' href='styles.css'>"
    }

}

let javascriptCategory = {
    pointOption100:            
                    {
                    pointValue: 100, 
                    question: "What is another term for 'plain' javascript?",
                    answer: "vanilla"
    }, 
    pointOption200:
                    {
                    pointValue: 200,
                    question: "How would you write the code to link the javascript file called 'script.js' to your html file?",
                    answer: "<script src='script.js'></script>"
    }, 
    pointOption300:
                    {
                    pointValue: 300,
                    question: "What is the first word you use to access an element in the DOM?",
                    answer: "document"
    }, 
    pointOption400:
                    {
                    pointValue: 400,
                    question: "What does API stand for?",
                    answer: "application program interface"
    }, 
    pointOption500:
                    {
                    pointValue: 500,
                    question: "What do you call a function inside of an object?",
                    answer: "method"
    }

}

let animalsCategory = {
    pointOption100: 
                    {
                    pointValue: 100,
                    question: "What continent do kangaroos live on?",
                    answer: "australia"
    }, 
    pointOption200:
                    {
                    pointValue: 200,
                    question: "How many legs does a crab have?",
                    answer: "10"
    }, 
    pointOption300:
                    {
                    pointValue: 300,
                    question: "What do you call a large group of lions?",
                    answer: "pride"
    }, 
    pointOption400:
                    {
                    pointValue: 400,
                    question: "What do you call sheep's hair?",
                    answer: "wool"
    }, 
    pointOption500:
                    {
                    pointValue: 500,
                    question: "What do you call a female dolphin?",
                    answer: "cow"
    }

}




// set variable for the 100 point square in the html category
let htmlFor100 = document.querySelector('#HTML100')
// create event that changes the text content from points to the question when clicked
htmlFor100.addEventListener('click', flipToQuestion1)
function flipToQuestion1() {
    htmlFor100.textContent = htmlCategory.pointOption100.question;
    console.log(htmlFor100.textContent);
};
// set variable for the 200 point square in the html category
let htmlFor200 = document.querySelector('#HTML200')
// create event that changes the text content from points to the question when clicked
htmlFor200.addEventListener('click', flipToQuestion2)
function flipToQuestion2() {
    htmlFor200.textContent = htmlCategory.pointOption200.question;
    console.log(htmlFor200.textContent);
};
// set variable for the 300 point square in the html category
let htmlFor300 = document.querySelector('#HTML300')
// create event that changes the text content from points to the question when clicked
htmlFor300.addEventListener('click', flipToQuestion3)
function flipToQuestion3() {
    htmlFor300.textContent = htmlCategory.pointOption300.question;
    console.log(htmlFor300.textContent);
};
// set variable for the 400 point square in the html category
let htmlFor400 = document.querySelector('#HTML400')
// create event that changes the text content from points to the question when clicked
htmlFor400.addEventListener('click', flipToQuestion4)
function flipToQuestion4() {
    htmlFor400.textContent = htmlCategory.pointOption400.question;
    console.log(htmlFor400.textContent);
};
// set variable for the 500 point square in the html category
let htmlFor500 = document.querySelector('#HTML500')
// create event that changes the text content from points to the question when clicked
htmlFor500.addEventListener('click', flipToQuestion5)
function flipToQuestion5() {
    htmlFor500.textContent = htmlCategory.pointOption500.question;
    console.log(htmlFor500.textContent);
};


// set variable for the 100 point square in the css category
let cssFor100 = document.querySelector('#CSS100')
// create event that changes the text content from points to the question when clicked
cssFor100.addEventListener('click', flipToQuestion6)
function flipToQuestion6() {
    cssFor100.textContent = cssCategory.pointOption100.question;
    console.log(cssFor100.textContent);
};
// set variable for the 200 point square in the css category
let cssFor200 = document.querySelector('#CSS200')
// create event that changes the text content from points to the question when clicked
cssFor200.addEventListener('click', flipToQuestion7)
function flipToQuestion7() {
    cssFor200.textContent = cssCategory.pointOption200.question;
    console.log(cssFor200.textContent);
};
// set variable for the 300 point square in the css category
let cssFor300 = document.querySelector('#CSS300')
// create event that changes the text content from points to the question when clicked
cssFor300.addEventListener('click', flipToQuestion8)
function flipToQuestion8() {
    cssFor300.textContent = cssCategory.pointOption300.question;
    console.log(cssFor300.textContent);
};
// set variable for the 400 point square in the css category
let cssFor400 = document.querySelector('#CSS400')
// create event that changes the text content from points to the question when clicked
cssFor400.addEventListener('click', flipToQuestion9)
function flipToQuestion9() {
    cssFor400.textContent = cssCategory.pointOption400.question;
    console.log(cssFor400.textContent);
};
// set variable for the 500 point square in the css category
let cssFor500 = document.querySelector('#CSS500')
// create event that changes the text content from points to the question when clicked
cssFor500.addEventListener('click', flipToQuestion10)
function flipToQuestion10() {
    cssFor500.textContent = cssCategory.pointOption500.question;
    console.log(cssFor500.textContent);
};

// set variable for the 100 point square in the javascript category
let javascriptFor100 = document.querySelector('#JavaScript100')
// create event that changes the text content from points to the question when clicked
javascriptFor100.addEventListener('click', flipToQuestion11)
function flipToQuestion11() {
    javascriptFor100.textContent = javascriptCategory.pointOption100.question;
    console.log(javascriptFor100.textContent);
};
// set variable for the 200 point square in the javascript category
let javascriptFor200 = document.querySelector('#JavaScript200')
// create event that changes the text content from points to the question when clicked
javascriptFor200.addEventListener('click', flipToQuestion12)
function flipToQuestion12() {
    javascriptFor200.textContent = javascriptCategory.pointOption200.question;
    console.log(javascriptFor200.textContent);
};
// set variable for the 300 point square in the javascript category
let javascriptFor300 = document.querySelector('#JavaScript300')
// create event that changes the text content from points to the question when clicked
javascriptFor300.addEventListener('click', flipToQuestion13)
function flipToQuestion13() {
    javascriptFor300.textContent = javascriptCategory.pointOption300.question;
    console.log(javascriptFor300.textContent);
};
// set variable for the 400 point square in the javascript category
let javascriptFor400 = document.querySelector('#JavaScript400')
// create event that changes the text content from points to the question when clicked
javascriptFor400.addEventListener('click', flipToQuestion14)
function flipToQuestion14() {
    javascriptFor400.textContent = javascriptCategory.pointOption400.question;
    console.log(javascriptFor400.textContent);
};
// set variable for the 500 point square in the javascript category
let javascriptFor500 = document.querySelector('#JavaScript500')
// create event that changes the text content from points to the question when clicked
javascriptFor500.addEventListener('click', flipToQuestion15)
function flipToQuestion15() {
    javascriptFor500.textContent = javascriptCategory.pointOption500.question;
    console.log(javascriptFor500.textContent);
};


// set variable for the 100 point square in the animals category
let animalsFor100 = document.querySelector('#Animals100')
// create event that changes the text content from points to the question when clicked
animalsFor100.addEventListener('click', flipToQuestion16)
function flipToQuestion16() {
    animalsFor100.textContent = animalsCategory.pointOption100.question;
    console.log(animalsFor100.textContent);
};
// set variable for the 200 point square in the animals category
let animalsFor200 = document.querySelector('#Animals200')
// create event that changes the text content from points to the question when clicked
animalsFor200.addEventListener('click', flipToQuestion17)
function flipToQuestion17() {
    animalsFor200.textContent = animalsCategory.pointOption200.question;
    console.log(animalsFor200.textContent);
};
// set variable for the 300 point square in the animals category
let animalsFor300 = document.querySelector('#Animals300')
// create event that changes the text content from points to the question when clicked
animalsFor300.addEventListener('click', flipToQuestion18)
function flipToQuestion18() {
    animalsFor300.textContent = animalsCategory.pointOption300.question;
    console.log(animalsFor300.textContent);
};
// set variable for the 400 point square in the animals category
let animalsFor400 = document.querySelector('#Animals400')
// create event that changes the text content from points to the question when clicked
animalsFor400.addEventListener('click', flipToQuestion19)
function flipToQuestion19() {
    animalsFor400.textContent = animalsCategory.pointOption400.question;
    console.log(animalsFor400.textContent);
};
// set variable for the 500 point square in the animals category
let animalsFor500 = document.querySelector('#Animals500')
// create event that changes the text content from points to the question when clicked
animalsFor500.addEventListener('click', flipToQuestion20)
function flipToQuestion20() {
    animalsFor500.textContent = animalsCategory.pointOption500.question;
    console.log(animalsFor500.textContent);
};

let pointSquaresArray = [htmlFor100, htmlFor200, htmlFor300, htmlFor400, htmlFor500, cssFor100, cssFor200, cssFor300, cssFor400, cssFor500, javascriptFor100, javascriptFor200, javascriptFor300, javascriptFor400, javascriptFor500, animalsFor100, animalsFor200, animalsFor300, animalsFor400, animalsFor500];
// pointSquaresArray.forEach(element => {
//     pointSquaresArray[i].addEventListener('click', flipToQuestion)
//     function flipToQuestion() {
//         pointSquaresArray[i].textContent = catergoryArray[i++].
//     }
// });
// let pointSquares = document.querySelectorAll('.pointSquares');
// for (let i = 0; i < pointSquares.length; i++) {
//     pointSquares[i].addEventListener('click', flipToQuestion)
//     function flipToQuestion() {
//         pointSquares[i].textContent = htmlCategory.pointOption100.question;
//         console.log(pointSquares[i].textContent);
// }
// }


// set variable for answer submit button to we can add event listener to it.
let submitAnswerButton = document.querySelector('.submitButton');
let answerToQuestion = document.querySelector('.answerToQuestion');
// set variable for the visible scoreboard
let scoreBoard = document.querySelector('.score');
// set varible for user's score
let score = 0
let pointSquares = document.querySelectorAll('.pointSquares');
let catergoryArray= [htmlCategory, cssCategory, javascriptCategory, animalsCategory];
// make click event for submit button to check for right answer-
// if answer is correct, alert them and add points to the user's score and scoreboard
// after question is answered, make the input value blank by changing the value to empty string
// after question is answered, make the square blank by changing textContent to empty string
submitAnswerButton.addEventListener('click', submitAnswer)
function submitAnswer (event) {
    event.preventDefault();
    if (answerToQuestion.value.toLowerCase() === htmlCategory.pointOption100.answer) {
        alert('Congrats, you got it right!')
        score = score + htmlCategory.pointOption100.pointValue;
        scoreBoard.innerText = "$" + score;
        answerToQuestion.value = ""
        htmlFor100.textContent = ""
        if (score >= 2000 ) {
            alert ('You won jeopardy!');
        };
        return(score)
    };
    if (answerToQuestion.value.toLowerCase() === htmlCategory.pointOption200.answer) {
        alert('Congrats, you got it right!')
        score = score + htmlCategory.pointOption200.pointValue;
        scoreBoard.innerText = "$" + score;
        answerToQuestion.value = ""
        htmlFor200.textContent = ""
        if (score >= 2000 ) {
            alert ('You won jeopardy!');
        };
        return(score)
    };
    if (answerToQuestion.value.toLowerCase() === htmlCategory.pointOption300.answer) {
        alert('Congrats, you got it right!')
        score = score + htmlCategory.pointOption300.pointValue;
        scoreBoard.innerText = "$" + score;
        answerToQuestion.value = ""
        htmlFor300.textContent = ""
        if (score >= 2000 ) {
            alert ('You won jeopardy!');
        };
        return(score)
    };
    if (answerToQuestion.value === htmlCategory.pointOption400.answer) {
        alert('Congrats, you got it right!')
        score = score + htmlCategory.pointOption400.pointValue;
        scoreBoard.innerText = "$" + score;
        answerToQuestion.value = ""
        htmlFor400.textContent = ""
        if (score >= 2000 ) {
            alert ('You won jeopardy!');
        };
        return(score)
    };
    if (answerToQuestion.value.toLowerCase() === htmlCategory.pointOption500.answer) {
        alert('Congrats, you got it right!')
        score = score + htmlCategory.pointOption500.pointValue;
        scoreBoard.innerText = "$" + score;
        answerToQuestion.value = ""
        htmlFor500.textContent = ""
        if (score >= 2000 ) {
            alert ('You won jeopardy!');
        };
        return(score)
    };
    if (answerToQuestion.value.toLowerCase() === cssCategory.pointOption100.answer) {
        alert('Congrats, you got it right!')
        score = score + cssCategory.pointOption100.pointValue;
        scoreBoard.innerText = "$" + score;
        answerToQuestion.value = ""
        cssFor100.textContent = ""
        if (score >= 2000 ) {
            alert ('You won jeopardy!');
        };
        return(score)
    };
    if (answerToQuestion.value.toLowerCase() === cssCategory.pointOption200.answer) {
        alert('Congrats, you got it right!')
        score = score + cssCategory.pointOption200.pointValue;
        scoreBoard.innerText = "$" + score;
        answerToQuestion.value = ""
        cssFor200.textContent = ""
        if (score >= 2000 ) {
            alert ('You won jeopardy!');
        };
        return(score)
    };
    if (answerToQuestion.value.toLowerCase() === cssCategory.pointOption300.answer) {
        alert('Congrats, you got it right!')
        score = score + cssCategory.pointOption300.pointValue;
        scoreBoard.innerText = "$" + score;
        answerToQuestion.value = ""
        cssFor300.textContent = ""
        if (score >= 2000 ) {
            alert ('You won jeopardy!');
        };
        return(score)
    };
    if (answerToQuestion.value.toLowerCase() === cssCategory.pointOption400.answer) {
        alert('Congrats, you got it right!')
        score = score + cssCategory.pointOption400.pointValue;
        scoreBoard.innerText = "$" + score;
        answerToQuestion.value = ""
        cssFor400.textContent = ""
        if (score >= 2000 ) {
            alert ('You won jeopardy!');
        };
        return(score)
    };
    if (answerToQuestion.value.toLowerCase() === cssCategory.pointOption500.answer) {
        alert('Congrats, you got it right!')
        score = score + cssCategory.pointOption500.pointValue;
        scoreBoard.innerText = "$" + score;
        answerToQuestion.value = ""
        cssFor500.textContent = ""
        if (score >= 2000 ) {
            alert ('You won jeopardy!');
        };
        return(score)
    };
    if (answerToQuestion.value.toLowerCase() === javascriptCategory.pointOption100.answer) {
        alert('Congrats, you got it right!')
        score = score + javascriptCategory.pointOption100.pointValue;
        scoreBoard.innerText = "$" + score;
        answerToQuestion.value = ""
        javascriptFor100.textContent = ""
        if (score >= 2000 ) {
            alert ('You won jeopardy!');
        };
        return(score)
    };
    if (answerToQuestion.value.toLowerCase() === javascriptCategory.pointOption200.answer) {
        alert('Congrats, you got it right!')
        score = score + javascriptCategory.pointOption200.pointValue;
        scoreBoard.innerText = "$" + score;
        answerToQuestion.value = ""
        javascriptFor200.textContent = ""
        if (score >= 2000 ) {
            alert ('You won jeopardy!');
        };
        return(score)
    };
    if (answerToQuestion.value.toLowerCase() === javascriptCategory.pointOption300.answer) {
        alert('Congrats, you got it right!')
        score = score + javascriptCategory.pointOption300.pointValue;
        scoreBoard.innerText = "$" + score;
        answerToQuestion.value = ""
        javascriptFor300.textContent = ""
        if (score >= 2000 ) {
            alert ('You won jeopardy!');
        };
        return(score)
    };
    if (answerToQuestion.value.toLowerCase() === javascriptCategory.pointOption400.answer) {
        alert('Congrats, you got it right!')
        score = score + javascriptCategory.pointOption400.pointValue;
        scoreBoard.innerText = "$" + score;
        answerToQuestion.value = ""
        javascriptFor400.textContent = ""
        if (score >= 2000 ) {
            alert ('You won jeopardy!');
        };
        return(score)
    };
    if (answerToQuestion.value.toLowerCase() === javascriptCategory.pointOption500.answer) {
        alert('Congrats, you got it right!')
        score = score + javascriptCategory.pointOption500.pointValue;
        scoreBoard.innerText = "$" + score;
        answerToQuestion.value = ""
        javascriptFor500.textContent = ""
        if (score >= 2000 ) {
            alert ('You won jeopardy!');
        };
        return(score)
    };
    if (answerToQuestion.value.toLowerCase() === animalsCategory.pointOption100.answer) {
        alert('Congrats, you got it right!')
        score = score + animalsCategory.pointOption100.pointValue;
        scoreBoard.innerText = "$" + score;
        answerToQuestion.value = ""
        animalsFor100.textContent = ""
        if (score >= 2000 ) {
            alert ('You won jeopardy!');
        };
        return(score)
    };
    if (answerToQuestion.value.toLowerCase() === animalsCategory.pointOption200.answer) {
        alert('Congrats, you got it right!')
        score = score + animalsCategory.pointOption200.pointValue;
        scoreBoard.innerText = "$" + score;
        answerToQuestion.value = ""
        animalsFor200.textContent = ""
        if (score >= 2000 ) {
            alert ('You won jeopardy!');
        };
        return(score)
    };
    if (answerToQuestion.value.toLowerCase() === animalsCategory.pointOption300.answer) {
        alert('Congrats, you got it right!')
        score = score + animalsCategory.pointOption300.pointValue;
        scoreBoard.innerText = "$" + score;
        answerToQuestion.value = ""
        animalsFor300.textContent = ""
        if (score >= 2000 ) {
            alert ('You won jeopardy!');
        };
        return(score)
    };
    if (answerToQuestion.value.toLowerCase() === animalsCategory.pointOption400.answer) {
        alert('Congrats, you got it right!')
        score = score + animalsCategory.pointOption400.pointValue;
        scoreBoard.innerText = "$" + score;
        answerToQuestion.value = ""
        animalsFor400.textContent = ""
        if (score >= 2000 ) {
            alert ('You won jeopardy!');
        };
        return(score)
    };
    if (answerToQuestion.value.toLowerCase() === animalsCategory.pointOption500.answer) {
        alert('Congrats, you got it right!')
        score = score + animalsCategory.pointOption500.pointValue;
        scoreBoard.innerText = "$" + score;
        answerToQuestion.value = ""
        animalsFor500.textContent = ""
        if (score >= 2000 ) {
            alert ('You won jeopardy!');
        };
        return(score)
    };
    // if conditions are not met, alert that the answer is incorrect
    {
        alert ('Sorry, that is incorrect!');
        answerToQuestion.value = "";
        score = score - 100;
        scoreBoard.innerText = "$" + score;
        if (score <= -400) {
            alert ('Sorry, you lose jeopardy')
        }
    
    }
}


// for (let i=0; i < categoryArray.length; i++) {
//     if (answerToQuestion.value.toLowerCase() === categoryArray[i].pointOption100.answer) {
//         alert('Congrats, you got it right!')
//         score = score + categoryArray[i].pointOption100.pointValue;
//         scoreBoard.innerText = "$" + score;
//         answerToQuestion.value = ""
//         this.textContent = ""
//         if (score >= 200 ) {
//             alert ('You won jeopardy!');
//         };
//         return(score)
//     };
//     }
// }

let resetButton = document.querySelector('.resetButton');
resetButton.addEventListener('click', resetGame) 
function resetGame() {
    document.location.reload(true);
}