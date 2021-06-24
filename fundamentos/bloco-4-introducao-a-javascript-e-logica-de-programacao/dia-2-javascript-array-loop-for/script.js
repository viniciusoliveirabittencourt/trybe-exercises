let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let som = 0;
let result;
for(let impr of numbers){
    console.log(impr);
}

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let som = 0;
for(let index = 0; index < numbers.length; index += 1){
    som += numbers[index];
}
console.log(som);