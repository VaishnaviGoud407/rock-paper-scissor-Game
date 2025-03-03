let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice ");
let msg = document.querySelector("#msg");
let userscorepara = document.querySelector("#user-score");
let compscorepara = document.querySelector("#comp-score");

const getcompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randidx = Math.floor(Math.random() * 3);

    return options[randidx];
}
const drawmessage = () => {
    msg.innerText = "Game was Draw.Play again";
    msg.style.backgroundColor = "#01012a";
}
const showWinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        msg.innerText = `You Won. ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        userscore++;
        userscorepara.innerText = userscore;
    }
    else {
        msg.innerText = `You Lose . ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
        compscore++;
        compscorepara.innerText = compscore;
    }
}
const checkwinner = (userchoice) => {
    console.log("your choice", userchoice)
    // generate computer choice -->
    const compchoice = getcompchoice();
    console.log("computer choice is ", compchoice);
    if (userchoice === compchoice) {
        drawmessage();
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {
            // paper, scissors
            userwin = compchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            // rock, scissor
            userwin = compchoice === "rock" ? true : false;
        }
        else {
            // paper, rock
            userwin = compchoice === "paper" ? true : false;
        }
        showWinner(userwin, userchoice, compchoice);
    }
};



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id");
        checkwinner(userchoice);

    })
});