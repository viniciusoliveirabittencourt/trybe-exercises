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
    let verifiArr = [];

    for (let index = 0; index < arr.length; index += 1){
        let numComp = 0;

        for(let secondIndex = 0; secondIndex < arr.length; secondIndex += 1){
            if (arr[index] === arr[secondIndex]){
                numComp += 1;
            }
        }
        verifiArr.push(numComp);
    }
    return arr[exibeMaiorIndice(verifiArr)];
}

/*Desafio 6*/function somaArray(N){
    let resultSom = 0;

    for (let index = 0; index <= N; index += 1){
        resultSom = resultSom + index;
    }

   return resultSom;
}
 /*Desafio 7*/function confereEnd(str1, str2){
     let verifiIgual = 0;

     for (let index in str2){
        if (revertPalavra(str1)[index] === revertPalavra(str2)[index]){
            verifiIgual += 1;
        }
    }

    if (verifiIgual === str2.length){
        verifiIgual = true;
    } else {
        verifiIgual = false;
    }

    return verifiIgual;
 }

 /*Desafio Bônus 1*/function algarismRoman(str){

    let recebRomanTrans = [];

     for (let index = 0; index < str.length; index += 1){
        switch(str[index]){
            case 'I':
                recebRomanTrans.push(1);
                break;
            case 'V':
                recebRomanTrans.push(5);
                break;
            case 'X':
                recebRomanTrans.push(10);
                break;
            case 'L':
                recebRomanTrans.push(50);
                break;
            case 'C':
                recebRomanTrans.push(100);
                break;
            case 'D':
                recebRomanTrans.push(500);
                break;
            case 'M':
                recebRomanTrans.push(1000);
                break;
        }
     }

    console.log(recebRomanTrans);
     let numRomNorm = recebRomanTrans[0];

     for (let secondIndex = 0; secondIndex < recebRomanTrans.length; secondIndex += 1){
        if (recebRomanTrans[secondIndex] == recebRomanTrans[secondIndex - 1]){
            numRomNorm = numRomNorm + recebRomanTrans[secondIndex];
        } else if (recebRomanTrans[secondIndex] > recebRomanTrans[secondIndex - 1]){
            numRomNorm = numRomNorm - recebRomanTrans[secondIndex];
        } else if (recebRomanTrans[secondIndex] < recebRomanTrans[secondIndex - 1]){
            numRomNorm = numRomNorm + recebRomanTrans[secondIndex];
        }
     }
     
     if (numRomNorm <= 0){
         numRomNorm = numRomNorm * -1;
     }

     return numRomNorm;

 }
