// #2.2 Types of TS part One

type Name = string
type Age = number
type Player = {
    name: Name,
    age?: Age
}

const nico: Player = {
    name: "nico"
}

const lynn: Player = {
    name: "lynn",
    age: 12
}

function playerMaker(name: string): Player {
    return {
        name
    }
}
const player = playerMaker("player")