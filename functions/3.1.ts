// #3.1 Overloading

type Add = {
    (a: number, b: number): number
    (a: number, b: string): number
    (a: number, b: number, c: number): number
}

const add: Add = (a, b, c?: number) => {
    if (typeof b === 'string') return a
    else if (c) return a + b + c
    return a + b
}

type Push = {
    (path: string): void
    (config: Config): void
}

type Config = {
    path: string
    state: Object
}

const push: Push = (config) => {
    if (typeof config === 'string') {
        console.log(config)
    } else {
        console.log(config.path)
    }
}