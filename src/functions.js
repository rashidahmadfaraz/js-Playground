// create a function which takes two String (p1 and p2) as arguments and returns a String
// stating the winner (Rock, Paper or Scissors)
//NOTE -  - Game Condtion
// if p1 wins return the string "the winner is P1"
// if p2 wins return the string "the winner is P2"
//if they are the same then return "it's a draw"

function rps (p1, p2){
     if (p1 === p2) return 'its a draw'

else if (p1 === 'Rock' && p2 === 'Scissors') return 'The winner is p1' 
else if (p1 === 'Paper' && p2 === 'Rock') return 'The winner is p2'
else if (p1 === 'scissors' && p2 === 'Paper') return 'The winner is p1'
else return 'The Winner is p2'
}

//console.log(rps ('Rock', 'paper'))


//ANCHOR - ES6 JavaScript built in function.
function rpsTwo (p1, p2){
    let obj = {
        Rock:'Scissors',
        Scissors: 'Paper',
        Paper: 'Rock', 
    }
    return p1 === p2 ? "it's Draw" : obj [1] === p2 ? " The winner is p1" : "The winner is p2"

}
//console.log(rpsTwo ('Rock', 'paper'))


//ANCHOR - JS built in function includes ()
function rpsThree(p1,p2) {
    const wins = ['RockScissors' , 'PaperRock', 'ScissorsPaper']
    
    return p1 === p2 ? "It's a draw" : `The winner is ${wins.includes(p1 + p2) ? 'p1' : 'p2'}`
}
console.log(rpsThree('ScissorsPaper'))