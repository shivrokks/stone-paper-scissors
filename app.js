let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const compWinCount=document.querySelector("#comp-score");
const userWinCount=document.querySelector("#user-score");

const drawGame=()=>{
    msg.innerText="Game is draw. Play Again !!!";
    msg.style.backgroundColor="blue";
}

const genCompChoice = () => {
    const options=["rock","paper","scissors"];
    let rndmGenChoice=Math.floor(Math.random()*3);
    return options[rndmGenChoice];
}

const showWinner =(userWin)=>{

    if(userWin){
        msg.innerText="You win";
        msg.style.backgroundColor="green";
        userScore++;
        userWinCount.innerText=userScore;
    } else{
        msg.innerText="You loss";
        msg.style.backgroundColor="red";
        compScore++;
        compWinCount.innerText=compScore;
    }
}

const playGame = (userChoice) =>{
    //console.log("User choice is ",userChoice);
    const compChoice=genCompChoice();
    //console.log("Computer choice",compChoice);

    if(userChoice===compChoice){
        drawGame();
    } else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper" ? false:true;
        } else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        } else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        //console.log("Choice was clicked",choiceId);
        playGame(userChoice);
    });
});