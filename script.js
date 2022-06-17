let reset=document.querySelector('.reset');
let penezi=document.querySelector('#dol');
reset.setAttribute('disabled','disabled');
reset.style="background-color:hsl(186, 14%, 43%);";

reset.addEventListener("click",()=>{
    penezi.value=0;
    ljudi.value=0;
    tip.innerText="$0.00";
    total.innerText="$0.00";
    for(let i=0;i<5;i++){
        gumb[i].style+="background-color: hsl(183, 100%, 15%); color: white;";
    }
});

penezi.addEventListener("change",()=>{
    if(penezi.value>0){
        reset.removeAttribute('disabled');
        reset.style="background-color:hsl(172, 67%, 45%);";
        
    }
    else{
        reset.setAttribute('disabled','disabled');
        reset.style="background-color:hsl(186, 14%, 43%);";
    }
});

let ljudi=document.querySelector('#ljudi');
let warning=document.querySelector('.zero');

ljudi.addEventListener("input",()=>{
    if(parseInt(ljudi.value)===0){
        
        warning.innerText="Can't be zero";
        warning.style="margin-left:5%";
        ljudi.style="border: 2px solid red;text-align:right;font-size: 24px;";
    }
    else{
        warning.innerText="";
        ljudi.style-="border: 2px solid red;";
        ljudi.style+="border:2px solid hsl(172, 67%, 45%);text-align:right;font-size: 24px;";
    }
});

let gumb=document.querySelectorAll(".levo button");
let oznaceni=0;
let tip=document.querySelector(".nula");
let total=document.querySelector(".nula1");

gumb.forEach(gumb1=>{
    gumb1.addEventListener("click",()=>{
        for(let i=0;i<5;i++){
            gumb[i].style+="background-color: hsl(183, 100%, 15%); color: white;";
        }
        gumb1.style="background-color:hsl(172, 67%, 45%);color: hsl(183, 100%, 15%);";

        let post=gumb1.innerText;
        
        oznaceni=parseFloat(post.substring(0,post.indexOf("%")))/100;

        let zbrojTip=oznaceni/(parseFloat(ljudi.value))*(parseFloat(penezi.value));
        tip.innerText="$"+zbrojTip.toFixed(2).toString();

        let zbrojTotal=(parseFloat(penezi.value))/(parseFloat(ljudi.value))+zbrojTip;
        total.innerText="$"+zbrojTotal.toFixed(2).toString();
    });
});