/* 
Objeto
    - Uma coleção de dados e/ou funcionalidades;
    - Podem ter propriedades e métodos; */


    // Cria um objeto vazio.

/* const obj = {}
console.log(obj)
console.log(typeof obj) */

// Cria um objeto com propriedades e métodos.

/* const user = {
    email: "victormarrone23@gmail.com",
    age: 30,
    name: {
        first_name: "Victor",
        surname: "Marrone",
    },
    address: {
        street: "Francisco Petuco",
        number: "140",
        city: "Porto Alegre",
        State: "RS",
        country: "Brazil",
    },
    message: () => {
        console.log("Oi Victor")
    }    
}
 */

// Acessando propriedades e métodos usando a notação de ponto.

/* console.log(user.email)
 */
// Acessando propriedade de Objetos

/* console.log(user.name.first_name)

user.message()
 */
// Notação de colchetes
/* console.log(user["email"])
console.log(user["name"]["first_name"])
user["message"]() */

// ### ACESSANDO PROPRIEDADES NO CONTEXTO DO OBJETO

/* const user = {
    name: "Victor",
    message: () => {
        console.log(`Olá ${user.name}`)
        
    }
}
user.message() */
/* 
const product = {
    name: "Teclado",
    quantity: 100
}

 */

// Atualizar o valor de uma propriedade

/* console.log(product.name)
console.log(product.quantity)
product.quantity = 90
console.log(product.quantity)
product.name = "Mouse"
console.log(product.name)
 */

// OPTIONAL CHAINING

/* const user = {
    id: 1,
    name: "Victor",
    address: {
        street: "Av. Francisco Petuco",
        city: "POA",
        geo: {
            latitude: 47.808,
            longitude: 17.5674,
        },
    },
    message: () => {
        console.log(`Olá, ${user.name}`)
    }
}
console.log(user.address.street)
user.message()
console.log(user?.address?.street) // Optional Chaining */

// OPERADOR DE COALESCÊNCIA NULA

/* Operador logico que retorna o seu operando do lado direito quando
o seu operador do lado esquerdo é null ou undefined. Caso
contrário, ele reotna o seu operando do lado esquerdo. */

/* let content = null
console.log(content ?? "Conteúdo padrão")
let ronaldo = "jogador"
console.log(ronaldo ?? "teste" )
let teste = false
console.log(teste ?? "wewew")
let teste1 = {}
console.log(teste1 ?? "aaaa")
let teste2 = undefined
console.log(teste2 ?? "qqqqqq") 

const user = {
    name: "Victor",
    picture: undefined
}
console.log(user.picture ?? "default.png")
 */


// FUNÇÃO CONSTRUTORA

/* function createProduct(name) {
    const product = {}
    product.name = name
    product.details = function () {
        console.log(`O nome do produto é ${this.name}`)
    }
    return product
}
 */

/* O new ele cria um novo objeto utilizando a estrutura da 
função contrutora
 */

/* const product1 = new createProduct("teclado")
console.log(product1.name)
product1.details()

const product2 = new createProduct("Mouse")
console.log(product2.name)
product1.details()

console.log(product1 === product2)
console.log(product1 == product2)
 */
// Exemplos de funções construtoras disponíveis no próprio JavaScript

/* let myName = new String("Victor")
console.log(myName)

let price = "40.6".replace(".","")
console.log(price)

let date = new Date("2024-1-1")
console.log(date)
 */

/* function Person(name) {
    this.name = name
    this.message = function () {
        console.log(`Olá, ${this.name}`)
    }
}

const person1 = new Person("Victor")
console.log(person1.name)
person1.message() */

// Texto maiúsculo e minúsculo

/* let message = "Estou estudando os fundamentos do JavaScript"
console.log(message.toUpperCase())
console.log(message.toLowerCase()) */

// Obtendo o comprimento de uma string

/* let message = "Estou estudando os fundamentos do JavaScript"
console.log(message.length)

let password = "12345333"

if (password.length < 6) {
    console.log("A senha deter ao menos 6 caracteres")
} else {
    console.log("Senha ok")
}

let value = 12345
console.log(String(value).length)
console.log(value.toString().length) */

// Substituindo e fatiando um texto

/* let message ="Estou estudando os fundamentos do JavaScript." */

// Substituindo parte de um texto.

/* console.log(message.replace("Estou","Ronaldo estava")) */

// Extraindo uma parte da string (start, end)

/* console.log(message.slice(6,30))
 */
// Extraindo uma parte da string de trás para frente.

/* console.log(message.slice(-11)) */

// Remove espaços em branco no início e no final da string.

/* let textWithSpace = "       texto de exemplo        "
console.log(textWithSpace.trim()) */


// Completando uma String

/* const creditCard = "1234567812344928"
console.log(creditCard.length)

const lastDigits = creditCard.slice(-4)
console.log(lastDigits) */

// O padStart ele preenche a string do início.

/* const maskedNumber = lastDigits.padStart(creditCard.length, "X")
console.log(maskedNumber) */

// o padEnd ele preenche a string no final.

/* const number = "123"
console.log(number.padEnd(10, "#")) */


// SEPARANDO E UNINDO STRINGS

/* let text = "Estudar, Aprender, Praticar"
let separate = text.split(",")
console.log(separate)

let message = "Estou aprendendo JavaScript"
console.log(message.split(" "))

let joined = separate.join(" - ")
console.log(joined) */

// ENCONTRANDO UM CONTEÚDO NO TEXTO

/* let message = "Estou estudando os fundamentos do JavaScript"

console.log(message.indexOf("estudando")) */

// Obtém a posição da palavra.
// Quando não encontra retorna -1

// Verifica se existe a palavra na String.

/* console.log(message.includes("JavaScript"))
console.log(message.toLocaleLowerCase().includes("javascript"))
 */