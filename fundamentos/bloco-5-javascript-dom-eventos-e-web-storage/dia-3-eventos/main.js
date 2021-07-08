const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');
const thirdDiv = document.getElementById('third-div');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const container = document.querySelector('.container');

/*
1.Copie esse arquivo e edite apenas ele;
2.Crie uma função que adicione a classe 'tech' ao elemento selecionado;
2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
3.Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
4.Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
4.1. Que tal redirecionar para seu portifólio?
5.Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

function addTech(event) {
    let containerChildre = container.children;
    for (let index = 0; index < containerChildre.length; index += 1) {
        if (containerChildre[index].className.includes('tech')) {
            containerChildre[index].classList.remove('tech');
        }
    }

    event.target.className = 'tech';
}

function mudaText() {
    document.querySelector('.tech').innerText = input.value;
}

function redPag() {
    window.location.href = 'https://viniciusoliveirabittencourt.github.io/';
}

function changeColor() {
    myWebpage.style.color = '#2fc18c';
}
function resetColor() {
    myWebpage.style.color = 'white';
}

firstDiv.addEventListener('click', addTech);
secondDiv.addEventListener('click', addTech);
thirdDiv.addEventListener('click', addTech);
input.addEventListener('keyup', mudaText);
myWebpage.addEventListener('dblclick', redPag);
myWebpage.addEventListener('mouseover', changeColor);
myWebpage.addEventListener('mouseleave', resetColor);