//arrow functions
//usar em ambiente de função anônima
//callback: passagem de função para outra função

const arr = [1, 3, 4, 5, 6];

//1
const newArr = arr.map((item) => { //function anonima
    return item * 1;
});
console.log('Ex. 1 de arrow function:', newArr);

//2
const newArr2 = arr.map( item => {
    return item * 2;
});
console.log('Ex. 2 de arrow function:', newArr2);

//3
const newArr3 = arr.map( item => item * 3);
console.log('Ex. 3 de arrow function:', newArr3);

//4
const teste = () => {
    return 'teste';
}
console.log(teste());

//5
const retornaObj = () => ({ nome: 'Saulo' });
console.log(retornaObj());