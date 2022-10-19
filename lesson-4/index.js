// 2) Object native methods
// const obj1 = {
//     a: 'b',
//     test: 1,
//     objInner: {
//         qqqq: 'www'
//     }
// }

// console.log(Object.keys({}))
// const keys = Object.keys(obj1)
// keys.forEach(key => {
//     console.log(obj1[key])
// })
// console.log(Object.values(obj1))
// console.log(Object.entries(obj1))

// // 3) native loops for object and arrays `for.. in` and `for .. of`
// const keyArray = Object.keys(obj1);
// console.log(keyArray)

// for(let key in keyArray){
//     console.log(key)
//     console.log(keyArray[key])
//     // keys[key] = 'QWE'
// }

// for (let value of keyArray){
//     console.log(value);
//     // value = 'test!!!!'
// }
// // keys

// for(let key in obj1){
//     console.log(key)
// }

// DONT DO THIS, FIBIDDEN AND THROWS
// for(let key of obj1){
//     console.log(key)
// }

//// ------------------


// let arr = new Array(3, 33, 55);
// console.log(arr)

// const fruits = ["Apple", "Orange", "Plum"];
// const arr1 = [];

// // Index is a number starts from 0
// //  --0--     --1--     --2--
// // ["Apple", "Orange", "Plum"]

// let apple = fruits[0]; // Apple
// let orange = fruits[1]; // Orange
// let plum = fruits[fruits.length - 1]; 
// console.log(plum)


// fruits[2] = "Lemon";
// console.log(fruits)

// console.log(Array.isArray([]));
// console.log(typeof []);

// const url = 'https://some.web.page/someRoute'
// console.log(url.split('/'))
// console.log(url.split('/').pop())

// const fruits = ["Apple", "Orange", "Pear"];
// console.log(fruits.pop()); // remove "Pear" and print it
// console.log(fruits);

// console.log(Object.keys({}))
// const ojb = {}
// ojb.keys()


// let fruits = ["Apple", "Orange"];
// fruits.push("Pear", 2, 5,6,67);
// // fruits[fruits.length]='Pear'
// console.log(fruits);

// let fruits = ["Apple", "Orange", "Pear"];
// console.log(fruits.shift()); // remove Apple and print it
// console.log(fruits);

// // unshift - add element to begining
// let fruits = ["Orange", "Pear"];
// fruits.unshift("Apple", 4,6);
// console.log(fruits);

// let fruits = []; // make an array
// fruits[100] = 5; // assign a property with the index far greater than its length
// fruits.age = 25;
// fruits[101]='qqq'  // create a property with an arbitrary name
// console.log(fruits)

// const forEachFunc = (item, ind, arr) => {
//     console.log(item, ind, arr);
// }

// let arr = ["Apple", "Orange", "Pear"];
// arr.forEach(forEachFunc);

// arr.forEach(function (item) {
//     console.log(item)
// })
// const arrIds = [1,2,3,4,5];
// arrIds.forEach(id => {
//     myApicall.sendDelete(id)
// })


// let arr = [10, 30, 100, 50, 19, 35, 12, 23, 11];

// let newArr = arr.map(function(item, index, array) {
//     if(item >= 50){
//         return item * 2;
//     } else {
//         return item - 5;
//     }
// });
// console.log(arr); // [10, 30, 100]
// console.log(newArr);


const arrObj = [
    {user: 'Andrii', age: 25, school: 'high', id: 'sdkjghsdjhk'},
    {user: 'Test', age: 40, school: 'middle', id: 'sdgsdg'},
    {user: 'Mark', age: 32, school: 'univ', id: 'sddsgsdg'}
]

// const arrRes = []

// const concatArr = arrObj.map((item) => ({userSchool: `${item.user} ${item.school}`, age: item.age}))

const concatArr = arrObj.map((item) => {
        return item.id
})

console.log(concatArr, '\n' ,arrObj)
for(const id of concatArr){
    // delete(id)
    console.log(id);
}


// let fruits = ["Apple", "Orange", "Plum", 1, "Plum"];
// // looks for item starting from index from, and returns the index where it was found, otherwise -1.
// let index = fruits.indexOf("Plum", 3); // 2
// // let index = fruits.indexOf("Plumjvjhb");
// // let index = fruits.indexOf(1); 

// console.log(index)

// // same, but looks from right to left.
// let fruits = ["Apple", "Orange", "Plum", "Apple", 1];
// // let index = fruits.lastIndexOf("Plum");
// let index = fruits.lastIndexOf("Apple");
// console.log(index)

