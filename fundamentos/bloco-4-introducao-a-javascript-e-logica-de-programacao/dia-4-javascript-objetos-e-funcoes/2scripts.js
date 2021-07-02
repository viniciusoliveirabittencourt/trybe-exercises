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

function verificaMaior(arr){
    let maiorNum;
    for (let index = 0; index < arr.length; index += 1){
        for(let i = 0; i <= arr.length; i += 1){
            if (maiorNum > arr[index]){

            }else if (arr[index] > arr[i]){
                maiorNum = arr[index];
            }
        }
    }

    for (let j = 0; j < arr.length; j += 1){
        if (maiorNum === arr[j]){
            maiorNum = j;
        }
    }

    return maiorNum;
}
console.log(verificaMaior([62, 28, 6, 47, 108, 11, 25]));