function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  //Desafio 1 - Adicioinar os dias do mês da array dinamicamente
  function diasDoMes(arr) {
      for (let index = 0; index < arr.length; index += 1) {
        let listLi = document.createElement('li');
        listLi.innerText = arr[index];
        if (arr[index] == 24 || arr[index] == 25 || arr[index] == 31) {
            listLi.className = 'day holiday';
        } else if (arr[index] == 4 || arr[index] == 11 || arr[index] == 18 || arr[index] == 25) {
            listLi.className = 'day friday';
        } else {
            listLi.className = 'day';
        }

        document.getElementById('days').appendChild(listLi);
      }
  }
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  diasDoMes(dezDaysList);

  //Desafio 2 - adicionar via JavaScript um button com determinadas especificações
  function buttonHoliday(string) {
    let creatButon = document.createElement('button');
    creatButon.id = 'btn-holiday';
    creatButon.innerText = string;
    document.querySelector('.buttons-container').appendChild(creatButon);

    //Desafio 3 - criar uma função ao botão que altere a cor doa feriados
    creatButon.addEventListener('click', function(){
        let changeColor = document.querySelectorAll('.holiday');

        for (let index = 0; index < changeColor.length; index += 1) {
            if (changeColor[index].style.color.includes('green')) {
                changeColor[index].style.color = '#777';
            } else {
                changeColor[index].style.color = 'green';
            }
        }
    });
  }
  buttonHoliday("Feriados");

