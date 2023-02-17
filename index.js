// dom element 
const formEl = document.getElementById('form');
const scoreEl = document.getElementById('score');
const inputEl = document.getElementById('input');
const questionEl = document.getElementById('question');

// random number 
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

// question sections 
questionEl.innerText = `What is ${num1} multiply by ${num2}`;

// scoreEl  
let score = JSON.parse(localStorage.getItem('score'));
scoreEl.innerText = `Score: ${score}`
if(score === 0){
    scoreEl.style.color = 'red';
}

// formEl event listener 
formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const answer = +inputEl.value;
    const question = num1 * num2;
    if (answer === question) {
        score += 1;
        location.reload();
        updateScore(score);
    }
    else {
        score -= 1;
        updateScore(score);
        location.reload();
    }
    if (score < 0) {
        scoreEl.style.color = 'red';
        score = 0;
        updateScore(score);
        return;
    }
    scoreEl.innerText = `Score: ${score}`
});

const updateScore = (score) => {
    localStorage.setItem('score', score);
}