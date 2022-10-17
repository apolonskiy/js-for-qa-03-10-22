// const post = {
// 	title: "string111",
// 	'!@#$': {
// 		firstName: "string",
// 		lastName: "string"
// 	},
// 	isLive: true,
//   // someFunction() {
//   //   console.log(this);
//   // }
//   // someFunction: function() {
//   //   console.log(this.title);
//   // }
//   someFunction: () => {
//     console.log(this)
//   }
// }

// console.log(this)
// // console.log(post.title)
// // console.log(post['!@#$'].firstName)
// // console.log(post['!@#$']['firstName'])
// post.someFunction()



// function sayHello(color) {
//     switch(color){
//         case 'green':
//             return 'green light'

//         case 'yellow':
//         case 'red':
//             return 'stop'
//         default:
//             return 'broken'
//     }
//     }
//     const result = sayHello('yellow'); // function call
//     console.log(result)

//   ()

// const inputData = prompt('Fill in your comma-separated values')

// // // Regular function example
// function printInput() {
  // console.log(arguments);
//   const args = [...arguments]
//   args.forEach(item => {
//     console.log(item)
//   })
// }

// printInput(1,2,3,45)
  
//   // Arrow function example
// const myArrowFnc = () => Boolean(0) ? 'text1' : 'text2';


// const generageObj = (name, lastName) => ({name, lastName})

// const generageObj1 = (name, lastName) => {
// return {
//   name,
//   lastName,
//   schoolNo: 52,
//   yearOfGraduation: 1993
// }
// }

// console.log(generageObj("andrii", 'Polonskyi'))
// console.log(generageObj1(undefined, 'Polonskyi'))

// // REST operator
// const myArrowFnc = (arg1, arg2, ...argsRest) => {
//   console.log(arg1)
//   console.log(arg2)
//   console.log(argsRest)
//   return Boolean(0) ? 'text1' : 'text2';
// }
// console.log(myArrowFnc(1,2,3,4,5))


// function myRegularFnc() {
//     console.log(this === globalThis)
// }

// const arrowFn = () => {
//     console.log(this)
// }

// myRegularFnc()
// arrowFn()

// const response = someCall();
// const userId = response.data.userId;

// const payload = {
//     userId,
//     ...fields,
// }



// Function declaration flows up 

// console.log(arrowFunc())
// console.log(classic())

// const arrowFunc = () => true;

// function classic () {
//     return false
// }


// const post = {
//     title: 123,
//     'User agent':  {
//         name: "Andrii",
//         text: "it is interesting",
//         someFunc2: () => {
//           console.log(this);
//         }
//     },
//     arr: [1,2,3],
//     isLive: true,
//     someFunction: function() { 
//       console.log(this)
//         setTimeout( () => {
//             console.log(this)
//         }, 1000)
//         console.log('some text')
//         return 'some value'
//     },

// }
// post['User agent'].someFunc2()

// post.someFunction()

// const arr = [1, 2, 3]

// const arrObj = {
//     0: 1,
//     1: 2,
//     2: 3
// }
// console.log(arr)
// console.log(arrObj)

// // console.log(typeof post.arr)

// const post = {
//     title: 123,
//     'User agent':  {
//         name: "Andrii",
//         text: "it is interesting"
//     },
//     arr: [1,2,3],
//     iLive: true
// }
// const obj2 = {
//     newField: 'abc',
//     iLive: 'ABCD'
// }
// console.log(...post.arr)
// // Shallow Copy
// const copyPost = {...post}
// // console.log(copyPost)
// const copyPost1 = Object.assign({}, post)
// console.log(copyPost1)

// const mergedObj = Object.assign(obj2, post, {}, {iLive: 654});
// console.log(mergedObj)


// const post = {
//   title: 123,
//   'User agent':  {
//       name: "Andrii",
//       text: "it is interesting"
//   },
//   arr: [1,2,3],
//   iLive: true
// }
// const copyPost = {...post}

// copyPost.title = 'ANDRII';
// copyPost['User agent'].name = 'Mykhailo' 
// copyPost.arr[0] = 'Mykola' 
// console.log(copyPost)
// console.log(post)


// const post = {
//     title: 123,
//     'User agent':  {
//         name: "Andrii",
//         text: "it is interesting"
//     },
//     arr: [1,2,3],
//     iLive: true
// }
// const obj2 = {
//     newField: 'abc'
// }

// // // Deep copy object
// console.log(typeof JSON.stringify(post))
// const copyPost = JSON.parse(JSON.stringify(post));

// copyPost.title = 'ANDRII';
// copyPost['User agent'].name = 'Mykhailo' 
// copyPost.arr[0] = 'Mykhailo' 
// console.log(copyPost)
// console.log(post)

// DESTRUCTURING OBJECTS

// const title = 'some title'

// const post = {
//     title,
//     comment:  {
//         name: "Andrii",
//         text: "it is interesting"
//     },
//     arrNBC: [1,2,3],
//     iLive: true
// }

// console.log(post.title)

// const {title: titleUser, comment: {text, name}} = post; // const text = post.comment.text; const name = post.comment.name
// console.log(text, name)

// console.log(titleUser)

// const arr1 = [1, 2, 'Anp'];
// const        [b, a, c] = arr1

// console.log(c)

// const [dog, cat] = ['cat', 'dog'];


// const {title: newTitleField, comment: {name: commentName}} = post;
// console.log(newTitleField)

// console.log(commentName)



//  // REST operator
// function sortArgs(arg1, arg2, ...argsRest) {

// //   console.log(args)
//   console.log(arg1);
//   console.log(arg2);
//   console.log(argsRest);
//   console.log(...argsRest)
//   return argsRest.sort()
// }

// // console.log(sortArgs(1,2,3,4,6,7,8,9,9,6))


// SPREAD for arrays
// const a = ['1', '2', '1', '4', {name: { test: 'TEST' }}];
// const w = a;
// const q = [...a];
// q[1] = 'SOME S}THING'
// a[0] = 'WWWW'
// const objCopy = {...a[4]};
// console.log(objCopy)
// objCopy.name.test='!@#$%^&*'
// console.log(a);
// q[4].name.test='BBBBBBB'
// q[4] = 'qwe'

// console.log(a);
// console.log(w);
// console.log(q);
// console.log(sortArgs(...q));

// OPTIONAL CHAINING

// function generateObj(addfield = true) {
//   const obj =  {
//     testField: 'test'
//   }
// if(addfield){
//   return Object.assign({}, obj, {additionalField: {newField: 'It exists!'}})
// } else{
//   return obj;
// }
// }
// const myObj = generateObj(false)

// console.log(myObj.additionalField?.newField)

// const response = {
//   data: {
//     name: 'ANC',
//     value: 123,
//     InnerObj: {
//       text: 'text'
//     }
//   }
// }

// console.log(response?.data?.InnerObj?.text)


// const obj1 = {
//   testFiled1: {
//     testField2: 'STROKA'
//   }
// }
// console.log(obj1.testFiled1['testField2'])


//--------------------------------\\


// const maxNumber = (a, b) => a>b ? a : b
// console.log(maxNumber(1,2));

// const maxNumber = (a,b) => a>b ? a : b
// console.log(maxNumber(5,1));

// function recursion (num) {
//     if(num < 2){
//         return 1;
//     }

//     return num * recursion(num - 1);
// }

// console.log(recursion(5))