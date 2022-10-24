

// function createHuman(name, favoriteFood, hoursOfSleep) {
//     return {
//       legs: 2,
//       hands: 2,
//       head: 1,
//       name,
//       favoriteFood,
//       hoursOfSleep
//     };
//   }
//   let human1 = createHuman("Mykola", "Borcht", null);
//   console.log(human1)
//   let human2 = createHuman("Bob", "Pasta", 7);
//   let human3 = createHuman("John", "Fruits", 4);

// function Human(name, favoriteFood, hoursOfSleep) {
//     return {
//       legs: 2,
//       hands: 2,
//       head: 1,
//       name,
//       favoriteFood,
//       hoursOfSleep,
//       // Objects can contain functions as well
//       walk: function() {
//         console.log("Human is walking!");
//       },
//       eat: function() {
//         console.log("Human is eating!");
//       },
//       sleep: function() {
//         console.log("Human is sleeping!");
//       }
//     };
//   }
//   let human1 = Human("Mykola", "Borcht", null);
//   console.log(human1)

// function Human(name, favoriteFood, hoursOfSleep) {
//     this.someValue = 'test'
//     return {
//       legs: 2,
//       hands: 2,
//       head: 1,
//       name,
//       favoriteFood,
//       hoursOfSleep,
//       // Objects can contain functions as well
//       walk() {
//         console.log(this);
//         const arrFun = () => {
//             console.log(this);
//         }
//         arrFun()
//       },
//       eat: function() {
//         console.log("Human is eating!");
//       },
//       sleep: () =>  {
//         console.log(this);
//       }
//     };
//   }
//   let human1 = new Human("Mykola", "Borcht", null);
//   let human2 = new Human("Bob", "Pasta", 7);
//   let human3 = new Human("John", "Fruits", 4);
  
//   // we can actualy call this function
//   human1.walk(); // Human is walking!
//   human1.eat(); // Human is eating!
//   human1.sleep(); // Human is sleeping!


// // Actually we can now remove 'return' and wrapping object:
// function Human(name, favoriteFood, hoursOfSleep) {
//     console.log('THIS', this); 
//     this.legs = 2;
//     this.hands = 2;
//     this.head = 1;
//     this.name = name;
//     this.favoriteFood = favoriteFood;
//     this.hoursOfSleep = hoursOfSleep;
//     this.walk = () => {
//       console.log(`${this.name} is walking`);
//     };
//     this.eat = function() {
//       console.log(`${this.name} is eating ${this.favoriteFood}`);
//     };
//     this.sleep = function() {
//       console.log(`${this.name} went sleep for ${this.hoursOfSleep} hours`);
//     };

//     this.logThis = function() {
//         console.log(this);
//         return `Got this: ${Object.keys(this)}`
//       };
//     console.log(this)
//   }

//   let human1 = new Human("Mykola", "Borcht", null);
// //   console.log(human1)
//   human1.walk()
//   class Human2 {
//     constructor(name) {
//         this.name = name
//     }

//     walk = () => {
//         console.log(this.name)
//     }
//   }
  

//   const obj = {
//     name: 'COnstName',
//     walkObj: function()  {
//         const arrFun = () => {
//             console.log(this);
//         }
//         function regularFunc() {
//             console.log(this)
//         }
//         arrFun();
//         regularFunc();
//         console.log(this)
//     }
//   }
//   obj.walkObj()
  // new Human() syntax will automatically create object for us and return 'this'
  // new key means run your function and return done object
 
//   const humna2 = new Human2('Andrii');
//   humna2.walk()
//   let human2 = new Human("Bob", "Pasta", 7);
//   let human3 = new Human("John", "Fruits", 4);
  
//   // Still works the same:
//   human1.walk(); // Mykols is walking
//   human1.eat(); // Mykols is eating Borsch
//   human1.sleep(); // Mykols went sleep for null hours

//   console.log(human1.logThis())
//   for(let abc in human1){
//       console.log(abc)
//   }


class Human {
    // constructor function will be called at object creation
    // you don't need to put function key word
    // constructor actualy constract your function

    constructor(name, favoriteFood, hoursOfSleep) {
      // you can set any your custom properties
      this.nameMine = name;
      this.favoriteFood = favoriteFood;
      this.hoursOfSleep = hoursOfSleep || this.hoursOfSleep
    }
    legs = 2;
    hands = 2;
    head = 1;
    hoursOfSleep = 7
    #privateHuman = [100,200,300]
    walk = () => {
        this.legs = 90;
        console.log(this)
        const arrInside = () => {
            console.log(this)
        }
        function defClasic() {
            console.log(this);
        }
        arrInside()
        defClasic.bind(this)()
      this.someVariable = 'value'; // undefined
      return `${this.nameMine} is walking`;
    };
    eat = function() {
        function classic() {
            console.log(this)
        }
        classic()
      console.log(`${this.nameMine} is eating ${this.favoriteFood}`);
    };
    countBonuses() {
        return this.#privateHuman.map(salary => salary > 200 ? salary * 1.5 : salary * 2);
    }
    #privateMethod() {
        console.log(this.#privateHuman, 'I AM PRIVATE');
    }
    sleep() {
        this.#privateMethod()
      console.log(`${this.nameMine} went sleep for ${this.hoursOfSleep} hours`);
    };