// // includes returns true if found.
// console.log(fruits.indexOf('Apple')) // but it is agly
// let isExist = fruits.includes("Orange1"); // includes works only for prymitive types
// console.log(isExist); // true


// let users = [
//     { id: 1, name: "John", age: 21 },
//     { id: 2, name: "Pete", age: 43 },
//     { id: 1, name: "Mary", age: 37 }
// ];

// let user = users.find(function(item) { // functhion inside mothod call callback function
//     return item.id === 1 && item.age === 37;
// });

// console.log(user)

// let ind = users.findIndex(function(item) {
//     return item.id === 2;
// });

// console.log(ind); // 1

// let hasUserLessThan18 = users.some(function(user) {
//     return user.age < 28;
// });

// console.log(hasUserLessThan18); // false

// // every - to check that ALL elements in array matches condition
// let allUsersMoreThan18 = users.every(function(user) {
//     return user.age > 28;
// });

// console.log(allUsersMoreThan18); // false


// let users = [
//     { id: 1, name: "John", age: 43 }, // same age
//     { id: 2, name: "Pete", age: 43 },
//     { id: 3, name: "Mary", age: 37 }
// ];

// // returns new array that will contain only items for which function returned 'true'
// let usersWithAge43 = users.filter(function(item) {
//     return item.age === 43
// }).map((item) => ({userIdName: `${item.id} ${item.name}`})).find((item, ind) => {
//     return ind === 1;
// })

// console.log(usersWithAge43)



// let arr = ["I", "study", 'SMART', "JavaScript"];
// arr.splice(1, 2, 'Love', 'a lot'); // from index 1 remove 1 element
// console.log(arr); // ["I", "JavaScript"]



// let arr = ["a", "b", "c", "d", 1,2,3,45];
// const arrIndexOne = arr.indexOf('someValue');
// const arrIndexTwo = arr.indexOf('someValueTwo');
// console.log(arr.slice(arrIndexOne, arrIndexTwo+1))
// console.log(arr.slice(1, 3)); // [b,c]
// console.log(arr.slice(-7)); // [c,d]
// console.log(arr);



// let arr = [1, 2];

// // merge arr with [3,4]
// console.log(arr.concat([3, 4])); // 1,2,3,4

// // merge arr with [3,4] and [5,6]
// console.log(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

// // merge arr with [3,4], then add values 5 and 6
// console.log(arr.concat([3, 4], 5, 6)); // 

// let arr = [1, 1, 1] + [1]; // ? work different
// console.log(arr);

// let arr = [1, 3, 2, 15, 1];
// the method reorders the content of arr (and returns it)
// modify your array
// arr.sort((a, b) => {
//     if(a < b) {
//         return -1
//     } else if ( a > b){
//         return 1;
//     } else {
//         return 0
//     }
// });
// const arrSorted = arr.sort((a, b) => b - a);
// console.log(arr); 
// console.log(arrSorted)

// let arr = [1, 14, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr)


// const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 95;
// const sumWithInitial = array1.reduce(
//   (acc, curr) => acc + curr,
//   initialValue
// );

// function reducer(acc, curr) {
//     return acc + curr
// }

// const sumWithInitial = array1.reduce(
//     reducer,
//     initialValue
//   );

// console.log(sumWithInitial);

//MULTIPLE LAYERS ARRAYS;
// const arrMultipleLevel = [[1,2,3], [55,6,7], ['s', 'b', 'c',[1,2,3,4,5,6, [{BUY: 'SELL'}]]]]

// console.log(arrMultipleLevel[2][3][6][0]['BUY'])

// const matrix = [[1, 5, 7], [8, 9, 0], [5, 7, 3]]



// const functionError = (bool) => {
//     if(bool){
//         throw new Error('Made up error');
//     }
//     console.log('TEEST');
// }


// try {
//     console.log("Start of try runs");
//     // nonvariable; // error, variable is not defined!
//     functionError(true)
//     console.log("End of try (never reached)"); // try block interupted, so this never be executed
//   } catch (error) {
//     console.log(`Error has occured!`);
//     console.log(error)
//     if(error = ''){
//         throw new Error('1')
//     }
//     // throw new Error('This does not work')
//   } finally {
//     console.log('ANYWAYS WORKS!!!')
//   }
//   console.log('.. code continues')


//   try {
//       const resp = axiosCallGetUser('userID')
//       return resp.status
//   } catch(error){
//       return error.status;
//   }

// const str = '12345'
// console.log(str.split(''))