//promise
//jeitos de realizar acoes de forma async
//utilizadas para fazer requisicoes a api, endpoins, servidor backend

//promise
const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ok')
    }, 2000)
});

minhaPromise().then(response => {
    console.log('Resposta:', response);
})
.catch(err => {
    
});

//async await
const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ok')
    }, 2000)
});

async function executaPromise() {
    const response = await minhaPromise();

    console.log(response);
}

executaPromise();

//async await arrow function
const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ok')
    }, 2000)
});

const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
};

executaPromise();