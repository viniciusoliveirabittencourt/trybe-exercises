let putHum = document.createElement('h1');
putHum.innerText = 'Exercício 5.2 - JavaScript DOM';

let divMain = document.createElement('div');
divMain.classList.add('main-content');

let divCenter = document.createElement('div');
divCenter.className = 'center-content';

console.log(document.querySelector('body').appendChild(putHum));
console.log(document.querySelector('body').appendChild(divMain));
console.log(document.querySelector('.main-content').appendChild(divCenter));