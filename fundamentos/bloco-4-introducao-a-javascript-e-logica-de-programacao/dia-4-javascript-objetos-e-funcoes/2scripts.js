function revertPalavra(string){
    let palavraReve = [];

    for(let j = (string.length - 1); j > -1; j -= 1){
        palavraReve.push(string[j]);
    }
    return palavraReve;
}

/* Desafio 1*/ function palindromo(string){
    let valor = 0;
    let verificaPalindrome;

    for (let index in string){
        if (string[index] === revertPalavra(string)[index]){
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
            verificaPalindrome = 'Pf use apenas palavras';
        }
    }
    
    return verificaPalindrome;
}

function salvaMaiorValorArr(arr){
    let maiorNum;
    
    for (let index = 0; index < arr.length; index += 1){
        for(let i = 0; i <= arr.length; i += 1){
            if (maiorNum > arr[index]){

            }else if (arr[index] > arr[i]){
                maiorNum = arr[index];
            }
        }
    }

    return maiorNum;
}

/*Desafio 2*/ function exibeMaiorIndice(arr){

    let exibirMaiorArr;

    for (let j = 0; j < arr.length; j += 1){
        if (salvaMaiorValorArr(arr) === arr[j]){
            exibirMaiorArr = j;
        }
    }

    return exibirMaiorArr;
}

function salvaMenorValorArr(arr){
    let menorNum;
    
    for (let index = 0; index < arr.length; index += 1){
        for(let i = 0; i <= arr.length; i += 1){
            if (menorNum < arr[index]){

            }else if (arr[index] < arr[i]){
                menorNum = arr[index];
            }
        }
    }

    return menorNum;
}

/*Desafio 3 */function exibeMenorIndice(arr){

    let exibirMenorArr;

    for (let j = 0; j < arr.length; j += 1){
        if (salvaMenorValorArr(arr) === arr[j]){
            exibirMenorArr = j;
        }
    }

    return exibirMenorArr;
}

/*Desafio 4*/function returnLongestName(arr){
    let arrWithNamesLenght = [];

    for (let index = 0; index < arr.length; index += 1){
        arrWithNamesLenght.push(arr[index].length);
    }

    return arr[exibeMaiorIndice(arrWithNamesLenght)];
}

/*Desafio 5*/function returnMoreNumber(arr){
    
}
