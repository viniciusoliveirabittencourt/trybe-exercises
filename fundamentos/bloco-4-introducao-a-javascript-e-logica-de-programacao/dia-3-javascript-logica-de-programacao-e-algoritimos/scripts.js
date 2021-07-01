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

if (valor % 2 === 0){
    console.log('Pf coloque apenas impares');
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