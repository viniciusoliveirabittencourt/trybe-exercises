function palindromo(string){
    let stringArr = [];
    let palavraReve = [];
    let verificaPalindrome;

    for(let index = 0; index < string.length; index += 1){
        stringArr.push(string[index]);
    }
    for(let j = (string.length - 1); j > -1; j -= 1){
        palavraReve.push(string[j]);
    }

    for (var i = 0, len = stringArr.length; i < len; i++){
        if(string[i] == ' '){
            console.log('Pf, apenas use palavras');
        }else if(stringArr[i] == palavraReve[i]){
            verificaPalindrome = true;
        }else{
            verificaPalindrome = false;
        }
    }
    return verificaPalindrome;
}
function verificaMaior(arr){
    let maiorNum;
    for(let index = 0; index < arr; index += 1){
        
    }
}