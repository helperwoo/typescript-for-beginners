type Team = "red" | "blud" | "yellow";
type Health = 1 | 5 | 10;

type User = {
    name: string
}

type Player = User & {
    nickname: string,
    team: Team,
    health: Health,
};

interface Person {
    nickname: string;
    team: Team;
    health: Health;
};

interface Player2 extends Person {
    name: string;
}

const nico: Player | Player2 = {
    name: 'nico',
    nickname: 'nico',
    team: "yellow",
    health: 10,
};