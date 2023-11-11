console.log("hello world")

// You are a landscaper
// you start out with your teeth to make $1/day
// For $5 you can upgrade to rusty scissors to make $5/day
// For $25 you can upgrade to push lawnmower to make $50/day
// For $250 you can upgrade to battery lawnmower to make $100/day
// For $500 you can hire starving students to make $250/day
// To win you need a team of starving students and $1000 -- send message to user they've won

const tools = [
    {name: "teeth", generates: 1, price: 0,},
    {name: "rusty scissors", generates: 5, price: 5},
    {name: "push lawnmower", generates: 50, price: 25},
    {name: "battery lawnmower", generates: 100, price: 250},
    {name: "team of starving students", generates: 250, price: 500}
]

const player = {
    money: 0,
    tool: 0,
    wonGame: false
}

function mowLawn() {
    const tool = tools[player.tool]
    alert(`You mowed a lawn with ${tool.name} and make ${tool.generates} dollars`)
    player.money += tool.generates
}

function upgradeTool() {
    // makes sure there is no other tools to upgrade
    if (player.tool + 1 < tools.length) {
        // upgrades to next tool
        const nextTool = tools[player.tool + 1]    
        // checks to see if we have enough money
        if (nextTool.price <= player.money) {
            // subtracts money and points player.tool to next object
            player.money -= nextTool.price
            player.tool += 1
        } else {
            alert("Not enough money to upgrade")
        }
    } else {
        alert("There are no more tools to upgrade");
    }
}

function winConditions() {
    // checks to make sure player is on the last avaiable tool and $100
    if (player.tool = tools.length-1 && player.money >= 1000){
        alert("You have won the game")
        player.wonGame = true
    }
}


alert("Welcome to The Landscaper Game")
while (!player.wonGame) {
    const response = prompt(`You currently have ${player.money} dollars, do you want to [m]ow lawns or [u]pgrade?`)
    if (response === `m`){
        mowLawn()
    } 

    if (response === 'u'){
        upgradeTool()
    }

    if (response !== 'm' && response !== 'u'){
        alert(`that's not a valid option, type 'm' or 'u'`)
    }

    winConditions();
}