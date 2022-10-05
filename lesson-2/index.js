// ------ DATA TYPES TRANSFORMATION

// console.log("10" + 80)


// // String
// const a = 3;
// console.log(typeof String(null));
// console.log(typeof String(undefined));
// console.log(String(3) + 3);
// const b = a.toString();
// console.log(typeof b)
// console.log(typeof a.toString());
// console.log(typeof a)
// const nUll = null;
// console.loog(nUll.toString());
// console.log(typeof (null == undefined));
// console.log(1 + '1');
// console.log(2 + 1 + '1');
// console.log('1' + 1 + 2);

// // Number
// let b = Number('12');
// console.log(typeof b)
// let a = +'1';
// let c = parseInt('12');
// console.log(typeof c)
// console.log(typeof a);
// console.log(a);
// a = a.toString() || String(a);
// console.log( typeof a);

// console.log(Number(undefined));
// console.log(Number(null));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(' \n  12 \r \n'));
// console.log(Number('a'));

// // Bolean
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean(''));
// console.log(Boolean('.'));
// console.log(Boolean('number'));

// if(!Number('a')){
//     console.log('This is wrong input')
// }

// console.log('1' == 1)
// console.log('1' === 1) // '1' == 1 && typeof '1' == typeof 1
// console.log(null >= '0');
// console.log(null == '0');
// console.log(null >= 0);
// console.log(Boolean(null) === 0);
// console.log(typeof Boolean(null));

// console.log(undefined >= 0);
// console.log(undefined > 0);
// console.log(undefined < 0);
// console.log(undefined == 0);

// ####################################################
// Strings are compared letter-by-letter
// console.log('Z' > 'A'); // 'Z'.charCodeAt(0) > 'A'.charCodeAt(0)
// console.log('Hey, Im mike'.charCodeAt(0))
// console.log('Hey, Im mike'.split(',').join())
// const strExample = 'E'
// console.log(strExample.length)
// console.log(strExample[0])
// console.log('A'.charCodeAt(1) > 97)
// console.log('Z'.charCodeAt(0) > 'A'.charCodeAt(0));
// console.log('YYY' > 'AAA');
// console.log('CCC' > 'ccc');

// console.log('ccb' > 'cca');

// console.log(true == 1);
// console.log(false == 0);

// Null and Undefined
// console.log(null === undefined); // false

// // But when using soft equal they convert to boolean 
// console.log(null == undefined); // true backward compatibility

// // != !==
// console.log(2 != '2');
// console.log(2 !== '2');
//  // false


// console.log(2 - '2');
// console.log(2 + +'2');
// console.log('6' / '2');
// console.log('8' * '2');
// console.log(2 - '2a'); 

// console.log(3 ** 3);

// let c = 1;
// console.log(+c);

// let d = -1;
// console.log(+d);
// // Unar + convert string to number
// let g = '1';
// console.log(+g);

// // But non-numbers are converted 
// console.log(+true);
// console.log(+null);
// console.log(1 + +"1");
// console.log(+"a");

// console.log(1 + +"-1");

// let incrementedValue = 3;
// // console.log(incrementedValue++)
// const assigned = incrementedValue++;
// console.log(assigned)
// console.log(incrementedValue)

// let incrementPrefix = 7;
// const assignedSuf = ++incrementPrefix;
// console.log(assignedSuf);
// console.log(incrementPrefix);

// let x = 1
// x = x + 9
// x *= 5 // x = x * 5

// console.log(x);

// console.log(true && false)  //console.log(1 * 0);
// // // Logical OR operator return true if one operator = true
// console.log(true || false); // console.log(1 + 0);
// // // ! oposit
// console.log(!true);


// console.log(Number('a') || Boolean(null));
// console.log(undefined || 'Default value')


// // Logical operators with non boolean
// console.log(!!(true || false));
// console.log(false && {a:'a'});
// console.log(false || 1);
// console.log(false || 1 || 2);

// const authentication = 'token'

// const isValid = authentication === 'session' || !!process.env.AUTH_TOKEN
// console.log('isValid', isValid)

// if(authentication === 'session' || process.env.AUTH_TOKEN){
//     console.log(true)
// } else {
//     console.log(false)
// }
// console.log(!!'b')
// console.log(process.env.AUTH_TOKEN)
// console.log(isValid)

// const value = '123' || 'defaultValue'
// console.log(value)

// console('Some conditional varable' || 'defaultValue')

//========= COMPARISON
// Relational
// const x1 = 1;
// console.log(x1 > 0);
// console.log(x1 >= 1);
// console.log(x1 < 1);
// console.log(x1 <= 1);

// let res = 1 < 2;
// console.log(res);


// If types are different, JS convert the value to number

