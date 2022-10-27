export const marvel = (hero) => {
    console.log(`Hello, ${hero}!`);
  }

export class ABC {
  
}
  
export const dc = (hero) => {
  console.log(`Bye, ${hero}!`);
}

const definedAbove = () => console.log('definedAbove');

export {definedAbove};

const defaultFunc = () => 'Im Default';

export default defaultFunc;

// export {marvel, dc};