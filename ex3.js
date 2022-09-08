/*Crie um codigo q receba um numero por prompt e verifique se o numero é divisivel por 2 e 3. Faça isso:
    -Utilizando ifs aninhados
    -Utilizando um operador logico para unir 2 operações relacionas*/
let numero = Number(prompt("Digite um número"))

if (numero % 2 === 0) {
    console.log("É divisível por 2.")
} else {
    if (numero % 3 === 0) {
        console.log("Esse número é divisível por 3")
    } else {
        console.log("Não é divisível por 2 ou 3.")
    }
}
 /* ou let numero = Number(prompt("Digite um número"))

if (numero % 2 !== 0){
    console.log("Não é divisível por 2")

    if(numero % 3 === 0){
        console.log("Esse numero é divisivel por 3")
    }else{
        console.log("não é divisivel por 3")
    }
}else {  
    console.log("É divisivel por 2")
} 
-Dentro do if, crie um if ternario que imprima um numero surpresa que deve ser 30
    -caso o numero seja 30, imprima :"Ufa acertei!"
    -Caso não seja, imprima :"não foi dessa vez"
-Ainda dentro do if anterior, crie estrutura de switch case que verifique se o numero  6,12,18,24 ou 30 e imprima uma mensagem pra cada numero.
Caso não seja nenhum deles, imprima "o número é maior que 30 e menor que 6" */
if(num %2 === 0 && num %3 === 0){
    console.log("é divisivel por 2 e 3")
    num === 30 ? console.log("UFA ACERTEI!") : console.log("não foi dessa vez :( ")
    switch(num){
        case 6:
            console.log("é o numero 6")
            break
        case 12:
            console.log("é o numero 12")
            break
        case 18:
            console.log("é o numero 18")
            break
        case 24:
            console.log("é o numero 24")
            break
        case 30:
            console.log("é o numero 30")
            break
        default:
            console.log(" número é maior que 30 ou menor que 6")
    }
}
else{
    console.log("Não é divisivel por 2 e por 3")
}


