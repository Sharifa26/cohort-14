// HAS A(weak relationship) A Relationship where two classes are related by a shared attribute.

//the child class and the parents are coupled loosely
//the child class is independent of its own. It is not dependent upon the parent class.

class player {
    constructor(name) {
        this.name = name;
    }

    displayName() {
        console.log(`Player name is ${this.name}`);
    }
}

class team {
    constructor(name, players) {
        this.name = name;
        this.players = players;
    }
    addPlayer(player) {
        this.players.push(player);
    }
    displayTeam() {
        console.log(`Team name is ${this.name}`);
        console.log(`Team members are :`);
        this.players.forEach(player => player.displayName());
    }
}


let player1 = new player("Rohit");
let player2 = new player("Rahul");
let player3 = new player("Ravi");
let player4 = new player("Raj");

let team1 = new team("team1", [player1, player2, player3, player4]);
team1.addPlayer(player4);

team1.displayTeam();