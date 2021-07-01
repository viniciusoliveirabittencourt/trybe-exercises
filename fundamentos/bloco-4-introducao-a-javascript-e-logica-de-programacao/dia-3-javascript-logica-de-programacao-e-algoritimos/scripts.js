// Atividade 1 ---------------------------------------------------------------------------------------------------------------------------------
let valor = 5;
let reciveasteric = "";

for(let index = 0; index < valor; index += 1){
    reciveasteric += '*';
}
for(let secondIndex = 0; secondIndex < valor; secondIndex += 1){
    console.log(reciveasteric);
}

//Atividade 2 -----------------------------------------------------------------------------------------------------------------------------------
let valor = 5;
let reciveasteric = "";

for(let index = 0; index < valor; index += 1){
    reciveasteric += '*';
    console.log(reciveasteric);
}

//Atividade 3 -----------------------------------------------------------------------------------------------------------------------------------
let valor = 10;
let reciveasteric = "";
let recivespace = "";


for(let index = 0; index < valor; index += 1){
    recivespace += " ";
}

for(let secondIndex = 0; secondIndex < valor; secondIndex += 1){
    reciveasteric += "*";
    recivespace = recivespace.slice(0, -1);
    console.log(recivespace + reciveasteric);
}

//Atividade 4 ----------------------------------------------------------------------------------------------------------------------------------
let valor = 25;
let reciveasteric = '*';
let recivespace = '';

if (valor % 2 === 0 && valor <= 1){
    console.log('Pf coloque apenas impares ou valores a cima de 1');
} else {
    for(let index = 0; index < (valor / 2); index += 1){
        recivespace += ' '
    }
    for(let secondIndex = 0; secondIndex < valor; secondIndex += 2){
        recivespace = recivespace.slice(0, -1);
        console.log(recivespace + reciveasteric);
        reciveasteric += "**";
    }
}

//Atividade 5 - Bônus ---------------------------------------------------------------------------------------------------------------------------
let valor = 7;
let reciveAsteric = '*';
let reciveSpace = '';
let reciveSpaceInt = ' ';

if (valor % 2 === 0 && valor <= 1){
    console.log('Pf coloque apenas impares ou valores a cima de 1');
} else {
    for(let index = 0; index < (valor / 2); index += 1){
        reciveSpace += ' '
    }
    console.log(reciveSpace + reciveAsteric)
    for(let secondIndex = 0; secondIndex < (valor - 3); secondIndex += 2){
        reciveSpace = reciveSpace.slice(0, -1);
        console.log(reciveSpace +'*'+reciveSpaceInt+'*');
        reciveSpaceInt += '  ';
        reciveAsteric += "**";
    }
    console.log(reciveSpace.slice(0, -1) + (reciveAsteric += '**'));
}

//Atividade 6 - Bônus ------------------------------------------------------------------------------------------------------------------------------
let numPrim = 45;
let quantDeDivi = 0;

if(numPrim <= 0){
    console.log('Apenas valores a cima de 0 podem ser primos');
} else {
    for (let index = 1; index <= numPrim; index += 1){
        if (numPrim % index === 0){
            quantDeDivi += 1;
        }
    }
    if(quantDeDivi === 2){
        console.log('É um numero primo');
    } else {
        console.log('Esse numero n é primo');
    }
}