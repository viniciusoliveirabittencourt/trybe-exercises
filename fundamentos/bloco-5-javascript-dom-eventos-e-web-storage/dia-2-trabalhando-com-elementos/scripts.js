let putHum = document.createElement('h1');
putHum.innerText = 'Exercício 5.2 - JavaScript DOM';

let divMain = document.createElement('div');
divMain.classList.add('main-content');

let divCenter = document.createElement('div');
divCenter.className = 'center-content';

let tagP = document.createElement('p');
tagP.innerText = 'Alguma frase bem interresante aqui, finja pelo menos'

let divLeft = document.createElement('div');
divLeft.className = 'left-content';

let divRight = document.createElement('div');
divRight.className = 'right-content';

let imag = document.createElement('img');
imag.classList.add('small-image');
imag.src = 'https://picsum.photos/200';

let listOl = document.createElement('ol');
for (let index = 1; index < 10; index += 1) {
    let listLi = document.createElement('li');
    listLi.innerText = index;

    listOl.appendChild(listLi);
}

for (let index = 0; index < 3; index += 1) {
    let addHtres = document.createElement('h3');
    addHtres.innerText = 'Esse é o meu h3 3vzs';

    divMain.appendChild(addHtres);
}

console.log(document.querySelector('body').appendChild(putHum));
console.log(document.querySelector('body').appendChild(divMain));
console.log(document.querySelector('.main-content').appendChild(divCenter));
console.log(document.querySelector('.center-content').appendChild(tagP));
console.log(document.querySelector('.main-content').appendChild(divLeft));
console.log(document.querySelector('.main-content').appendChild(divRight));
console.log(document.querySelector('.left-content').appendChild(imag));
console.log(document.querySelector('.right-content').appendChild(listOl));