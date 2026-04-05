const board=document.querySelectorAll('.cell');
const winnerDisplay=document.getElementById('winner');
const resetBtn=document.getElementById('reset-btn');
let currentPlayer='X';
let gameState=['','','','','','','','',''];
function checkWinner(){const w=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(const p of w){const [a,b,c]=p;if(gameState[a]&&gameState[a]===gameState[b]&&gameState[a]===gameState[c]){winnerDisplay.textContent=`${gameState[a]} wins!`;board.forEach(cell=>cell.removeEventListener('click',handleClick));return true;}}if(!gameState.includes('')){winnerDisplay.textContent="Draw!";return true;}return false;}
function handleClick(e){const i=e.target.dataset.index;if(gameState[i]!=='')return;gameState[i]=currentPlayer;e.target.textContent=currentPlayer;if(!checkWinner())currentPlayer=currentPlayer==='X'?'O':'X';}
board.forEach(cell=>cell.addEventListener('click',handleClick));
resetBtn.addEventListener('click',()=>{gameState=['','','','','','','','',''];board.forEach(cell=>cell.textContent='');winnerDisplay.textContent='';currentPlayer='X';board.forEach(cell=>cell.addEventListener('click',handleClick));});
