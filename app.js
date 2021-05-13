'use strict';
let papaNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.btn2').addEventListener('click', function () {
    const inputnumber = Number(document.querySelector('.input').value);
    if (!inputnumber) {
        display('No Number');
    }
    else if (inputnumber === papaNumber) {
        display('Correct Number!');
        document.querySelector('body').style.backgroundColor = 'rgb(10, 129, 5)';
        document.querySelector('#box').textContent = papaNumber;
        if (highscore < score) {
            highscore = score;
            document.querySelector('#highscore').textContent = highscore;
        }
    }
    else if (inputnumber !== papaNumber) {
        if (score > 1) {
            display(inputnumber < papaNumber ? 'Too low :(' : 'Too High :(');
            score--;
            document.querySelector('#score').textContent = score;
        } else {
            display('You Lost the Game :/');
            document.querySelector('#score').textContent = 0;
        }
    }
});
document.querySelector('.btn1').addEventListener('click', function () {
    papaNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('#score').textContent = score;
    display('Start guessing...');
    document.querySelector('#box').textContent = '?';
    document.querySelector('.input').value = '';
});

const display = function (message) {
    document.querySelector('#start').textContent = message;
}