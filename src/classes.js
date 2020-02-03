//ES6

//Classes, herança
class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }

}

class TodoList extends List {
    //herança
    constructor() {
        super(); //propriedade super chama constructor da classe pai
        this.usuario = 'Saulo';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }

    // constructor() {
    //     this.todos = [];
    // }

    // metodoAddTodo() {
    //     this.todos.push('Novo item');
    //     console.log(this.todos);
    // }
}

const MinhaLista = new TodoList();

document.querySelector('button').onclick = function() {
    MinhaLista.add('Novo');
}

MinhaLista.mostraUsuario();

//método estático = static
//não precisar dar um new na classe pra chamar algum método dela
//ele não enxerga o restante da classe, ele basicamente passa alguma info pra ele
//e ele retorna outra info independente do resto da classe
//no static não tem constructor
class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(1, 2));