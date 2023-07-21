import { random, take, filter } from "./modules/random.js";
import { enumerate } from "./modules/enumerate.js";

const randomInt = random(0, 100);

console.log(randomInt);
console.log(randomInt.next());
console.log(randomInt.next());
console.log(randomInt.next());

console.log("take")
console.log([...take(randomInt, 16)]);

console.log([...take(filter(randomInt, (el) => el > 30), 10)]);

console.log("enumerate")
console.log([...take(enumerate(randomInt), 3)]); 

const s = new Set([3, 4, 5, 6, 7]);
console.log("enumerate 1")
console.log([...take(enumerate(s), 30)]); 