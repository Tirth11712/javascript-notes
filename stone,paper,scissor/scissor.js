let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
   
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
};

const drawgame=()=>{
    msg.innertext="game was draw , play again!!";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userwin, userChoice, compchoice)=>{
        if(userwin)
        {
            userscore++;
            userscorepara.innertext = userscore;
            msg.innertext=`you win ! your ${userChoice} beats ${compchoice}`;
            msg.style.backgroundColor = "green";
        }else{
            compscore++;
            compscorepara.innertext=compscore;
            msg.innertext=`you win ! ${compchoice} beats your ${userChoice}`;
            msg.style.backgroundColor = "red ";
        }
};


const playgame = (userChoice) => {
    //generate computer choice
    const compchoice=gencompchoice();
   

    if(userChoice === compchoice)
    {
        //draw game
        drawgame();
    }else{
        let userwin=true;
        if(userChoice  === "rock")
        {
            //scissor,paper
            userwin=compchoice=== "paper" ? false : true;
        }else if(userChoice=== "paper")
        {
            //rock,scissors
            userwin=compchoice=== "scissors" ? false : true;
        }else{
            //rock,paper
            userwin=compchoice=== "rock" ? false : true;
        }
        showWinner(userwin,userChoice,compchoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    });
});
