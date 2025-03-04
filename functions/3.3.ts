// #3.3 Generics Recap

type SuperPrint = <T, M>(a: T[], b: M) => T

const superPrint: SuperPrint = (a) => a[0]

const a = superPrint([1, 2, 3, 4], "X")
const b = superPrint([true, false, false], 1)
const c = superPrint(["a", "b", "c"], false)
const d = superPrint([false, 1, 2, "hello"], [])