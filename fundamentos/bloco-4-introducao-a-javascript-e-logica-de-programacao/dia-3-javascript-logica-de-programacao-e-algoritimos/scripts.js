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
let valor = 5;
let reciveasteric = "";
let recivespace = "";


for(let index = 0; index < valor; index += 1){
    recivespace += "#";
}
for(let secondIndex = 0; secondIndex < valor; secondIndex += 1){
    reciveasteric += "*";
    console.log(recivespace + reciveasteric);
    recivespace = recivespace - "#";
}