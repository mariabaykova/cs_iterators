export function enumerate<T> ( iterable: Iterable<T>): IterableIterator<Array<T>> {
    const iter = iterable[Symbol.iterator]();
    let i = 0;
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            let v = iter.next();
            if ( v.done ) {
                return v;
            }
            return {
                value: [ i++, v.value ],
                done: false
            };
        },
    };
}