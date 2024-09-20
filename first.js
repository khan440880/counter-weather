let increment = document.querySelector("#increment-btn")
let resetBtn = document.querySelector("#reset-btn")
let countpara = document.querySelector("#count")
let modeBtn = document.querySelector("#mode")
let body=document.querySelector("body");
let count=0;

let cond1=()=>{body.style.background="#E5E5EA",body.style.color="black"}
let cond2=()=>{body.style.background="black",body.style.color="#E5E5EA"}

function increase(){
    count++;
    countpara.innerText=`Count:${count}`;
}
increment.addEventListener("click",increase);

function reset(){
    count=0;
    countpara.innerText=`Count:${count}`;
}
resetBtn.addEventListener("click",reset)

function mode(){
    if(body.style.background==="#E5E5EA",body.style.color==="black"){
        cond2();
    }else{
        cond1();
    }
}
modeBtn.addEventListener("click",mode);