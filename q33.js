// 33.  Write a deep clone function to create a copy of a nested object or array without any reference to the original.

let original = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4]
    },
    e: [5, 6],
    f: null,
    g: undefined
};


function deepClone(obj) {
    if (typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(deepClone);
    }

    const clone = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}




let clone = deepClone(original);

console.log(clone);

clone.b.c = 10;
clone.e.push(7);

console.log(original);
console.log(clone);
