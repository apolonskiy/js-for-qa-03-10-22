// import myDefaultFunc, {ABC, definedAbove, dc, marvel as marvelRules} from './client.js';
// marvelRules('Venom');
// dc('Wondar Woman');

// import * as fs from 'fs';

// fs.readFile('../1.json', (err, data) => {
//     console.log(data.toString());
// })

// const marvel = 'abc'

// import myDefaultFunc, * as supeHeroes from './client.js';
// console.log(supeHeroes)
// console.log(typeof supeHeroes);

// supeHeroes.marvel('Venom');
// supeHeroes.dc('Wondar Woman');
// console.log(myDefaultFunc());

// console.log(ABC);
// console.log(add(1, 2));
// console.log(`The addition is: ${add(2, 3)}`);

// console.log(myDefaultFunc());


// console.log(myDefaultFunc());


// import defFunc, {marvel, dc} from './client'
// console.log(defFunc, marvel);
// dc('TEST')


// import * as importedObject from './client'
// console.log(importedObject.defFunc, importedObject.marvel);
// console.log(importedObject.default)
// importedObject.dc('TEST')

// const marvel = 'marv';

import defFunc, {marvel as narvelFunc, dc} from './client.js'
console.log(defFunc, narvelFunc);
dc('TEST')

import * as fs from 'fs';

fs.readFile('../1.json', (err, data) => {
    console.log(data.toString());
})

