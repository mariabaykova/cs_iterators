const delta = 0.5;
// Итератор для генерации случайных чисел по заданным параметрам
export function random(fromNum, toNum) {
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            return {
                value: Math.round(fromNum - delta + Math.random() * (toNum + delta - fromNum)),
                done: false
            };
        }
    };
}
export function take(iterable, limit) {
    const iter = iterable[Symbol.iterator]();
    let i = 0;
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            const v = iter.next();
            if (v.done) {
                return v;
            }
            let res = v;
            if (i < limit) {
                i++;
            }
            else {
                res = { value: res.value, done: true };
            }
            return res;
        }
    };
}
// ## Необходимо написать функцию filter, которая принимает любой Iterable объект и функцию-предикат. И возвращает итератор по элементам которые удовлетворяют предикату.
export function filter(iterable, f) {
    const iter = iterable[Symbol.iterator]();
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            let v = iter.next();
            console.log("----v-----");
            console.log(v);
            while (!f(v.value)) {
                console.log("skip");
                v = iter.next();
            }
            return v;
        }
    };
}
