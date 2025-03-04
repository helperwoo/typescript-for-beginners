// #2.4 Types of TS part Three

let a: unknown

if (typeof a === 'number') {
    let b = a + 1
}

if (typeof a === 'string') {
    let b = a.toUpperCase()
}

function hello1() {
    console.log('x')
}

function hello2(): never {
    throw new Error('x');
}

function hello3(name: string | number) {
    if (typeof name === 'string') {
        name
    } else if (typeof name === 'number') {
        name
    } else {
        name
    }
}