// console.log('2' > 1);


// let x = 1
// // Strict Equaility (Type + Value)
// console.log(1 === 1);
// console.log('1' === 1);

// // Loose Equaility
// console.log(1 == 1);
// console.log('1' == 1);
// console.log(x != 1);
// console.log(true == 1);
// console.log(false == 0);

// // #####################################################
// // Null and Undefined
// console.log(null === undefined); // false

// // But when using soft equal they convert to boolean 
// console.log(null == undefined); // true backward compatibility

// // != !==
// console.log(2 != '2');
// console.log(2 !== '2');


/// ======= CONDITIONS
// if ( !(10>5) ){
//     console.log(true)
// } else {
//     console.log(false)
// }
// const isNan = Number('a');

// if ( isNan ){
//     console.log(true)
// } else {
//     console.log(false)
// }

// const number1 = prompt('num1')
// const number2 = prompt('num2')

// if(Number(number1) && Number(number2)){
//     alert (Number(number1) + Number(number2))
// } else {
//     alert('Wrong input')
// }
// let x = 15
// let y = 25;

// if(x - y > 0){
//     console.log('Im negative')
// } 

// console.log(Boolean(Number('a')))

// function test(num) {
//     if( !Number(num) ) {
//         return 'num a number'
//     }
//     return Number(num) ** 5;
// }

// console.log(test('a'))


// const typeOfNan = typeof NaN // 'number'
// console.log(typeof typeOfNan)


// let hour = 20;
// if (hour >= 6 && hour < 12) {
//     console.log('Good morning!');
// } else if (hour >= 12 && hour < 18) {
//     console.log('Good afternoon!');
// }else if (hour >= 12 && hour < 18) {
//     console.log('Good afternoon!');
// }else if (hour >= 12 && hour < 18) {
//     console.log('Good afternoon!');
// }else if (hour >= 12 && hour < 18) {
//     console.log('Good afternoon!');
// } else {
//     console.log('Good evening!');
// }

// const a = hour;

// console.log('Lol', a);

// let name = 'Suzi';
// let age = 18
// let matchName = name === 'Karl' ? 'Yes it is Karl' : 'No, it is wrong name';
// matchName = name ? 'Yes it is Karl' : 'No, it is wrong name';
// matchName = name === 'Karl' || age > 16 ? 'Yes it is Karl' : 'No, it is wrong name';

// if(name == 'Karl'){
//     matchName = 'Yes it is Karl'
// } else {
//     matchName = 'No, it is wrong name'
// }
// console.log(matchName);
// name = 'Not Karl';
// matchName = name == 'Karl' ? true : false;
// console.log(matchName)

// let input = prompt('input your name:');
// console.log(typeof input)

// const truthy = Number(input) ? 'numb' : 'str'
// alert(truthy)

// let role = prompt('input smth')
// switch (role) {
//     case 'guest':
//         console.log('Login Guest user');
//         break;
//     case 'admin-user':
//     case 'admin-admin':
//     case 'admin':
//         console.log('Login Admin user');
//         break;
//     case 'doctor':
//         console.log('Login Doctor user');
//         break;
//     default:
//         console.log('Login Unknown user');
// }

// const isVlaid = !!'test';

// switch (isVlaid){
//     case true:
//         console.log(true);
//         break;
//     case false:
//         console.log(false);
// }

// let i - called loop variable
// for (let i = 0; i < 3; i++) {
//     if (i === 1) {
//         continue;
//     }
//     console.log('Iteration:', i);
// }

// for (let i = 0; i < 3; i++) {
//     // if (i == 1) {
//     //     break;
//     // }
//     console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//     console.log(i);

//     for (let j = 4; j > 0; j-=2) {
//         console.log(i, j);
//     } 

// }

// let i = 0;
// while (i < 3) {  // (condition)
//     console.log(i);
//     i++;
//     // do not forget increment variable
// }

// i = 0;
// while ( i < 3) {  // (condition)
//     console.log(i);
//     ++i;
//     // do not forget increment variable
// }

// let i = 0;
// while (++i < 5) {
//     console.log( i );
// }
// console.log('BREAK');
// i = 0;
// while (i++ < 5) {
//     console.log( i );
// }


// let counter = 0;
// while(!isElementVisible() && counter < 10){
    // wait(1000)
    // counter++;
// }

// let counter = 0;
// while (waitForSomeElementToExist() && counter < 10) {
//     clickButtonOnElement()
//     counter++;
// }

// // do while - First run then check
let i = 3;
do {
    console.log(i);
} while (i < 3);

while(i < 3){
    console.log(i)
}

// while (i < 3) {  // (condition)
//     console.log(i);
//     i++;
//     // do not forget increment variable
// }