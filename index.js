class Game{
    constructor(){
        this.currentPlayer="X";
        this.board=new Array(9).fill(null);
    }

    //add methods to fill box, to check winning condition, to end game on win / draw, to change player after others turn and restrat game

    boxClicked(e){
        const id=e.target.id;
        if(!this.board[id]){
            this.board[id]=this.currentPlayer;
            e.target.innerText=this.currentPlayer;
            if(this.isWinning()){
                this.endGame("Win");
                return;
            }
            else if(!this.board.some((item)=> item===null)){
                this.endGame("Draw");
                return;
            }
            this.changePlayer();
        }   
     }

     changePlayer(){
         this.currentPlayer=this.currentPlayer==="X"?"O":"X";
     }

     endGame(result){
         text.innerText=result==="Draw"?"Draw":this.currentPlayer + " wins !";
         boxes.forEach((box)=>box.removeEventListener("click",makeMove));
     }
     isWinning(){
        if(this.currentPlayer==this.board[0] && this.board[0] ==this.board[1] && this.board[1]==this.board[2]){
              return true;
        }
        if(this.currentPlayer==this.board[3] && this.board[3] ==this.board[4] && this.board[4]==this.board[5]){
            return true;
        }
        if(this.currentPlayer==this.board[6] && this.board[6] ==this.board[7] && this.board[7]==this.board[8]){
            return true;
        }
        if(this.currentPlayer==this.board[0] && this.board[0] ==this.board[3] && this.board[3]==this.board[6]){
            return true;
            }
        if(this.currentPlayer==this.board[1] && this.board[1] ==this.board[4] && this.board[4]==this.board[7]){
            return true;
            }
        if(this.currentPlayer==this.board[2] && this.board[2] ==this.board[5] && this.board[5]==this.board[8]){
            return true;
            }
        if(this.currentPlayer==this.board[0] && this.board[0] ==this.board[4] && this.board[4]==this.board[8]){
                return true;
                }
        if(this.currentPlayer==this.board[2] && this.board[2] ==this.board[4] && this.board[4]==this.board[6]){
                return true;
            }
        return false;
     }

     restartGame(){
         this.currentPlayer="X";
         this.board.fill(null);
         boxes.forEach((box)=>box.innerText="");
         text.innerText="Lets Play Game";
         boxes.forEach((box)=>box.addEventListener('click',makeMove));
     }

}

const game=new Game();

function restartGame(){
game.restartGame();
}

function makeMove(e){
    game.boxClicked(e);
}

const restart=document.getElementById("restart");
restart.addEventListener('click',restartGame);

const boxes=document.querySelectorAll('.box');
boxes.forEach((box)=> box.addEventListener('click',makeMove))
