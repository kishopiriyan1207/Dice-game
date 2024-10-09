let score1 = 0;
let score2 = 0;
const winningScore = 20; 



function rollDice() {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

   document.getElementById('kis').textContent=dice1;
   document.getElementById('kish').textContent=dice2;
   let q=document.getElementById('kisho')


   score1+=dice1;
   score2+=dice2;

   document.getElementById('score1').textContent = `Score: ${score1}`;
   document.getElementById('score2').textContent = `Score: ${score2}`;
   
   let text = '';
   if (score1 >= winningScore) {
       text = 'Player 1 Wins!';
       RestGame()
    }
   else if (score2 >= winningScore) {
       text = 'Player 2 Wins!';  
       RestGame()
   } 

   document.getElementById('alert').textContent = text;
}
   
rollDice()

function RestGame(){
    let a=document.getElementById('kp')

    score1=0;
    score2=0;
        
        document.getElementById('kis').textContent = '0';
        document.getElementById('kish').textContent = '0';
        document.getElementById('score1').textContent = `Score: ${score1}`;
        document.getElementById('score2').textContent = `Score: ${score2}`;
         
}
