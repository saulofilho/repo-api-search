//mutação
const usuario = { nome: 'Saulo' };
usuario.nome = 'Filho';
console.log('Usuário:', usuario);

//array
const arr = [1, 3, 4, 5, 8, 9];

//map
//percorrer o vetor, cada item dele, e retornar uma informação, executa uma ação
const newArr = arr.map(function(item, index) {
    return item * index;
});
console.log('Map:', newArr);

//reduce
//consumir todo o vetor e transformar em uma única info, uma única variável
const sum = arr.reduce(function(total, next) {
    return total + next;
});
console.log('Reduce:', sum);

//filter
//pega todos os números que são pares
const filter = arr.filter(function(item) {
    return item % 2 === 0; //retornar apenas itens divisíveis por dois
});
console.log('Filter:', filter);

//find
//verificar se existe tal informação dentro do array ou se consegue encontrar
const find = arr.find(function(item) {
    return item === 4;
});
console.log('Find:', find);