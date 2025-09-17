let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset")
let newgame=document.querySelector("#new_btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true; //player X,player O

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,8],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame=()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
      
        if(turn0)
        {
            box.innerText="0";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;

        checkwinner();
    });
});

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showwinner=(winnner)=>{
    msg.innerText=`Congratulations,Winner is ${winnner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};


const checkwinner=()=>{
    for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!= "" && pos2val !="" && pos3val!="")
        {
                if(pos1val===pos2val && pos1val===pos3val)
                {
                       
                        showwinner(pos1val);
                }
        }
   }
 };

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
 