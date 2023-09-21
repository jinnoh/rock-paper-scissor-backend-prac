//have function that calculates random number
//have function that compares and returns a boolean
//parameter is user input

let options = ["Rock", "Paper", "Scissor"]

function computerChoice(){
    let choice = options[Math.floor(Math.random() * 3)];
    return choice;
}

function play(playerChoice){

    compChoice = computerChoice();
    let result;
    if(playerChoice == compChoice){
        return "Draw";
    }
    else if((playerChoice == "Rock" && compChoice == "Scissor") || (playerChoice  == "Paper" && compChoice == "Rock") || (playerChoice == "Scissor" && compChoice == "Paper")){
        return `You are a winner!! ${playerChoice} beats ${compChoice}`;
    }
    else{
        return `You lost so sad hahaaha :( ${compChoice} beats ${playerChoice}`;
    }
}



    let pChoice;
    let playCount = 0;

    const rockBut = document.getElementById("rock");
    const paperBut = document.getElementById("paper");
    const scissorBut = document.getElementById("scissor");

    rockBut.addEventListener("click", function(e){
        pChoice = "Rock";
        playCount++;
        alert(play("Rock"));
    });
    paperBut.addEventListener("click", function(d){
        pChoice = "Paper;";
        playCount++;
        alert(play("Paper"));
    });
    scissorBut.addEventListener("click", function(c){
        pChoice = "Scissor";
        playCount++;
        alert(play("Scissor"));
    });
