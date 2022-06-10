function calcularLetras(){
    console.log("está funcionando")
    // criar referência as elementos da página
    let inPalavra = document.getElementById("inPalavra")
    let outResultado = document.getElementById("outResultado")
    
    // obtém os valores dos campos de edição da página
    let palavra = inPalavra.value
    
    let vogal = 0
    let consoante = ""


    // usar for pra calcular tabuada
    for ( i = 0; i<=palavra.value.length; i++){
       
            switch(i){

                case"A":
                    vogal++
                break

                case"E":
                    vogal++
                break
            
                case"I":
                    vogal++
                break

                case"O":
                    vogal++
                break

                case"U":
                    vogal++
                break

                default:
                    consoante++
                break
            }

        }
    }  
    
    outResultado.textContent += "Quantia de vogais: "+vogal+" Quania de consoantes "+consoante

}
// referencia o botão no html
let btResultado = document.getElementById("butaoCalcular")
// registrar um evento de click a função calcularMedia
btResultado.addEventListener("click", calcularLetras)