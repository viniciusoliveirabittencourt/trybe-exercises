//atividade I--------------------------------------------------------------------------------------------------------------------------------
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log('Bem-vinda, '+info.personagem);

info['recorrente']  = 'Sim';
console.log(info);

for (let marg in info){
    console.log(info[marg]);
}

let infoPat = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
  };

infoPat['recorrente']  = 'Sim';

let recorrente = '';
for(let junc in info){
    for(let index in infoPat){
        
    }
    if(info.recorrente == infoPat.recorrente){
        delete info.recorrente;
        delete info.recorrente;
        recorrente = 'Ambos Recorrentes';
    }
    console.log(info[junc]+' e '+infoPat[junc]);
}
console.log(recorrente);