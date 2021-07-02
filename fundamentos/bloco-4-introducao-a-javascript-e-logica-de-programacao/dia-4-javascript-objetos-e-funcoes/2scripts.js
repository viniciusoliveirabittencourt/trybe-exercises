function palindromo(string){
    let palavraReve = [];
    let valor = 0;
    let verificaPalindrome;

    for(let j = (string.length - 1); j > -1; j -= 1){
        palavraReve.push(string[j]);
    }
    
    for (let index in string){
        if (string[index] === palavraReve[index]){
            valor += 1;
        }
    }

    if (valor == string.length){
        verificaPalindrome = true;
    } else {
        verificaPalindrome = false;
    }

    for (let second in string){
        if (string[second] == ' '){
            verificaPalindrome = console.log('Pf use apenas palavras');
        }
    }
    
    return verificaPalindrome;
}
console.log(palindromo('puta merda'));

function verificaMaior(arr){
    let maiorNum;
    for(let index = 0; index < arr; index += 1){
        
    }
}