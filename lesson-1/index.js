// // Declaring
// let message;
// const message1 = 'test';

// console.log(message)
// console.log(message1)

// // Delayed declaring;
// let message2;
// message2 = 'Hi'; //store the string

// console.log(message2)

// let a = 'Volvo';
// a = 'ВАЗ';
// console.log(a);

// // let - link to memory
// let message;
// message = "Hi";

// let message2 = message; // let message2 = 'Hi'
// console.log(message2);

// message = 'new value';
// console.log(message)
// console.log(message2);

// const - once declared and can't be changed
// const country = 'UA';
// country = 'USA'; // TypeError: Assignment to constant variable.
// console.log(country);

// When you have high level const you should declare const with uppercase
// const DEFAULT_SITE = 'google.com';

// const testOne = 'test';

// let test = 1;
// var test = 1;
// var test = 2;

// console.log(test);

// let numb = 123 // int
// numb = 12.34 // float

// console.log(numb)

// numb = 'Str'
// console.log(numb)

// // Infinity
// console.log(1 / 0);

// // NaN - calculation error
// console.log('not a number' + 2 + 2);
// console.log(2 + 2 + 'not a number');
// console.log(2 + 2 - 'not a number');
// console.log((2 + 2) / '10');
// console.log((2 + 2) - '10');
// console.log('10' + 2 - 2);
// console.log(2 + 2 + '10');
// console.log(true || false);

// // Strings
// let oneQuoteStr = 'One quote S';
// let doubleQuotesStr = "Double quote's String";

// // Allows include some statement inside your string call like a tamplate string
// let qa = "QA";
// let name = 'Karl';
// let phrase = `can add ${name} with profession ${qa}`;
// let oldPhrase = 'Hello, '+ name +' nice to meet you';
// let phraseParagraph = `can add ${name + qa}, 
// test
// test
// and add Paragraph`;

// console.log(phrase);
// console.log(oldPhrase);
// console.log(phraseParagraph);

// Bolleans
// let truth = true;
// let lie = false;

// // Null (empty box)
// let nothing = null;
// console.log(nothing)

// console.log(undefined)

// // Undefined means the variable has been declared, but it has not yet been assigned a value
// let emptiness;
// console.log(emptiness) // Undifined

// // typeof 
// console.log(typeof undefined); // undefined

// console.log(typeof 1); // number

// console.log(typeof true); // boolean

// console.log(typeof 'str'); // string

// console.log(typeof Math); // object

// console.log(Math.pow(3, 3))

// console.log('str'.concat('moreStr'))

// typeof []; // object

// console.log(typeof Array(3, 1,2))

// console.log(typeof null); // object

// console.log(typeof console.log); //function


function numberToString(num) {
    return String(num)
  }

