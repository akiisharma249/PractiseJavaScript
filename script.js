// let link = document.querySelector("a");
// console.log(link.getAttribute("src"));

// link.href="https://sabe.io/";
// link.src = "Internet";

// // add EventListener
// var btn = document.querySelector("#button");

// btn.addEventListener("mouseover", function(event){
//     alert("Button is Clicked!");
//     console.log(event);
// });

// // Custom eventListener
// let submit = document.querySelector("#submit");
// let event = new Event("hit");

// submit.addEventListener("hit", function(){
//     console.log("Button hit!");
// });

// submit.dispatchEvent(event);

// // JSON Commands
// let company = function(name, age, id, position){

//     this.name = name;
//     this.age = age;
//     this.id = id;
//     this.position = position;
// }

// let employee1 = new company("Alia Maroon", 23, `#${249}`, "Debugger");
// let employee2 = new company("Tom Silva", 56, `#${456}`, "Analyst");

//     // JSON Stringify converst to string data format
// let employee1JSON = JSON.stringify(employee1);        

// console.log("Using JSON Stringify:  " + employee1JSON);
// console.log("Without JSON: ");
// console.log(employee1);

//     // JSON Parse converts strign data format back to object
// let json = '{"name":"Alia Maroon","age":23,"id":"#249","position":"Debugger"}';
// let employee1Parse = JSON.parse(json);

// console.log("Using JSON Parse, string data format can be coverted back to JavaScript Object: ")
// console.log(employee1Parse);


// Function to change body background to random color from specified array 

let colorBtn = document.getElementById("color-change");
let bodyColor = document.querySelector("body");
let paraElement = document.getElementById('para');

let colors = ['red', 'yellow', 'cyan', 'green', 'pink', 'crimson'];

colorBtn.addEventListener('click',() => {
    let rand = Math.floor(Math.random() * colors.length);
    bodyColor.style.backgroundColor = colors[rand];
    paraElement.innerHTML = 'The background color has been changed to ' + colors[rand];
})


// function to change body background color to random hex code 

let color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let random;
let hex = "";

let buttonColorClick = document.getElementById('butnClick');
let buttonColorAuto = document.getElementById('butnAuto');

buttonColorClick.addEventListener('click', hexGenerator);
buttonColorAuto.addEventListener('click', () => {
    setInterval(() => {
        hexGenerator();
    }, 1000);
});

function hexGenerator() {
    for (i=0; i<6; i++) {
        random = Math.floor(Math.random() * color.length);
        hex += color[random];
    }
    bodyColor.style.backgroundColor = hex;
    paraElement.innerHTML = 'The Hex code for background color is <h2><em> #' + hex + '</em></h2>';
    hex = "";
}


//  Generating random quotes and their authors

let qbtn = document.getElementById("quotes-btn");
let author_name = document.getElementById("ulAuthor");
let q1 = document.getElementById("quote1");
let q2 = document.getElementById("quote2");

qbtn.addEventListener('click', () => {
    callQuote();
})
function Author(author, quote11, quote22) {
    this.authorName = author;
    this.firstQuote = quote11;
    this.secondQuote = quote22;
}

let author1 = new Author(
    'Benjamin Franklin',
    'Either write something worth reading or do something worth writing.',
    'Well done is better than well said.'
    );

let author2 = new Author (
    'Nelson Mandela',
    'Real leaders must be ready to sacrifice all for the freedom of their people.',
    'The greatest glory in living lies not in never falling, but in rising every time we fall.')

let author3 = new Author(
    'Walt Disney',
    'The way to get started is to quit talking and begin doing.',
    'Dream, Believe, Dare, Do'
    );

let author4 = new Author(
    'John Lennon',
    'Life is what happens when you\'re busy making other plans.',
    'A dream you dream alone is only a dream. But, A dream you dream together is reality.'
    );

let author5 = new Author(
    'Mahatma Gandhi',
    'Live as if you were to die tomorrow.',
    'Love is the strongest force the world possesses and yet it is the humblest imaginable.'
    );

function callQuote() {
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    let string = eval('author' + randomNumber);
    author_name.innerHTML = string.authorName;
    q1.innerHTML = string.firstQuote;
    q2.innerHTML = string.secondQuote;
}

// Delivering Message

let text = document.getElementById("messageIn");
let sendButton = document.getElementById("send");
let delivered_f = document.getElementById("delivered");
let messageOut_f =  document.getElementById("messageOut");

sendButton.addEventListener('click', deliverMessage)

