import { random, take, filter } from "./modules/random.js";
import { enumerate } from "./modules/enumerate.js";

const randomInt = random(0, 100);

console.log(randomInt);
console.log(randomInt.next());
console.log(randomInt.next());
console.log(randomInt.next());

console.log("take")
console.log([...take(randomInt, 16)]);

console.log([...take(filter(randomInt, (el) => el > 50), 10)]);

console.log("enumerate")
console.log([...take(enumerate(randomInt), 3)]); 
console.log(new Map(enumerate(take((randomInt), 4)))); 
console.log(new Set(enumerate(take((randomInt), 6)))); 

const s = new Set([3, 4, 5, 6, 7]);
console.log("enumerate 1")
console.log([...take(enumerate(s), 30)]); 

console.log("filter");
const list = [ 66,22,88, 99, 2];
const iter = filter(list, (el) => el > 50);
console.log(iter);
console.log("1:");
console.log(iter.next());
console.log("2:");
console.log(iter.next());
console.log("3:");
console.log(iter.next());
console.log("4:");
console.log(iter.next());
console.log("5:");
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
