// const fs = require("fs");

// function printFileSync(name) {
//   let content = fs.readFileSync(`./lesson-6/data/${name}`, { encoding: "UTF8" });
//   console.log(name, "is ready:");
//   console.log(content.toString());
// }
// function printFileAsync(name) {
//   let data;
//   fs.readFile(`${__dirname}/data/${name}`, { encoding: "UTF8" }, function(err, content) { // the third parameter is callback
//     console.log(name, "is ready:");
//     console.log(content);
//     data = content
//   }); // it will be executed at the end of your async command
//   console.log(data);
// }


// // Sync:
// console.log("Reading file sync 1.json");
// printFileSync("1.json");
// console.log("Reading file sync 2.json");
// printFileSync("2.json");
// console.log("Done executing sync commands");

// Async
// console.log("Reading file async 1.json");
// printFileAsync("1.json");
// console.log("Reading file async 2.json");
// printFileAsync("2.json");
// console.log("Done scheduling async commands");

// fs.readFile(`./lesson-6/data/path.json`, { encoding: "UTF8" }, function(
//   err,
//   filepaths
// ) {
//   // converting string to json
//   let parsedFilepaths = JSON.parse(filepaths);
//   // showing what we got
//   console.log("Got file paths!", parsedFilepaths);
//   fs.readFile(parsedFilepaths.first, { encoding: "UTF8" }, function(
//     err,
//     contentFirst
//   ) {
//     console.log("Got first file", contentFirst);
//     fs.readFile(parsedFilepaths.second, { encoding: "UTF8" }, function(
//       err,
//       contentSecond
//     ) {
//       console.log("Got second file", contentSecond);
//       fs.readFile(parsedFilepaths.third, { encoding: "UTF8" }, function(
//         err,
//         contentThird
//       ) {
//         console.log("Got third file", contentThird);
//       });
//     });
//   });
// });


// fs.readFile(`./lesson-6/data/path.json`, { encoding: "UTF8" }, function(
//   err,
//   filepaths
// ) {
//   // converting string to json
//   let parsedFilepaths = JSON.parse(filepaths);
//   console.log(parsedFilepaths);
//   // showing what we got
//   console.log("Got file paths!", parsedFilepaths);
//   fs.readFile(parsedFilepaths.first, { encoding: "UTF8" }, function(
//     err,
//     contentFirst
//   ) {
//     console.log("Got first file", contentFirst);
//     fs.readFile(parsedFilepaths.second, { encoding: "UTF8" }, function(
//       err,
//       contentSecond
//     ) {
//       console.log("Got second file", contentSecond);
//       fs.readFile(`parsedFilepaths.three`, { encoding: "UTF8" }, function(
//         err,
//         contentThird
//       ) {
//         if(err){
//           console.log(err)
//         }
//         console.log("Got third file", contentThird); // OOOPS - undefined!
//       });
//     });
//   });
// });

// fs.readFile(
//   // relative path to file
//   `./data/notexisting.json`,
//   // reading options
//   { encoding: "UTF8" },
//   // special function called callback:
//   function(err, content) {
//     // It is convention - first parameter of callback function must be err
//     // if we have error
//     if (err) {
//       console.log("Oh no, we have error!");
//       console.log(err);
//       // you can re-throw if you want
//       throw err;
//     }
//     console.log(name, "is ready:");
//     console.log(content);
//   }
// );


//------------------------ PROMISE
// let futureResult = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     console.log("Now our Promise is fulfilled after 2 secs!");
    
//     console.log("2 Now our Promise is fulfilled after 2 secs!");
//   }, 2000);
//   setTimeout(function() {
//     console.log("SECOND TIMEOUT");
//     reject('SECOND')
//   }, 2000);

// });

// // Key feature is possibility to subscribe to result when it will be ready using .then()
// futureResult.then(data => {
//   console.log(data);
// })
// // You can subscribe multiple times to same promise:
// futureResult.then(function() {
//   console.log("2 Yay! Promise is fulfilled!");
// }).catch(err => {
//   console.log(err);
// })

// const filesystem = require('fs')


// function readFileMine(filename) {
//   return new Promise(function(resolve, reject) {
//     filesystem.readFile(
//       // relative path to file
//       `./lesson-6/data/${filename}`,
//       // reading options
//       { encoding: "UTF8" },
//       // special function called callback:
//       function(err, content) {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(content);
//         }
//       }
//     );
//   });
//   // Our function returns Promise,
//   // that will allow us listen for result of async operation
// }

// // And usage is folowing
// console.log("Reading file async 1.json");
// let promise1 = readFileMine("path.json");
// promise1.then(data => {
//     let parsedFilepaths = JSON.parse(data);
//     console.log(parsedFilepaths)
//   return readFileMine(parsedFilepaths.second.split('/').pop())
// }).then(data => {
//   console.log(data)
// })
// .catch(err => {
//   console.log(err)
// })
// .finally(function() {
//   console.log('clean DB')
// })

