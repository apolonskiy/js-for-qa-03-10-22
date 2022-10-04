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

// Regular function example
// function myRegularFnc() {
//     console.log("I'm a regular function")
//   }
  
//   // Arrow function example
// const myArrowFnc = () => Boolean(1) ? 'text1' : 'text2';

//   myRegularFnc()
//   console.log(myArrowFnc())


// function myRegularFnc() {
//     console.log(this)
//   }

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

// const post = {
//     title: 123,
//     'User agent':  {
//         name: "Andrii",
//         text: "it is interesting"
//     },
//     arr: [1,2,3],
//     iLive: true,
//     someFunction: function() { 
//         setTimeout(() => {
//             console.log(this)
//         }, 1000)
//         console.log(this)
//         console.log('some text')
//         return 'some value'
//     }
// }

// const arrObj = {
//     0: 1,
//     1: 2,
//     2: 3
// }

// console.log(typeof post.arr)

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

// Shallow Copy
// const copyPost = {...post}
// const copyPost = Object.assign({}, post)

// // Deep copy object
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
//     title: 123,
//     comment:  {
//         name: "Andrii",
//         text: "it is interesting"
//     },
//     arr: [1,2,3],
//     iLive: true
// }

// const {title: newTitleField, comment: {name: commentName}} = post;
// console.log(newTitleField)

// console.log(commentName)



//  // REST operator
function sortArgs(arg1, arg2, ...argsRest) {

//   console.log(args)
  console.log(arg1);
  console.log(arg2);
  console.log(argsRest);
  console.log(...argsRest)
  return argsRest.sort()
}

// // console.log(sortArgs(1,2,3,4,6,7,8,9,9,6))


// // SPREAD for arrays
// const a = ['1', '2', '1', '4'];
// const w = a;
// const q = [...a];
// q[1] = 'SOME S}THING'
// a[0] = 'WWWW'

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

// console.log(myObj?.additionalField?.newField?.test?.test)





// Practice part
// --------------------------

// SPREAD / COPY object
// const a = [1,2,3];
// const b = {a, b: 'text', c: {d: '123', e: null}}
// const c = {...b}
// const c2 = Object.assign({}, b);

// b.a = 'NEW';
// console.log(c2)
// console.log(b)
// console.log(c);


// REST operator
// function sortArgs(arg1, ...args) {

//   console.log(args)
//   someOtherFunc(args);
//   console.log(arg1);
//   return args.sort()
// }
// console.log(sortArgs(1,2,3,1,5,6,7,7,8))

// SPREAD for arrays
// const a = ['1', '2', '1'];
// const w = a;
// const q = [...a];
// q[1] = 'SOME S}THING'
// a[0] = 'WWWW'

// console.log(a);
// console.log(w);
// console.log(q);
// console.log(sortArgs(...a));

// const object = {
//   test: "smth",
//   age: 23,
//   obj: {
//     "internal": ['value']
//   },
//   logString: () => {
//     console.log('test')
//     // return('some value')
//   }
// }

// console.log(object)


// const json = JSON.stringify(object)

// console.log(typeof object);

// console.log(json);

// console.log(JSON.parse(json))


// DESTRUCTURE OBJECT< SHOW IT!!!!


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


// // expect(generateObj(false).additionalField.newField).eql(200);
// console.log(generateObj(false)?.additionalField?.newField);


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

function recursion (num) {
    if(num < 2){
        return 1;
    }

    return num * recursion(num - 1);
}

console.log(recursion(5))