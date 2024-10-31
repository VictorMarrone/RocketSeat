/* const ul = document.querySelector("ul")


ul.addEventListener("scroll", (event) => {  
    console.log(ul.scrollTop)

    if(ul.scrollTop > 300) {
        // console.log("FIM DA LSITA")
        ul.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    } 
})

const button = document.querySelector("button")
button.addEventListener("click", () => {
    console.log("clicou!")
}) */


/* const form = document.querySelector("form")

form.onsubmit = (event) => {
    event.preventDefault()
    console.log("Voce fez submit no formulario")
}

form.onsubmit = (event) => {
    event.preventDefault()
    console.log("Voce fez submit no formulario #2")
}



form.addEventListener("submit", (event) => {
    console.log("Voce fez submit no formulario #3")
})


form.addEventListener("submit", (event) => {
    console.log("Voce fez submit no formulario #4")
})
 */

// const input = document.querySelector("input")

// keydown event - quando a tecla eh pressionada (captura tudo, incluindo, CTRL, Shift, etc)

/* input.addEventListener("keydown", (event) => {
    console.log(event)
}
 */


// keypress - quando uma tecla do tipo caractere eh pressionada, (letras,numeros, pontos e etc.)
/* input.addEventListener("keypress", (event) => {
    console.log(event.key)
})


input.onchange = () => {
    inputChange()
}


function inputChange() {
    console.log("o input mudou!")
} */

/* 
const input = document.querySelector("input")
const form = document.querySelector("form")
const regex = /\D+/g

if (regex.text(value)) {
    console.log(value)

} else {
    alert("Padrao nao encontrado")
}
 */
/* input.addEventListener("input", () => {
    const value = input.value
    const regex = /\D+/g
    // Retorna o conteudo encontrado na string.
    // console.log(value.match(regex))


    // Testa se atende o padrao
    // const isValid = regex.test(value)
    // console.log(isValid)

}) */

/* form.addEventListener("submit", (event) => {
    event.preventDefault()
    const value = input.value.replace(regex, "")
    console.log(value)
})

 */