const paragraph = document.querySelector("#paragraph");
paragraph.style.color = "red";

document.querySelector('#page-title').innerText = 'Poderoso Chefão';

document.querySelector('#second-paragraph').innerText = 'Esse segundo paragrafo tava muito chato';
document.querySelector('#second-paragraph').style.color = 'blue';
document.querySelector('#second-paragraph').style.fontSize = '29px';

console.log(document.querySelectorAll('.paragrafo'));
document.querySelectorAll('.paragrafo')[0].style.color = 'purple';

document.querySelector('h4').style.color = 'orange';