    walkAndEat() {
        this.eat()
        this.walk()
      }

  }
//   console.log(typeof Human)
// //   // Usage is still same:
  let human1 = new Human("Mykola", "Borcht");
  human1.sleep()
  console.log(human1.countBonuses())
//   console.log(human1.#privateHuman)
//   human1.eat()
// //   human1.walk(999); // Mykola is walking
// //   human1.eat(); // Mykola is eating Borcht
//   human1.sleep(); // Mykola went sleep for null hours
//   human1.walkAndEat(); // Mykola went sleep for null hours


//   // There are no special type for Class, it is still constructor function, as we started in the begining
//   console.log(typeof Human); // function
//   // For created object it is object 
//   console.log(typeof new Human()); // object


  class Student extends Human {
    constructor({favFood, name,  hos, university, favSubject}){
        super(name, favFood, hos)
        this.university = university;
        this.favSubject = favSubject
    }
    ageDescription = 'Teenager'

    get hours() {
        return this.hoursOfSleep
    }
 
    set hours(hos) {
        this.hoursOfSleep = hos
    }


    reportAboutUni() {
        console.log(`${this.nameMine} loves studying at ${this.university} and most of it is ${this.favSubject}`);
    }

    walk = () => {
        // console.log(this.#privateField);
        console.log(`${this.nameMine} walkt fast`);
    }

    static staticMethod() {
        console.log('STATIC');
        // DO NOT USE FOR WORK WITH OTHER METHODS OR THIS
        this.staticInner()
        Student.staticInner()
    }

    static staticInner() {
        console.log('I can be called inside other static method')
    }
  }

  const payload = {
    university: 'KPI',
    favSubject: 'Math',
    favFood: "Deruny",
    name: 'Vasya',
    hos: 6
  }

const student1 = new Student({
    university: 'KPI',
    favSubject: 'Math',
    favFood: "Deruny",
    name: 'Vasya',
    hos: 6
  })
student1.reportAboutUni()
student1.walk()
Student.staticMethod()

// getter and setter
console.log(student1.hours)
student1.hours = 10
console.log(student1.hours)
// const myFunc = ({a,b,c,d,e}) =>{
//     console.log(a,b,c,d,e)
// }

// const obj = {a: 1,b: 2,c: 3,d: 4,e: 5}
// const {a,b,c,d,e} = obj
// myFunc(obj)
// human1.reportAboutUni()
//   }
//   const studObj = {
//     food: "Varenyky", 
//     name: "Andrii",  
//     hOfSleep: 10, 
//     favouriteSubj: 'Math', 
//     firstLove: 'Anna', 
//     bestFfriend:"Max"
//   }

//   const student1 = new Student(studObj)
// //   console.log(student1)
//   console.log(student1.countLegsAndHands())
//   console.log(student1.getIsParent)
// //   console.log(Human.testStatic())
// //   console.log(student1.walk())
// //   console.log(student1.legs)

// //   const func2 = (test, test2) => {
// //     return test + test2
// // }

// // console.log(func2(1,2,3))

// const funcWithDescruct = ({name, age, gender, height}) => {
//     console.log(name, age, gender, height)
// }

// const myObj = {
//     name: "Nick",
//      age: 123, 
//      gender: "male", 
//      height: 185,
//      innerObj: {
//          comment: 'abc'
//      }
//     }
//     const {name, age, gender, height: manHeight, innerObj: { comment }} = myObj
//     console.log(comment)
// funcWithDescruct(myObj)


// let animal = {
//     eats: true
//   };
//   let rabbit = {
//     jumps: true
//   };

//   console.log(rabbit.jumps)
//   console.log(rabbit.eats)
  
//   rabbit.__proto__ = animal; // (*)

//   console.log(rabbit.eats)
//   console.log(rabbit)
  
//   // тепер ми можемо знайти обидві властивості в об’єкті rabbit:
//   console.log( rabbit.eats ); // true (**)
//   console.log( rabbit.jumps );
//   console.log(rabbit)

//   console.log(student1)

//   String.prototype.myNewFunc = function() {
//       return this + 'abc'
//   }

//   console.log('    myStr    '.trim())
// const num = 1;
//   console.log(num.toString());


// let animal = {
//     eats: true
//   };
  
//   function Rabbit(name) {
//     this.name = name;
//   }
  
//   console.log(Rabbit.prototype)
//   Rabbit.prototype = animal;
//   console.log(Rabbit.prototype)
  
//   let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
  
//   console.log( rabbit.eats ); 

//   class Tabbit {
//     constructor(name){
//         this.name = name
//     }
//   }

//   Tabbit.prototype = {constructor: animal}

//   console.log(Tabbit.prototype)
// const a = {abc: 'test'}

// console.log(a.toString())

// console.log(a.__proto__ === Object.prototype)

// const num = 5;
// // console.log(num.toString())

// console.log(num.toString === Number.prototype.toString)


// CHECK function in other dunction in class
// Prototype from Class vs ConstructorFunction, reasignment to other object.