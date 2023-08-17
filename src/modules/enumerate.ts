export function enumerate<T> ( iterable: Iterable<T>): IterableIterator<[T,T]> {
        const iter = iterable[Symbol.iterator]();
    let i = 0;
    return <any>{
        [Symbol.iterator]() {
            return this;
        },
        next() {
            let v = iter.next();
            if ( v.done ) {
                return { done: true, value: undefined};
            }
            return {
                value: [ i++, v.value ],
                done: false
            };
        },
    };
}