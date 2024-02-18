let boxes = document.querySelectorAll(".box") ; 
let reset = document.querySelector(".fa-solid") ;
let newgame = document.querySelector("#newgame") ;
let winner = document.querySelector(".winner") ;
let sideBar = document.querySelector(".sideBar") ;
let p1 = document.querySelector("#p1-score") ;
let p2 = document.querySelector("#p2-score") ;


let p1score = 0 ;
let p2score = 0 ;

const winningPatterns = [
    // Horizontal patterns
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row

    // Vertical patterns
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column

    // Diagonal patterns
    [0, 4, 8], // Top-left to bottom-right diagonal
    [2, 4, 6]  // Top-right to bottom-left diagonal
];

//new-game function after ones turn is complete :--> 
function resetGame(){
    for(let a of boxes){ 
        a.disabled = false ;
        a.innerText = "" ;   
     }
     chance = true ; 
}
newgame.addEventListener("click" , resetGame) ; 

//reset button - reset scores and the 
reset.addEventListener("click",()=>{
    location.reload();
})

//when we are PLAYGROUND_ Buttons 
let chance = true ; 
function checkWinner(){
    for(let pattern of winningPatterns){
      let a = boxes[pattern[0]].innerText ; 
      let b = boxes[pattern[1]].innerText ; 
      let c = boxes[pattern[2]].innerText ; 

      if(a!="" && b!="" && c!=""){
        if(a===b && b===c){ //a=b=c
            console.log("winner" + a );
            //show winner 
            showWinner(a) ;  
         }
      }
    }
}

function showWinner(a){
    winner.innerText = `Winner is = ${a}` ; 

    //disable them boxex
    for(let a of boxes){ 
       a.disabled = true ; 
    }
    //increment the winners score 
    increment(a) ;
}
function increment(a){
    if(a === 'X'){
      p1score++;
      p1.innerText = `PLAYER X - ${p1score}`;
    }
    else if (a === 'O'){
        p2score++ ; 
        p2.innerText = `PLAYER Y - ${p2score}`;
    }
}

//alternate button dabane ka... 
boxes.forEach((node) => {
    node.addEventListener("click", ()=>{ 
        if(chance==true){
            node.innerText = "X" ;
            chance = false ; 
         }else{
             node.innerText = "O" ;
             chance = true ; 
    }
    node.disabled = true ; 
    checkWinner() ; 
    });
});
