


// Identificando checks boxs:

let letras_c = document.querySelector('#letras')
let numeros_c = document.querySelector('#numeros')
let simbolos_c = document.querySelector('#simbolos')

let checks = document.querySelectorAll('.checks')




// Identificando o input do resultado:

let result = document.querySelector('.senha')

// Identificando o botão gerar senha:

let btn = document.querySelector('.btn')



// Gerador de senha apenas com numeros : 

function numeros(n) {
    const numeros = "0123456789" 
    let senha = ""

    for(let i = 0; i < n; i++) {
        senha += numeros[Math.floor(Math.random() * numeros.length)]
    }

    return senha
}

// Gerador de senha apenas com letras : 

function letras(n) {
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let senha = ""

    for(let i = 0; i < n; i++) {
        senha += letras[Math.floor(Math.random() * letras.length)]
    }

    return senha
}


// Gerador de senha apenas com simbolos :

function simbolos(n) {
    const simbolos = "!@#$%^&*()-_=+[]{}/?"
    let senha = ""

    for(let i = 0; i < n; i++) {
        senha += simbolos[Math.floor(Math.random() * simbolos.length)]
    }

    return senha
}


// Gerador de senha com todos : 

function all(n) {
    const caracteres = 
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + 
        "abcdefghijklmnopqrstuvwxyz" +
        "0123456789" +
        "!@#$%^&*()-_=+[]{}/?";

    let senha = ""

    for(let i = 0; i < n; i++) {
        let rand = Math.floor(Math.random() * caracteres.length)
        senha += caracteres[rand]

    }

    return senha
}


// Senha letras e numeros 

function l_n(n) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + 
        "abcdefghijklmnopqrstuvwxyz" +
        "0123456789";

    let senha = ""

    for(let i = 0; i < n; i++) {
        let rand = Math.floor(Math.random() * caracteres.length)
        senha += caracteres[rand]
    }

    return senha
}

// Senha letras e simbolos

function l_s(n) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + 
        "abcdefghijklmnopqrstuvwxyz" +
        "!@#$%^&*()-_=+[]{}/?";

    let senha = ""

    for(let i = 0; i < n; i++) {
        let rand = Math.floor(Math.random() * caracteres.length)
        senha += caracteres[rand]
    }

    return senha
}


// Senha numeros e simbolos

function n_s(n) {
    const caracteres = "0123456789" + 
        "!@#$%^&*()-_=+[]{}/?";

    let senha = ""

    for(let i = 0; i < n; i++) {
        let rand = Math.floor(Math.random() * caracteres.length)
        senha += caracteres[rand]
    }

    return senha
}


// definindo um estado inicial para o botão de força 
let strong = document.querySelector('.color')
strong.style.backgroundColor = 'grey'
strong.textContent = 'Em espera'

// Maximização do campo para o user
let input_tamsenha = document.querySelector('#in')

let user = document.querySelector('#initial')
let valor = input_tamsenha.value 

input_tamsenha.addEventListener('input', () => {
    valor = input_tamsenha.value
    user.setAttribute('maxlength', valor)
})

user.setAttribute('maxlength', valor)

// CONFIGURAÇÃO DO EVENTO : 

