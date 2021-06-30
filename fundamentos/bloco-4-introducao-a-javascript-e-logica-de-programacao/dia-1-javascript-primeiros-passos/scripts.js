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
b = 9;
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

//7 atividade - 7 programa -------------------------------------------------------------------------------------------
let notaAluno = -42;

if(notaAluno > 100){
    console.log("Sua nota é invalida");
}else if(notaAluno < 0){
    console.log("Sua nota é invalida");
}else if(notaAluno >= 90){
    console.log("A");
}else if(notaAluno >= 80){
    console.log("B");
}else if(notaAluno >=  70){
    console.log("C");
}else if(notaAluno >= 60){
    console.log("D");
}else if(notaAluno >= 50){
    console.log("E");
}else if(notaAluno < 50){
    console.log("F");
}

//8 atividade - 8 programa -------------------------------------------------------------------------------------------
let ifPar = 9;
let ifPar2 = 5;
let ifPar3 = 529;

if(ifPar % 2 == 0 ||ifPar2 % 2 == 0 ||ifPar3 % 2 == 0){
    console.log(true);
}else{
    console.log(false);
}

//9 atividade - 9 programa -------------------------------------------------------------------------------------------
ifPar = 9;
ifPar2 = 8;
ifPar3 = 524;

if(ifPar % 2 == 1 ||ifPar2 % 2 == 1 ||ifPar3 % 2 == 1){
    console.log(true);
}else{
    console.log(false);
}

//10 atividade - 10 programa -------------------------------------------------------------------------------------------
let valorCusto = 500;
let valorVenda  = 100;
let valorImposto = (valorCusto * 20) / 100;
let valorCustoTotal = valorCusto + valorImposto;
let lucro = valorVenda - valorCustoTotal;

if(valorCusto <= 0 || valorVenda <= 0){
    console.log("Erro, valores igual a 0, coloque valores reais e tente novamente")
}else if(lucro <= 0){
    console.log("Vc está no prejuizo");
}else{
    console.log(lucro);
}

//11 atividade - 11 programa -------------------------------------------------------------------------------------------
let salarioTrabalhador = 3000.00;
let porcentagemInss;
let salarioInss;
let porcentagemIr;
let salarioFinal;

if(salarioTrabalhador <= 0){
    console.log("Vá trabalhar seu caba");
}else if(salarioTrabalhador <= 1556.94){
    porcentagemInss = (salarioTrabalhador * 8) / 100;
    salarioInss = salarioTrabalhador - porcentagemInss;
}else if(salarioTrabalhador <= 2594.92){
    porcentagemInss = (salarioTrabalhador * 9) / 100;
    salarioInss = salarioTrabalhador - porcentagemInss;
}else if(salarioTrabalhador <= 5189.82){
    porcentagemInss = (salarioTrabalhador * 11) / 100;
    salarioInss = salarioTrabalhador - porcentagemInss;
}else{
    salarioInss = salarioTrabalhador - 570.88;
}

if(salarioInss <= 1903.98){
    salarioFinal = salarioInss;
}else if(salarioInss <= 2826.65){
    porcentagemIr = ((salarioInss * 7.5) / 100) - 142.80;
    salarioFinal = salarioInss - porcentagemIr;
    console.log(salarioFinal);
}else if(salarioInss <= 3751.05){
    porcentagemIr = ((salarioInss * 15) / 100) - 354.80;
    salarioFinal = salarioInss - porcentagemIr;
    console.log(salarioFinal);
}else if(salarioInss <= 4664.68){
    porcentagemIr = ((salarioInss * 22.5) / 100) - 636.13;
    salarioFinal = salarioInss - porcentagemIr;
    console.log(salarioFinal);
}else{
    porcentagemIr = ((salarioInss * 27.5) / 100) - 869.36;
    salarioFinal = salarioInss - porcentagemIr;
    console.log(salarioFinal);
}