const cells = document.querySelectorAll('.cell');
const status = document.getElementById('status');
let board = Array(9).fill('');
let turn = 'X';

function checkWinner() {
    const winCombos = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    for(let combo of winCombos){
        const [a,b,c] = combo;
        if(board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
    }
    return board.includes('') ? null : 'Draw';
}

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        const idx = cell.dataset.index;
        if(board[idx] === '' && !checkWinner()){
            board[idx] = turn;
            cell.textContent = turn;
            const winner = checkWinner();
            if(winner){
                status.textContent = winner === 'Draw' ? 'Game Draw!' : turn + ' Wins!';
            } else {
                turn = turn === 'X' ? 'O' : 'X';
                status.textContent = "Turn: " + turn;
            }
        }
    });
});
