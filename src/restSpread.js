//operadores rest e spread
//tem que instalar o pacote @babel/plugin-proposal-object-rest-spread

//rest operator
//seve para pegar o resto das propriedades

//1
const usuario = {
    nome: 'Saulo',
    idade: 31,
    empresa: 'Freela'
};
const { nome, ...restoRest } = usuario;
console.log(nome);
console.log(restoRest);

//2: em vetores
const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;
console.log('A:', a);
console.log('B:',b);
console.log('C:',c);

//para parâmetros de funções
function soma(...params) {
    return params.reduce((total, next) => total + next);
}
console.log('Soma:', soma(1, 3, 4));



//spread operator
//propaga as infos, repassa as infos de um objeto ou um array para outra estrutura de dados

//1
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [ ...arr1, ...arr2];
console.log('Spread:', arr3);

//2
const usuario1 = {
    nome: 'Rafaela',
    idade: 31,
    empresa: 'Pétala',
};
const usuario2 = { ...usuario1, nome: 'Jessyca'};
console.log(usuario2);