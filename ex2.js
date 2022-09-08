/* SWITCH CASE

labank gostou mto do seu trab e quer implementar um serviço de escolha do cartao
pelo ramal telefonico.
    1 p "fácil
    2 para "black
    3"platinum"
    4"master gold
    -caso não seja nenhuma das opçoes:" Escolha uma das quatro opçoes disponíveis"
    
*/
    let cartao = Number(prompt("Qual a opção de cartão?"))
    switch(cartao){
        case 1:
            console.log("Cartão fácil escolhido")
            break
        case 2:
            console.log("Cartão black escolhido")
            break
        case 3:
            console.log("Cartão platinum escolhido")
            break
        case 4:
            console.log("Cartão master gold escolhido")
        default:
            console.log("Escolha uma das quatro opções disponíveis")
