console.log("This is my TicTacToe game");
let music= new Audio("backgroundMusic.mp3");
let audioTurn= new Audio("clickButton.wav");
let gameOver= new Audio("GameOver.wav");
 let turn= "X";
let isGameOver= false;

//Function to change the turn
 const changeTurn = () =>  {
     return turn=== "X"? "0": "X"
}

//Function to check for win
const checkWin = () => {
    let boxtext= document.getElementsByClassName("boxtext");
    let wins= [
        [0, 1, 2, 2, 5, 0],
        [3, 4, 5, 2, 13, 0],
        [6, 7, 8, 2, 22, 0],
        [0, 3, 6, -7, 13, 90],
        [1, 4, 7, 2, 13, 90],
        [2, 5, 8, 10.5, 13, 90],
        [0, 4, 8, 2, 13, 45],
        [2, 4, 6, 2, 13, 135],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector(".info").innerText= boxtext[e[0]].innerText + " Won"
            isGameOver= true;
            document.querySelector(".imgBox").getElementsByTagName('img')[0].style.width= "200px"; 
            document.querySelector(".line").style.width= "22vw";
            document.querySelector(".line").style.transform= `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

//Logic for game
let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext= element.querySelector(".boxtext");
    element.addEventListener('click', ()=>{
        if(boxtext.innerText=== ''&&!isGameOver){
            boxtext.innerText= turn;
            turn= changeTurn();
            audioTurn.play();
            checkWin();
            if(!isGameOver){
            document.getElementsByClassName("info")[0].innerText= " Turn for " + turn;
            }
        }
    });
});

//Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts= document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=" "
    });
    turn= "X";
    document.querySelector(".line").style.width= "0vw";
    isGameOver= false;
    document.getElementsByClassName("info")[0].innerText= "Turn for"+ turn;
    document.querySelector(".imgBox").getElementsByTagName('img')[0].style.width= "0px";
});