function deliverMessage() {
    if (text.value == "") {
        alert("Can't deliver empty string. Please type your message");
    } else {
        delivered_f.innerHTML = "Last message delivered";
        messageOut_f.innerHTML = text.value;
        text.value = "";
    }
}

// Counter program

let counterText = document.getElementById("counter_text")
let lowerCount = document.getElementById("lower")
let addCount = document.getElementById("add")
let counter  = 0;


addCount.addEventListener('click', () => {
    counter++;
    counterText.innerHTML = counter;

    if (counter > 0 ) {
        counterText.style.color = "green"
    } else if (counter == 0) {
        counterText.style.color = "inherit";
    }
    counterText.animate([{opacity: '0.2'}, {opacity: '1.0'}], {duration: 500, fill: "forwards"})
})

lowerCount.addEventListener('click', () => {
    counter--;
    counterText.innerHTML = counter;

    if (counter < 0 ) {
        counterText.style.color = "red";
    } else if (counter == 0) {
        counterText.style.color = "inherit";
    }
    counterText.animate([{opacity: '0.2'}, {opacity: '1.0'}], {duration: 500, fill: "forwards"})
})

// Generating Random Images

let outerBg = document.querySelector('.bg_section');
let innerBg = document.getElementById('backgroundImage');
let backward = document.getElementById('prev');
let forward = document.getElementById('next');

let imageArray = ['url(\'images/img0.jpg\')', 'url(\'images/img1.jpg\')', 'url(\'images/img2.jpg\')', 'url(\'images/img3.jpg\')', 'url(\'images/img4.jpg\')', 'url(\'images/img5.jpg\')', 'url(\'images/img6.jpg\')', 'url(\'images/img7.jpg\')'];
let backgroundArray = ['url(\'images/background0.jpg\')', 'url(\'images/background1.jpg\')', 'url(\'images/background2.jpg\')', 'url(\'images/background3.jpg\')', 'url(\'images/background4.jpg\')', 'url(\'images/background5.jpg\')', 'url(\'images/background6.jpg\')', 'url(\'images/background7.jpg\')']

let count = 0;

backward.addEventListener('click', () => {
    count--;
    if(count < 0) {
        count = 7;
    }
        innerBg.style.backgroundImage = imageArray[count];
        outerBg.style.backgroundImage = backgroundArray[count];
        innerBg.animate([{opacity: 0.5}, {transform: 'rotate(180deg)'}, {opacity: '1.0'}], {duration: 500, fill: "forwards"})
})

forward.addEventListener('click', () => {
    count++;
    if(count > 7) {
        count = 0;
    } 
        innerBg.style.backgroundImage = imageArray[count];
        outerBg.style.backgroundImage = backgroundArray[count];
        innerBg.animate([{opacity: 0.5}, {transform: 'rotate(-180deg)'}, {opacity: '1.0'}], {duration: 500, fill: "forwards"})
})

//  Calculator Section

let resultDisplay = document.getElementById("result1");
let multiply = document.getElementById("multiplyOperator");
let divide = document.getElementById("divideOperator");
let subtract = document.getElementById("subtractOperator");
let addition = document.getElementById("addOperator");
let decimal = document.getElementById("decimalD");
let nine = document.getElementById("nine9");
let eight = document.getElementById("eight8");
let seven = document.getElementById("seven7");
let six = document.getElementById("six6");
let five = document.getElementById("five5");
let four = document.getElementById("four4");
let three = document.getElementById("three3");
let two = document.getElementById("two2");
let one = document.getElementById("one1");
let zero = document.getElementById("zero0");
let equals = document.getElementById("equalsTo");
let clear = document.getElementById("clearTo");

let op1 = "";
let op2 = "";
let operand = "";
let num1 = 0;
let num2 = 0;
let result = 0;

one.addEventListener('click', () => {
    if (op1.length <= 12 && operand == "") {
        op1 += "1";
        resultDisplay.innerHTML = op1;
    } else if (op2.length <= 12) {
        op2 += "1";
        resultDisplay.innerHTML = op2;
    }
})

two.addEventListener('click', () => {
    if (op1.length <= 12 && operand == "") {
        op1 += "2";
        resultDisplay.innerHTML = op1;
    } else if (op2.length <= 12) {
        op2 +="2";
        resultDisplay.innerHTML = op2;
    }
})

three.addEventListener('click', () => {
    if (op1.length <= 12 && operand == "") {
        op1 += "3";
        resultDisplay.innerHTML = op1;
    } else if (op2.length <= 12) {
        op2 +="3";
        resultDisplay.innerHTML = op2;
    }
})

