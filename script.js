/*   IFS ANINHADOS

Crie um programa Labank. Verifique se o dependente do usuario tem entre 13 e 17 
anos p/ aprovar a solicitação de cartao de credito vinculado. Faremos de 2 formas:
    -utilizando ifs alinhados
    -utilizando 1 operador logico para unir 2 operações relacionais
Caso o numero esreja entre 13 e 17, imprima:
"Seu dependente já pode ter um cartao de credito vinculado ao seu"
Caso não esteja entre 13 e 17:
"Consulte outras possibilidades do labank"*/



let idadeDependente = 20

if (idadeDependente => 13) {
    if (idadeDependente <= 17) {
        console.log("Seu dependente já pode ter um cartao de credito vinculado ao seu"
        )
    } else {
        console.log("Consulte outras possibilidades do labank")
    }
}
/*          IF TERNÁRIO
Faça uma última verificação neste numero p/ verificar se o numero é exatamente 13.
    -caso seja 13, imprima "A idade do dependente é 13 e já pode ter um cartão"
    -caso não seja imprima "Verifique as opções possíveis"
    -Utilize um if ternário p/ resolver*/

idadeDependenteUsuario = 13

//       CONDIÇÃO             ?                    EXPRESSAO 1(TRUE)                               :          EXPRESSAO 2 (FALSE)
idadeDependenteUsuario === 13 ? console.log("A idade do dependente é 13 e já pode ter um cartão") : console.log ("Verifique as opções possíveis")


