function palindromo(string){
    let stringArr = [];
    let palavraReve = [];
    for(let index = 0; index < string.length; index += 1){
        stringArr.push(string[index]);
    }
    for(let j = (string.length - 1); j > -1; j -= 1){
        palavraReve.push(string[j]);
    }
    console.log(palavraReve)
}
palindromo('paralelepipedo');