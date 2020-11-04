
 //Managing display vs,draw,win,refresh button
document.getElementById('refresh').style.display = 'none';
 // function for player click
let playerClick=(idClick)=>{
   document.getElementById(idClick).classList.add('chosen');
   disableClick();
   comRandom(idClick);
}
 //disable player click
let disableClick = () => {
   document.querySelectorAll('.player').forEach(i =>{      
      i.classList.remove('img');
    })
   document.querySelectorAll('.player').forEach(j=>{
       j.classList.remove('img-hover');
       j.setAttribute('disabled','disabled')
   })
}
let comRandom = (idClick) =>{
   let arrComputerChoice = ["com-stone","com-scissors","com-paper"];
   let computerChoice = arrComputerChoice[Math.floor(Math.random() *3)]
   document.getElementById(computerChoice).classList.add('chosen');
   matchResult(idClick,computerChoice)
     
   console.log(`Player Choosing ${idClick}`);
   console.log(`Computer choice ${computerChoice}`);
}
let matchResult=(idClick,computerChoice)=>{
    document.getElementById('vs').style.display = 'none';
    let classId;
    if(idClick==="stone"){
        switch(computerChoice){
        case "com-stone" : classId = "draw";
        break;
 
        case "com-scissors" : classId = "player-win"
        break;
 
        case "com-paper" : classId = "com-win"
        break;
        }
    } else if(idClick === "scissors"){
        switch(computerChoice){
        case "com-stone": classId = "com-win"
        break;
 
        case "com-scissors": classId = "draw"
        break;
 
        case "com-paper" : classId = "player-win"
        break;
        }
    } else{
        switch(computerChoice){
        case "com-stone": classId = "player-win"
        break;
 
        case "com-scissors": classId = "com-win"
        break;
 
        case "com-paper" : classId = "draw"
        break;
        }
    }
    document.getElementById(classId).style.display = "block";
    document.getElementById('refresh').style.display = "block";
}
//Reset Game
let reset=()=>{
    document.querySelectorAll(".player").forEach(k=>{
        k.removeAttribute('disabled')
        k.classList.add("img-hover")
    })
    document.getElementById('vs').style.display = 'block';
    document.querySelectorAll("figure").forEach(l => {
        l.classList.remove('chosen');
    })
         
    document.getElementById('com-win').style.display = 'none';
    document.getElementById('player-win').style.display = 'none';
    document.getElementById('draw').style.display = 'none';
    document.getElementById('refresh').style.display = 'none';
}
 