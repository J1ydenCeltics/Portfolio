const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

function openModal(title, isCalc=false, isTic=false, isPass=false, isQuiz=false, isSheet=false, isProfile=false){
    modalTitle.innerText = title;
    modalBody.innerHTML = '';

    // Calculator Logic
    if(isCalc){
        const input = document.createElement('input'); 
        input.type='text'; input.id='calcInput'; input.placeholder='0';
        const keys=['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+'];
        const container = document.createElement('div'); container.className='calculator';
        container.appendChild(input);
        keys.forEach(k=>{
            const btn=document.createElement('button');
            btn.innerText=k;
            btn.onclick=()=>{ if(k==='='){ try{ input.value=eval(input.value); }catch(e){ input.value='Error';} }else{ input.value+=k; } };
            container.appendChild(btn);
        });
        modalBody.appendChild(container);
    }

    // Tic-Tac-Toe Logic
    if(isTic){
        const board=document.createElement('div'); board.className='tic-tac-toe';
        let turn='X';
        for(let i=0;i<9;i++){
            let btn=document.createElement('button');
            btn.onclick=function(){ if(btn.innerText==''){btn.innerText=turn; turn=turn==='X'?'O':'X'; }};
            board.appendChild(btn);
        }
        modalBody.appendChild(board);
    }

    // Password Generator Logic
    if(isPass){
        const btn=document.createElement('button'); btn.innerText='Generate Password';
        const output=document.createElement('p'); output.style.marginTop='15px';
        btn.onclick=()=>{ 
            const chars='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()'; 
            let pw=''; 
            for(let i=0;i<12;i++){ pw+=chars[Math.floor(Math.random()*chars.length)]; } 
            output.innerText=pw; 
        }
        modalBody.appendChild(btn); modalBody.appendChild(output);
    }

    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}
