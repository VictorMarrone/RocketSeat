/* let username = "Victor"
let email = "victormarrone23@gmail.com"

let message = "Ola, " + username + " Voce se conectou com o seu email " + email + "."
console.log(message)

console.log(`Ola, ${username} obrigado por registrar seu email: ${email}`)

console.log(true)
console.log(false)

let isLoading = true
console.log(typeof isLoading) */

/* let emptiness // Undefined
console.log(`O valor é ${emptiness}`)

let empty = null // null
console.log(`O valor é ${empty}`) */

/* 
let value = "9"
console.log(typeof value)
console.log(typeof Number(value))

let age = 18
console.log(typeof age.toString(age))
console.log(typeof String(age)) */

/* let option = 0
console.log(Boolean(option))
console.log(typeof Boolean(option))
 */

// Operadores Aritmeticos

/* console.log("SOMA: ", 12 + 8)
console.log("Concatenacao:", "12" + "8")
console.log("Subtracao:", 12-10)
console.log("Divisao:", 12/2)
console.log("Resto da Divisao:", 13 % 2)
console.log("Exponencial:", 3**3) */

// Incremento e Decremento
/* 
let number = 10

number++

console.log(number) */

// Decremento
/* let number = 10
number++

console.log("Decremento apos:", number--)
console.log(number--)
console.log("Decremento antes:", --number) */

/* let number = 5
number += 10
console.log(number) */

// Grouping Operator (ORDEM DE PRECEDENCIA)
/* 
let total = 2 + 3 * 4
console.log(total)

let total2 = (2 + 3) * 4
console.log(total2) */

// Operadores logicos 

/* let one = 1
let two = 2

// === igual a

console.log(two == one)
console.log(two != one)
console.log(one == 1)
console.log(one == "1")
console.log(one === "1")
console.log(one !== "1") */

// Maior, Menos e Igual

/* let balance = 500
let payment = 120

// > Maior que
console.log(balance > payment)

// < Menor que
console.log(balance < payment)

balance = 120
console.log(balance >= payment) */

// Operadores de Atribuicao

/* let value

value = 1
console.log(value)

// Incremento

value += 2
console.log(value)

// Decremento

value -= 1
console.log(value)

// Multiplicar

value *= 3
console.log(value)

// Divisao

value /= 2
console.log(value)

// Resto da divisao

value %= 2
console.log(value)

// Potencia

value **= 2
console.log(value) */


// Operadores Logicos

/* let email = true
let password = false
let isAdmin = true

// AND (E) &&

console.log(email && password && isAdmin)


// OR (OU) ||
console.log(email || password)

// NOT (NEGACAO) !

console.log(!password)
console.log(!email)
 */

// Operador condcional ternario
/* 
let age = 16
console.log(age >= 18 ? "Voce pode dirigir!" : "Voce nao pode dirigir")

// Se for verdadeira mostra a mensagem apos o ? caso falso mostra depois do : */

/* let age = 21
console.log(
    age >= 18 // condicao
    ? "Voce pode dirigir." // 2 - Se verdadeiro
    : "Voce nao pode dirigir" // 3 - se falso
)

console.log(age <18 ? "Voce nao pode dirigir" : "Voce pode dirigir") */


// FALSY E TRUTHY

/* console.log("### EXEMPLOS DE FALSY ###")
console.log(false ? "VERDADEIRO" : "FALSO")
console.log(0 ? "VERDADEIRO" : "FALSO")
console.log(- 0 ? "VERDADEIRO" : "FALSO")
console.log("" ? "VERDADEIRO" : "FALSO")
console.log(null ? "VERDADEIRO" : "FALSO")
console.log(undefined ? "VERDADEIRO" : "FALSO")
console.log(NaN ? "VERDADEIRO" : "FALSO")


console.log("### EXEMPLOS DE TRUTHY ###")
console.log(true ? "VERDADEIRO" : "FALSO")
console.log({} ? "VERDADEIRO" : "FALSO")
console.log([] ? "VERDADEIRO" : "FALSO")
console.log(1 ? "VERDADEIRO" : "FALSO")
console.log(3.23 ? "VERDADEIRO" : "FALSO")
console.log("Victor" ? "VERDADEIRO" : "FALSO")
console.log(" " ? "VERDADEIRO" : "FALSO") // ESPACO CONTA COMO TRUE
console.log("false" ? "VERDADEIRO" : "FALSO")
console.log(-1 ? "VERDADEIRO" : "FALSO")
console.log(Infinity ? "VERDADEIRO" : "FALSO")

 */