four.addEventListener('click', () => {
    if (op1.length <= 12 && operand == "") {
        op1 += "4";
        resultDisplay.innerHTML = op1;
    } else if (op2.length <= 12) {
        op2 +="4";
        resultDisplay.innerHTML = op2;
    }
})

five.addEventListener('click', () => {
    if (op1.length <= 12 && operand == "") {
        op1 += "5";
        resultDisplay.innerHTML = op1;
    } else if (op2.length <= 12) {
        op2 +="5";
        resultDisplay.innerHTML = op2;
    }
})

six.addEventListener('click', () => {
    if (op1.length <= 12 && operand == "") {
        op1 += "6";
        resultDisplay.innerHTML = op1;
    } else if (op2.length <= 12) {
        op2 +="6";
        resultDisplay.innerHTML = op2;
    }
})

seven.addEventListener('click', () => {
    if (op1.length <= 12 && operand == "") {
        op1 += "7";
        resultDisplay.innerHTML = op1;
    } else if (op2.length <= 12) {
        op2 +="7";
        resultDisplay.innerHTML = op2;
    }
})

eight.addEventListener('click', () => {
    if (op1.length <= 12 && operand == "") {
        op1 += "8";
        resultDisplay.innerHTML = op1;
    } else if (op2.length <= 12) {
        op2 +="8";
        resultDisplay.innerHTML = op2;
    }
})

nine.addEventListener('click', () => {
    if (op1.length <= 12 && operand == "") {
        op1 += "9";
        resultDisplay.innerHTML = op1;
    } else if (op2.length <= 12) {
        op2 +="9";
        resultDisplay.innerHTML = op2;
    }
})

zero.addEventListener('click', () => {
    if (op1.length <= 12 && operand == "") {
        op1 += "0";
        resultDisplay.innerHTML = op1;
    } else if (op2.length <= 12) {
        op2 +="0";
        resultDisplay.innerHTML = op2;
    }
})

decimal.addEventListener('click', () => {
    if (op1.length <= 12 && operand == "") {
        op1 += ".";
        resultDisplay.innerHTML = op1;
    } else if (op2.length <= 12) {
        op2 +=".";
        resultDisplay.innerHTML = op2;
    }
})

multiply.addEventListener('click', () => {
    if (op1 !== "" && op2 == "") {
        operand = "*";
        multiply.style.backgroundColor = 'lightyellow'
    }
})

divide.addEventListener('click', () => {
    if (op1 !== "" && op2 == "") {
        operand = "/";
        divide.style.backgroundColor = 'lightyellow'
    }
})

subtract.addEventListener('click', () => {
    if (op1 !== "" && op2 == "") {
        operand = "-";
        subtract.style.backgroundColor = 'lightyellow'
    }
})

addition.addEventListener('click', () => {
    if (op1 !== "" && op2 == "") {
        operand = "+";
        addition.style.backgroundColor = 'lightyellow'
    }
})

equals.addEventListener('click', () => {
    num1 = parseFloat(op1);
    num2 = parseFloat(op2);
    
    if (op1 !== "" && op2 !== "" && operand == "*") {
        result = num1 * num2;
        resultDisplay.innerHTML = result;
    } else
    if (op1 !== "" && op2 !== "" && operand == "/") {
        result = num1 / num2;
        resultDisplay.innerHTML = result;
    } else
    if (op1 !== "" && op2 !== "" && operand == "-") {
        result = num1 - num2;
        resultDisplay.innerHTML = result;
    } else
    if (op1 !== "" && op2 !== "" && operand == "+") {
        result = num1 + num2;
        resultDisplay.innerHTML = result;
    }
    clearIt();
})

clear.addEventListener('click', () => {
        clearIt();
        resultDisplay.innerHTML = 0;
})

function clearIt() {
    op1 = ""
    op2 = ""
    operand = ""
    result = ""
    multiply.style.backgroundColor = '#ffc107'
    divide.style.backgroundColor = '#ffc107'
    subtract.style.backgroundColor = '#ffc107'
    addition.style.backgroundColor = '#ffc107'
}


// End of project

var endProject = document.getElementById("end");

endProject.addEventListener('load', () => {
    setInterval(() => {
        hexGeneratorEndPart();
    }, 100);
})

function hexGeneratorEndPart() {
    for (i=0; i<6; i++) {
        random = Math.floor(Math.random() * color.length);
        hex += color[random];
    }
    endProject.style.backgroundColor = hex;
    hex = "";
}

//  Calculator Solution #2

