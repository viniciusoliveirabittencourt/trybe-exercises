document.querySelector('body').style.backgroundColor = '#f3f3f3';

document.querySelector('#header-container').style.backgroundColor = '#65b269';

document.querySelector('.emergency-tasks').style.backgroundColor = '#ee9d83';

let forDesnec = document.querySelectorAll('.emergency-tasks h3');

for (let index = 0; index < forDesnec.length; index += 1){
    forDesnec[index].style.backgroundColor = '#b076f3';
}

document.querySelector('.no-emergency-tasks').style.backgroundColor = '#f9db5e';

let forDesnecDois = document.querySelectorAll('.no-emergency-tasks h3');

for (let index = 0; index < forDesnecDois.length; index += 1){
    forDesnecDois[index].style.backgroundColor = '#232525';
}

