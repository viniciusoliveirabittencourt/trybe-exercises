//atividade 1 ---------------------------------------------------------------------------------------------------
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let som = 0;
let result;
for(let impr of numbers){
    console.log(impr);
}

//atividade 2 --------------------------------------------------------------------------------------------------
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let som = 0;
for(let index = 0; index < numbers.length; index += 1){
    som += numbers[index];
}
console.log(som);

//atividade 3 e 4 -----------------------------------------------------------------------------------------------
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let som = 0;
for(let index = 0; index < numbers.length; index += 1){
    som += numbers[index];
}
let result = som / numbers.length;
console.log(result);

if(result > 20){
    console.log("Valor maior que 20");
}else{
    console.log("Valor igual ou menor que 20");
}

//atividade 5 -------------------------------------------------------------------------------------------------------
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numMaior = 0;

for (let index = 0; index < numbers.length; index += 1){
    if(numMaior < numbers[index]){
        numMaior = numbers[index];
    }
}
console.log(numMaior);

//ativviddade 6 ------------------------------------------------------------------------------------------------------
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valorImpar = [];

for (let index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2 == 1){
        valorImpar.push(numbers[index]);
    }else{
        console.log("Nenhum valor ímpar encontrado")
    }
}
console.log(valorImpar);

//atividade 7 ---------------------------------------------------------------------------------------------------------
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numMaior = 0;

for (let index = 0; index < numbers.length; index += 1){
    if(numMaior < numbers[index]){
        numMaior = numbers[index];
    }
}

let numMenor = numMaior;

for (let index = 0; index < numbers.length; index += 1){
    if(numMenor > numbers[index]){
        numMenor = numbers[index];
    }
}
console.log(numMenor);

//atividade 8 ---------------------------------------------------------------------------------------------------------
let vini = [];
let viniNum = 0;

for (let index = 0; index < 25; index += 1){
    vini.push(viniNum += 1);
}
console.log(vini);

//atividade 9 ---------------------------------------------------------------------------------------------------------
let vini = [];
let viniNum = 0;

for (let index = 0; index < 25; index += 1){
    vini.push(viniNum += 1);
}

for(let viniDiv of vini){
    viniDiv = viniDiv / 2;
    console.log(viniDiv);
}

console.log(vini);

//atividade bonus ---------------------------------------------------------------------------------------------------------
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
  console.log(numbers);

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  let newNumbers = [];

  for (let index = 1; index < numbers.length; index += 1) {   
      for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] == numbers[secondIndex + 1]) {
            newNumbers.push(numbers[index] * numbers[secondIndex]);
        }
      }
    }
    newNumbers.push(numbers[numbers.length - 1] * 2);
    console.log(newNumbers);