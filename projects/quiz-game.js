const questions = [
    {q:"What language is this quiz coded in?", a:"JavaScript"},
    {q:"What does CSS stand for?", a:"Cascading Style Sheets"},
    {q:"What symbol starts a comment in JS?", a:"//"}
];

let score = 0;
let index = 0;

function showQuestion() {
    const qDiv = document.getElementById('quiz');
    if (index >= questions.length) {
        document.getElementById('score').textContent = "Quiz Complete! Score: " + score + "/" + questions.length;
        qDiv.innerHTML = '';
        return;
    }

    qDiv.innerHTML = '';

    const question = document.createElement('p');
    question.textContent = questions[index].q;

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = "Your answer";

    const button = document.createElement('button');
    button.textContent = "Submit";

    button.addEventListener('click', () => {
        if(input.value.trim() === questions[index].a) {
            alert("Correct!");
            score++;
        } else {
            alert("Incorrect!");
        }
        index++;
        showQuestion();
    });

    qDiv.appendChild(question);
    qDiv.appendChild(input);
    qDiv.appendChild(button);

    document.getElementById('score').textContent = "Score: " + score + "/" + questions.length;
}

// Start quiz
showQuestion();
