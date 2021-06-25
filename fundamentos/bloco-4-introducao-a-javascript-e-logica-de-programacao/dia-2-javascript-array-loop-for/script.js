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

