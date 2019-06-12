// make each catgory into an object that holds values for the points, questions, and answers
console.log("Connected")
let htmlCategory = {
    pointOption100: { 
                    pointValue: 100,
                    question: "what does HTML stand for?",
                    answer: "hypertext markup language"
    }, 
    pointOption200: {
                    pointValue: 200,
                    question: "what is the element tag for heading 1?",
                    answer: "<h1>"
    }, 
    pointOption300: {
                    pointValue: 300,
                    question: "how would you make a div tag with the class 'trees'?",
                    answer: "<div class='trees'>"
    }, 
    pointOption400: {
                    pointValue: 400,
                    question: "what should every HTML document start with?",
                    answer: "<!DOCTYPE html>"
    }, 
    pointOption500: {
                    pointValue: 500,
                    question: "what is the child element tag of an unordered list?",
                    answer: "<li>"
    }

}

let cssCategory = {
    pointOption100: {
                    pointValue: 100 
                    question: "what does the 'C' in CSS stand for?",
                    answer: "cascading"
    }, 
    pointOption200: {
                    pointValue: 200 
                    question: "how would you make a font color 'pink' (as a string)?",
                    answer: "color: pink;"
    }, 
    pointOption300:
                    {
                    pointValue: 300
                    question: "how would you denote the css selector for the class 'movies'?",
                    answer: ".movies"
    }, 
    pointOption400:
                    {
                    pointValue: 400
                    question: "how would you denote the css selector for the id 'ferrari'?",
                    answer: "<#ferrari>"
    }, 
    pointOption500:
                    {
                    pointValue: 500
                    question: "tag would you write to link the css stylesheet styles.css to your HTML?",
                    answer: "<link rel="stylesheet" href="styles.css">"
    }

}

let javascriptCategory = {
    pointOption100:            
                    {
                    pointValue: 100 
                    question: "what is another term for 'plain' javascript?",
                    answer: "vanilla"
    }, 
    pointOption200:
                    {
                    pointValue: 200
                    question: "how would you write the code to link the javascript file called 'script.js' to your html file?",
                    answer: "<script src="script.js"></script>"
    }, 
    pointOption300:
                    {
                    pointValue: 300
                    question: "what is the first word you use to access an element in the DOM?",
                    answer: "document"
    }, 
    pointOption400:
                    {
                    pointValue: 400
                    question: "what does API stand for?",
                    answer: "application program interface"
    }, 
    pointOption500:
                    {
                    pointValue: 500
                    question: "what do you call a function inside of an object?",
                    answer: "method"
    }

}

let animalsCategory = {
    pointOption100: 
                    {
                    pointValue: 100
                    question: "what continent do kangaroos live on?",
                    answer: "australia"
    }, 
    pointOption200:
                    {
                    pointValue: 200
                    question: "how many legs does a crab have?",
                    answer: "10"
    }, 
    pointOption300:
                    {
                    pointValue: 300
                    question: "what do you call a large group of lions?",
                    answer: "pride"
    }, 
    pointOption400:
                    {
                    pointValue: 400
                    question: "what do you call sheep's hair?",
                    answer: "wool"
    }, 
    pointOption500:
                    {
                    pointValue: 500
                    question: "what is the only animal that can't jump?",
                    answer: "elephant"
    }

}
// // set variable for the 100 point
// let htmlFor100 = document.querySelector('#HTML100')
// htmlFor100.addEventListener('click', flipToQuestion)
// function flipToQuestion() {
//     htmlFor100.textContent = animalsCategory.pointValue[0][0];
//     console.log(htmlFor100.textContent);
// }