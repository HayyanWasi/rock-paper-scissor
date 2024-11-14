let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");
const msgCon = document.querySelector(".msg-container") ;
let userScorepara = document.querySelector("#user-score");
let compScorepara = document.querySelector("#comp-score");

//comp Choice
const genCompChoice = () => {
    const options = ['rock', 'paper','scissor'];
    const randIdx =  Math.floor(Math.random() * 3);
    return options[randIdx]

}
const showWinner = (userWin)=>{
    if (userWin){
        userScore++
        userScorepara.innerText = userScore;
        console.log(`you win and your point is ${userScore}`);

        // console.log("You win");
        msg.innerText = "you win"
        msg.style.backgroundColor = "green";
        msgCon.style.backgroundColor = "green";
    }
    else{
        compScore++
        // console.log(compScore);
        compScorepara.innerText = compScore;
        console.log(`you lose and comp point is ${compScore}`);
        msg.innerText = "you lose"
        msg.style.backgroundColor = "red";
        msgCon.style.backgroundColor = "red";
        
    }
}
const playGame = (userChoice)=>{
    console.log('user choice = ', userChoice);
    //gen comp choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);
     
    if(userChoice === compChoice ){
       drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock")
              userWin = compChoice ==="paper" ? false : true;
        else if(userChoice === 'paper'){
               userWin = compChoice === "scissor"? false : true;
    }
    else{
        userWin = userChoice === "rock" ? false : true;
    }
      showWinner(userWin,compChoice,userChoice);
}
};
const drawGame = ()=>{
    msg.innerText = "Game draw , Try Again"
    msgCon.style.backgroundColor = 'black';
    msg.style.backgroundColor = 'black'
    console.log("game draw try again");
}
//user choice
choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
    const UserChoice = choice.getAttribute("id")
    playGame(UserChoice);
  }) ;
});








