//valores padrão
const soma = (a = 3, b = 6) => a + b;
console.log(soma(1));
console.log(soma());

//desestruturação
const usuario = {
    nome: 'Saulo',
    idade: 31,
    endereco: {
        cidade: 'Floripa',
        estado: 'SC',
    },
};

//1
const { nome, idade, endereco: { cidade } } = usuario;
console.log(nome);
console.log(cidade);

//2
function mostraNome({ endereco: { estado } }) {
    console.log(estado);
}
mostraNome(usuario);