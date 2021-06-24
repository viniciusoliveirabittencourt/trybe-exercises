//programa de adicao ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let a = 5;
let b = 8;
let adicao = a + b;
console.log(adicao);

a = 4;
b = 2;
adicao = a + b;
console.log(adicao);

a = 7;
b = 2;
adicao = b + a;
console.log(adicao);

a = 4;
b = 1;
adicao = a + b;
console.log(adicao);

a = 9;
b = 9;
adicao = b + a;
console.log(adicao);

//programa de subtracao ----------------------------------------------------------------------------------
a = 9;
b = 8;
let sub = a - b;
console.log(sub);

a = 4;
b = 2;
sub = a - b;
console.log(sub);

a = 10;
b = 8;
sub = a - b;
console.log(sub);

a = 4;
b = 13;
sub = b - a;
console.log(sub);

a = 1;
b = 2;
sub = a - b;
console.log(sub);

//programa de multiplicacao *************************************************************************************
a = 10;
b = 5;
let mult = a * b;
console.log(mult);

a = 2;
b = 3;
mult = a * b;
console.log(mult);

a = 1;
b = 6;
mult = a * b;
console.log(mult);

a = 7;
b = 5;
mult = a * b;
console.log(mult);

a = 4;
b = 7;
mult = a * b;
console.log(mult);

//programa de divisão //////////////////////////////////////////////////////////////////////////////////////////////
a = 10;
b = 5;
let divi = a / b;
console.log(divi);

a = 4;
b = 2;
divi = a / b;
console.log(divi);

a = 6;
b = 3;
divi = a / b;
console.log(divi);

a = 12;
b = 6;
divi = a / b;
console.log(divi);

a = 10;
b = 10;
divi = a / b;
console.log(divi);

//programa de modulo %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
a = 42;
b = 2;
let modu = a % b;
console.log(modu);

a = 69;
b = 3;
modu = a % b;
console.log(modu);

a = 47;
b = 5;
modu = a % b;
console.log(modu);

a = 23;
b = 4;
modu = a % b;
console.log(modu);

a = 8;
b = 1;
modu = a % b;
console.log(modu);

//2 atividade - 2 programa ------------------------------------------------------------------------------------------
let doisNum1 = 3;
let doisNum2 = 4;
if(doisNum1 > doisNum2){
    console.log(doisNum1);
}else{
    console.log(doisNum2);
}

//3 atividade - 3 programa -------------------------------------------------------------------------------------------
let tresNum1 = 27;
let tresNum2 = 56;
let tresNum3 = 69;

if(tresNum1 > tresNum2 && tresNum1 >  tresNum3){
    console.log(tresNum1);
}else if(tresNum2 > tresNum1 && tresNum2 > tresNum3){
    console.log(tresNum2);
}else{
    console.log(tresNum3);
}

//4 atividade - 4 programa -------------------------------------------------------------------------------------------
let quatroValor = 0;

if(quatroValor > 0){
    console.log("Valor é positivo");
}else if(quatroValor < 0){
    console.log("Valor é negativo")
}else{
    console.log("Zero");
}

//5 atividade - 5 programa -------------------------------------------------------------------------------------------
let anguloTriangulo1 = 30;
let anguloTriangulo2 = 50;
let anguloTriangulo3 = -80;
let valorTriangulo = anguloTriangulo1 + anguloTriangulo2 + anguloTriangulo3;

if(anguloTriangulo1 <= 0 || anguloTriangulo2 <= 0 || anguloTriangulo3 <= 0){
    console.log("Valores invalidos, pf coloque valores acima de 0")
}else if(valorTriangulo == 180){
    console.log("Seu triangulo é valido");
}else{
    console.log("Seu triangulo n é valido, pf tente dnv!")
}

//6 atividade - 6 programa -------------------------------------------------------------------------------------------
let pecaXadrez = "peao".toLowerCase();
switch(pecaXadrez){
    case "bispo":
        console.log("Diagonais");
        break;
    case "rainha":
        console.log("Diagonais; Verticais; Horizontais");
        break;
    case "torre":
        console.log("Verticais; Horizontais");
        break;
    case "cavalo":
        console.log("Movimentação em L")
        break;
    case "rei":
        console.log("Diagonais; Verticais; Hotizontais; Apenas uma casa");
        break;
    case "peao":
        console.log("Hozitonais; Apenas uma casa");
        break;
}