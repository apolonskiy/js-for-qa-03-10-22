

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
//     this.walk = function() {
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
//   }
//   // new Human() syntax will automatically create object for us and return 'this'
//   // new key means run your function and return done object
//   let human1 = new Human("Mykola", "Borcht", null);
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
    #isParent = false
    constructor(name, favoriteFood, hoursOfSleep) {
      // you can set any your custom properties
      this.legs = 2;
      this.hands = 2;
      this.head = 1;
      this.name = name;
      this.favoriteFood = favoriteFood;
      this.hoursOfSleep = hoursOfSleep || this.hoursOfSleep
      this.#isParent = false
    }
    hoursOfSleep = 7
    walk() {
      this.someVariable = 'value'; // undefined
      return `${this.name} is walking`;
    };
    eat() {
      console.log(`${this.name} is eating ${this.favoriteFood}`);
    };
    sleep() {
      console.log(`${this.name} went sleep for ${this.hoursOfSleep} hours`);
    };

    #getIsParent(){
        return this.#isParent;
    }

    walkAndEat() {
        this.eat()
        this.walk()
        console.log(this.#getIsParent())
      }

    static parentStatic() {
        return 'I am parent static'
    }
  }
  
  // Usage is still same:
  let human1 = new Human("Mykola", "Borcht");
//   human1.walk(999); // Mykola is walking
//   human1.eat(); // Mykola is eating Borcht
  human1.sleep(); // Mykola went sleep for null hours
  human1.walkAndEat(); // Mykola went sleep for null hours


  // There are no special type for Class, it is still constructor function, as we started in the begining
  console.log(typeof Human); // function
  // For created object it is object 
  console.log(typeof new Human()); // object


  class Student extends Human {
      constructor({food, name, hOfSleep, favouriteSubj, firstLove, bestFfriend}){
          super(name, food, hOfSleep)
          this.favouriteSubj = favouriteSubj
          this.firstLove=firstLove
      }

      getMyFavouriteSubject() {
          return this.favouriteSubj
      }

    countLegsAndHands() {
        return this.legs + this.hands
    }

    static testStatic() {
        return 'I am static'
    }

  }
  const studObj = {
    food: "Varenyky", 
    name: "Andrii",  
    hOfSleep: 10, 
    favouriteSubj: 'Math', 
    firstLove: 'Anna', 
    bestFfriend:"Max"
  }

  const student1 = new Student(studObj)
//   console.log(student1)
  console.log(student1.countLegsAndHands())
  console.log(student1.getIsParent)
//   console.log(Human.testStatic())
//   console.log(student1.walk())
//   console.log(student1.legs)

//   const func2 = (test, test2) => {
//     return test + test2
// }

// console.log(func2(1,2,3))

const funcWithDescruct = ({name, age, gender, height}) => {
    console.log(name, age, gender, height)
}

const myObj = {
    name: "Nick",
     age: 123, 
     gender: "male", 
     height: 185,
     innerObj: {
         comment: 'abc'
     }
    }
    const {name, age, gender, height: manHeight, innerObj: { comment }} = myObj
    console.log(comment)
funcWithDescruct(myObj)


let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };
  
  rabbit.__proto__ = animal; // (*)
  
  // тепер ми можемо знайти обидві властивості в об’єкті rabbit:
  console.log( rabbit.eats ); // true (**)
  console.log( rabbit.jumps );
  console.log(rabbit)

  console.log(student1)

  String.prototype.myNewFunc = function() {
      return this + 'abc'
  }

  console.log('    myStr    '.trim())
const num = 1;
  console.log(num.toString());