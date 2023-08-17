const delta = 0.5;

// Итератор для генерации случайных чисел по заданным параметрам
export function random ( fromNum: number, toNum: number ): IterableIterator<number> {
    return {
            [Symbol.iterator]() {
                return this;
            }, 
            next() {
                return {
                    value: Math.round(fromNum - delta + Math.random() * ( toNum + delta - fromNum )),
                    done: false
                }
            }
    }
}

export function take<T> ( iterable: Iterable<T>, limit: number ): IterableIterator<T> {
    const iter = iterable[Symbol.iterator]();
    let i = 0;
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() { 
            const v = iter.next();

            if ( v.done ) {
                return v;
            }
            let res = v;
            if ( i < limit ) {
                i++;
            } else {
                res = { value: res.value, done: true };
            }

            return res;
        }
    }
}

// ## Необходимо написать функцию filter, которая принимает любой Iterable объект и функцию-предикат. И возвращает итератор по элементам которые удовлетворяют предикату.

export function filter<T> ( iterable: Iterable<T>, f: ( a: T ) => boolean ): IterableIterator<T> {
    const iter = iterable[Symbol.iterator]();
    return {
        [Symbol.iterator]() {
            return this;
        },
        next () {
            // let v = iter.next();
            // console.log("----v-----");
            // console.log(v);
            // console.log(v.value);
            // console.log(v.done);

            while ( true ) {
                let v = iter.next();
                if ( v.done ) {
                    console.log("end of iter");
                    return v;
                }
                if ( !f(v.value) ) {
                    // v = iter.next();
                    console.log("skip " + v.value);
                    continue;
                }
                return v;
                // console.log("skip");
            }
            // return v;
        }
    }
}