// // Instead of passing callback - we are "subscribe" to "resolved" state of promise
// promise1.then(function(content) {
//   console.log("File 1.json returned", content);
//   return readFile('2.json');
// }).catch(err => {
//   console.log(err);
//   return readFile('2.json');
// })
// .then(data => {
//   console.log(data)
// })
// .finally(function() {
//   console.log('clean DB')
// })
// console.log("Reading file async 2.json");
// let promise2 = readFile("2.json");
// const abc = promise2.then(function(content) {
//   console.log("File 2.json returned", content);
//   return content
// });
// console.log(abc)
// console.log("Reading file async 3.json");
// let promise3 = readFile("3.json");
// promise3.then(function(content) {
//   console.log("File 3.json returned", content);
// });
// console.log("Done scheduling async commands");

// const fs = require("fs"); // Do not worry for .require now, we will look on it on next lesson.
// const util = require("util");
// let readFile = util.promisify(fs.readFile);

// // Now readFile is returns Promise, instead of working with callbacks
// readFile("./lesson-6/data/1.json", { encoding: "UTF8" }).then(function(content) {
//   console.log(content);
// });

// -------------------------ASYNC AWAIT
// const fs = require("fs"); // Do not worry for .require now, we will look on it on next lesson.
// const util = require("util");
// const readFile = util.promisify(fs.readFile);

// async/await is special keywords to work with async operations results
// async/await is still based on Promises
// Lets see how we can work with async operations using async/await

// console.log("Reading file async 1.json");
// let content = await readFile("./data/1.json", { encoding: "UTF8" });
// console.log("File content is", content);

// await can be only used inside "async" function:
// async function readFileAsync(filename) {
//     console.log("Reading file async" + filename);
//     let content;
//     try {
//        content =  await readFile(`./lesson-6/data/${filename}`, { encoding: "UTF8" });
//     } catch(e) {
//       console.log(e)
//     }
//     console.log("File content type", typeof content);
//     console.log("File content is", content);
//     // return readFile(`./lesson-6/data/${filename}`, { encoding: "UTF8" });
//     return content;
// }

// const func1 = async () => {
// }

// const abc = readFileAsync('1.json')
// console.log(abc);

// const secondAsync = async () => {
//   console.log('THIS IS RESULT OF RETURN', await readFileAsync('21.json'))
// }
// secondAsync()
// // Function that is declared as async now will return Promise
// // Does not matter what you return from that function - it will be wrapped to Promise.

// const utilAsyncFunc = async (fileName) => {
//   let res = await readFileAsync(fileName)
//   console.log(res)
//   return res
// }

// const res = utilAsyncFunc('1.json');
// console.log("Async function returned", res, "Type is", typeof res);

const https = require('node:https')

const getPage = () => {
  return new Promise((resolve, reject) => {
    https.get('https://encrypted.google.com/', (res) => {
      console.log('statusCode:', res.statusCode);
      // console.log('headers:', res.headers);
    
      res.on('data', (d) => {
        resolve(d.toString())
      });
    
    }).on('error', (e) => {
      reject(e);
    });
    
  })
}
getPage().then(data => {
  console.log(data);
}).catch(err => {
  console.log(err)
})

const asyncFuncGetPage = async () => {
  console.log(await getPage())
}
asyncFuncGetPage()
// const getMyWeather = (city) => {
//   return new Promise((resolve, reject) => {
//     https.get(`https://node-weather-app-apo.herokuapp.com/weather?address=${city}`, (res) => {
    
//       res.on('data', (d) => {
//         resolve(d.toString());
//       });
    
//     }).on('error', (e) => {
//       reject(e)
//     });
//   })
// }

// const myPromise = getMyWeather('Paris');
// myPromise.then((data) => {
//   console.log(data);
// }).catch(e => {
//   console.log(e)
// })

// const asyncFun = async (city) => {
//   const result = await getMyWeather(city);
//   console.log(result);
// }

// asyncFun('London')


// import axios from 'axios';

// const getSmth = async () => {
//   return axios.get('utl', 'query')
// }


// //....... other file

// import 'myApiClient' from '../apiClient';
// const apiClient = myApiClient();
//  describe('name of test suit', () => {
//   test('name of test', async () => {
//     const result = await apiClient.getSmth();
//     expect(result.statusCode).toBe(200);
//   })
// })


// const newPromise = (arg) => new Promise((res, rej) => res(arg))

// const asyncFunc = async(argInAsync) => {
//   const res = await newPromise(argInAsync)
//   console.log(res);
//   return res;
// }

// asyncFunc('QQQQ')