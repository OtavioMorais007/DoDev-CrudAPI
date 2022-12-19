class Carro{
    Marca: string
    Modelo: string
    Categoria: string
    Ano: number
    Km: number
    Valor: number

    constructor(marca: string, modelo: string, categoria: string, ano: number, km: number, valor: number){
        this.Marca = marca
        this.Modelo = modelo
        this.Categoria = categoria
        this.Ano = ano
        this.Km = km
        this.Valor = valor
    }
}

async function Get(){
    const response = await fetch('https://apigenerator.dronahq.com/api/xNNjpD_t/APICarros')
    const data = await response.json()
    return console.log(data)
}

function GetElementById(id: number){
    fetch(`https://apigenerator.dronahq.com/api/xNNjpD_t/APICarros/${id}`)
    .then((response) => response.json())
    .then((data) => {
        if(data.id == id){
            const Marca = data.Marca
            const Modelo = data.Modelo
            const Ano = data.Ano
            const Valor = data.Valor

            const CarroPropriedades = {
                Marca: Marca,
                Modelo: Modelo,
                Ano: Ano,
                Valor: Valor,
            }
            console.log(CarroPropriedades)
        }
    });

}


let NewCar = new Carro("Audi", "Q5", "Utilitario Esportivo", 2019, 150000, 180000)

async function postData(url = '', data = {}) {
    const response = await fetch(`https://apigenerator.dronahq.com/api/xNNjpD_t/APICarros`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
    'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
    });
    return response.json();
}

async function deleteData(id: number, data = {}) {
    const response = await fetch(`https://apigenerator.dronahq.com/api/xNNjpD_t/APICarros/${id}`, {
    method: 'DELETE',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
    'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
    });
    return response.json();
}

async function putData(id: number, data = {}) {
    const response = await fetch(`https://apigenerator.dronahq.com/api/xNNjpD_t/APICarros/${id}`, {
    method: 'PUT',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
    'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
    });
    return response.json();
}