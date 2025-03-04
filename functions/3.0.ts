// #3.0 Call Signatures

function add(a: number, b: number): number {
    return a + b
}

const add1 = (a: number, b: number) => a + b

type Add = (a: number, b: number) => number

const add2: Add = (a, b) => a + b