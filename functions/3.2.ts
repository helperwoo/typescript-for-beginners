// #3.2 Polymorphism

type SuperPrint = {
    (arr: number[]): void
    (arr: boolean[]): void
    (arr: string[]): void
    (arr: (number | string)[]): void
}

const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}

superPrint([1, 2, 3, 4])
superPrint([true, false, false])
superPrint(["a", "b", "c"])

// Generic

type SuperPrint1 = {
    <T>(arr: T[]): T
}

const superPrint1: SuperPrint1 = (arr) => arr[0]

const a = superPrint1([1, 2, 3, 4])
const b = superPrint1([true, false, false])
const c = superPrint1(["a", "b", "c"])
const d = superPrint1([false, 1, 2, "hello"])