btn.addEventListener('click', () => {

    // Identificando o input do tamanho da senha : 

    let input_tamsenha = document.querySelector('#in')

    // Tamanho da senha : 

    let valor = Number(input_tamsenha.value)
    
    // 
    user.removeAttribute('maxlength')

    user.setAttribute('maxlength', valor)
    // verificando se todos os checkboxs estão ativos :
    let verify = [...checks].every((c) => c.checked === true)
    
    if(verify) {
        // TODOS
        // verificação do input customizavel do user:
        // Pegando elemento de força da senha
        let strong = document.querySelector('.color')
        strong.style.backgroundColor = 'green'
        strong.textContent = 'SEGURA'
        let user = document.querySelector('#initial')
        let text = user.value
        
        let novo_valor = (valor) - (text.length)
        if (novo_valor < 0) {
            result.value = "Erro: o texto inicial é maior que o tamanho da senha!";
            return
        }
        let senha = all(novo_valor)
        let senha_total = text + senha
        result.value = senha_total

        // Copiar a senha gerada: 

        let copy = document.querySelector('.copy')

        copy.addEventListener('click', () => {
            navigator.clipboard.writeText(result.value)
            .then(() => {
                console.log('Copiado!')
            })
            .catch((err) => {
                console.error("Erro ao copiar:", err)
            })
        })
        

    } else if(letras_c.checked == true && numeros_c.checked == true) {
        // LETRAS E NUMEROS
        let strong = document.querySelector('.color')
        strong.style.backgroundColor = 'rgb(230, 140, 6)'
        strong.textContent = 'MÉDIA'
        let user = document.querySelector('#initial')
        let text = user.value
        
        let novo_valor = (valor) - (text.length)
        if (novo_valor < 0) {
            result.value = "Erro: o texto inicial é maior que o tamanho da senha!";
            return
        }
        let senha = l_n(novo_valor)
        let senha_total = text + senha
        result.value = senha_total

        // Copiar a senha gerada: 

        let copy = document.querySelector('.copy')

        copy.addEventListener('click', () => {
            navigator.clipboard.writeText(result.value)
            .then(() => {
                console.log('Copiado!')
            })
            .catch((err) => {
                console.error("Erro ao copiar:", err)
            })
        })

    } else if(letras_c.checked == true && simbolos_c.checked == true) {
        // letras e simbolos  
        let strong = document.querySelector('.color')
        strong.style.backgroundColor = 'rgb(230, 140, 6)'
        strong.textContent = 'MÉDIA'
        let user = document.querySelector('#initial')
        let text = user.value
        
        let novo_valor = (valor) - (text.length)
        if (novo_valor < 0) {
            result.value = "Erro: o texto inicial é maior que o tamanho da senha!";
            return
        }
        let senha = l_s(novo_valor)
        let senha_total = text + senha
        
        result.value = senha_total

        // Copiar a senha gerada: 

        let copy = document.querySelector('.copy')

        copy.addEventListener('click', () => {
            navigator.clipboard.writeText(result.value)
            .then(() => {
                console.log('Copiado!')
            })
            .catch((err) => {
                console.error("Erro ao copiar:", err)
            })
        })

    }   else if(numeros_c.checked == true && simbolos_c.checked == true) {
        // Numeros e simbolos
        let strong = document.querySelector('.color')
        strong.style.backgroundColor = 'rgb(230, 140, 6)'
        strong.textContent = 'MÉDIA'
        let user = document.querySelector('#initial')
        let text = user.value
        
        let novo_valor = (valor) - (text.length)
        if (novo_valor < 0) {
            result.value = "Erro: o texto inicial é maior que o tamanho da senha!";
            return
        }
        let senha = n_s(novo_valor)
        let senha_total = text + senha
        console.log(senha_total)
        result.value = senha_total

        // Copiar a senha gerada: 

        let copy = document.querySelector('.copy')

        copy.addEventListener('click', () => {
            navigator.clipboard.writeText(result.value)
            .then(() => {
                console.log('Copiado!')
            })
            .catch((err) => {
                console.error("Erro ao copiar:", err)
            })
        })

    } else if(numeros_c.checked == true) {
        // APENAS NUMEROS
        let strong = document.querySelector('.color')
        strong.style.backgroundColor = 'red'
        strong.textContent = 'FRACA'
        let user = document.querySelector('#initial')
        let text = user.value
        
        let novo_valor = (valor) - (text.length)
        if (novo_valor < 0) {
            result.value = "Erro: o texto inicial é maior que o tamanho da senha!";
            return
        }
        let senha = numeros(novo_valor)
        let senha_total = text + senha
        result.value = senha_total

        // Copiar a senha gerada: 

        let copy = document.querySelector('.copy')

        copy.addEventListener('click', () => {
            navigator.clipboard.writeText(result.value)
            .then(() => {
                console.log('Copiado!')
            })
            .catch((err) => {
                console.error("Erro ao copiar:", err)
            })
        })

    } else if(simbolos_c.checked == true) {
        // APENAS SIMBOLOS
        let strong = document.querySelector('.color')
        strong.style.backgroundColor = 'red'
        strong.textContent = 'FRACA'
        let user = document.querySelector('#initial')
        let text = user.value
        
        let novo_valor = (valor) - (text.length)
        if (novo_valor < 0) {
            result.value = "Erro: o texto inicial é maior que o tamanho da senha!";
            return
        }
        let senha = simbolos(novo_valor)
        let senha_total = text + senha
        result.value = senha_total

        // Copiar a senha gerada: 

        let copy = document.querySelector('.copy')

        copy.addEventListener('click', () => {
            navigator.clipboard.writeText(result.value)
            .then(() => {
                console.log('Copiado!')
            })
            .catch((err) => {
                console.error("Erro ao copiar:", err)
            })
        })

    } else if(letras_c.checked == true) {
        // APENAS LETRAS
        let strong = document.querySelector('.color')
        strong.style.backgroundColor = 'red'
        strong.textContent = 'FRACA'
        let user = document.querySelector('#initial')
        let text = user.value
        
        let novo_valor = (valor) - (text.length)
        if (novo_valor < 0) {
            result.value = "Erro: o texto inicial é maior que o tamanho da senha!";
            return
        }
        let senha = letras(novo_valor)
        let senha_total = text + senha
        result.value = senha_total

        // Copiar a senha gerada: 

        let copy = document.querySelector('.copy')

        copy.addEventListener('click', () => {
            navigator.clipboard.writeText(result.value)
            .then(() => {
                console.log('Copiado!')
            })
            .catch((err) => {
                console.error("Erro ao copiar:", err)
            })
        })
    } else {
        result.value = "Marque no mínimo uma opção"
    }
})