// IF (SE)
/* 
let hour = 11

if (hour <= 12) {
    console.log('Bom dia!')
    console.log("Seja bem vindo!")
}
 */

// IF ELSE
/* 
let age = 23

if (age <18) {
    console.log("Voce nao pode dirigir!")
}
else {
    console.log("Voce pode dirigir!")
}


 */

// IF ELSE IF

/* let hour = 19

if (hour <= 12) {
    console.log("Bom dia!")
}

else if (hour > 18) {
    console.log("Boa noite!")

}

else if (hour > 12) {
    console.log("Boa tarde!")
}


 */
/* 
let hour = 17

if (hour <= 12) {
    console.log("Bom dia!")
}
else if (hour > 12 && hour <= 18) {
    console.log("Boa tarde!")
}

else {
    console.log("Boa noite!")
}


 */

// SWITCH

/* let option = 4

switch (option) {
    case 1: 
        console.log('Consultar pedido')
        break
    case 2:
        console.log('falar com atendente')
        break
    case 3:
        console.log('Cancelar pedido')   
        break
    default:
        console.log('Opcao invalida!')
}

 */

// TRY CATCH


/* try {
    // TENTA EXECUTAR ALGO.
    console.log(result)

} catch (error) {
    console.log(error)

} finally {
    console.log("fim")
}


 */
/* 
let result = 0

try {
    if (result === 0) {
        throw new Error ("Valor igual a zero.")
    }
    
} catch (error) {
    console.log(error)

} finally {
    console.log("fim")

}

 */

// FUNCTION

/* function message () {
    console.log("Ola, bem vindo!")
}

message()
message()


 */


// PARAMETROS E ARGUMENTOS
/* 
Parâmetros: é a variável (escopo da função) que irá receber um valor em uma função.
Argumentos: é o valorf que é passado para a função.
 */



/* function message (username) {
    console.log("Ola", username)
}

message("Rodrigo")
message("Ana")
)




 */

/* let username = "Ronaldo"

function message () {
    console.log(`Ola, ${username}`)
}

message()
 */

/* function sum(a, b) {
    console.log(a + b)
}

sum(10, 20) */


/* function joinText (text1, text2 = "", text3 ="") {
    console.log(text1, text2, text3)
}

joinText("Victor", "Marrone", "Saueressig")

joinText("Victor", "Marrone")



 */

/* function sum (a, b) {
    let result = a + b
    return result
}

let response = sum(7, 9)
console.log(response)
console.log(sum(7, 9)) */

// Função de Hoisting

/* showMessage("Ola, Victor!")

function showMessage(message) {
    console.log(message)
    endLine()

    function endLine() {
        console.log("-----------")
    }
}

showMessage("tudo bem?")


 */

// Comentário de documentação - JSDoc

/* /**
 * 
 * @param {String} email email do usuario.
 * @param {Number} password ate 6 caracteres.
 * @returns {Number} user Id.
 */
/* function signIn(email, password) {
    // Fluxo de autenticação do usuário.
    return 7
}

signIn("victormarrone23@gmail.com", 1234567)

 */

// Função Anonima

/* const showMessage = function () {

    return "Ola, Victor!"

}

console.log(showMessage())
console.log(showMessage)

const showMessage2 = function (message, name) {

    return "Ola, " + name

}

console.log(showMessage2("Ola", "Victor"))

 */

// Arrow Function
/* 
const showMessage1 = () => {
    console.log("Ola!")
}
console.log(showMessage1)
showMessage1()

const showMessage2 = (username, email) => {
    console.log(`Olá, ${username}. Seu e-mail é: ${email}`)
}

showMessage2("Victor", "victormarrone23@gmail.com")



 */

// CALLBACK FUNCTION
/* 
function execute(taskName, callback) {
    console.log("Executando a tarefa: ", taskName)
    callback()
}

function callback() {
    console.log("Callback executado:")
}

// Passando para a função

execute("Download do arquivo...", callback)

// Criando a função no próprio parâmetro.

execute("Upload do arquivo...", function(){
    console.log("Função de callback com uma função anônima.")
})


// Utilizando Arrow Function

execute("Excluindo arquivo...", () => {
    console.log("Arquivo excluído!")
})


execute("Salvando arquivo...", () => console.log("Arquivo salvo!"))





 */





























