function validarNumero(){
    let numero = document.getElementById("numeroInput").value;
    
    if(numero>0){
        let textoSaida = "O numero maior que zero";
        document.getElementById("saidaValidacao").innerText=textoSaida;
        
    }
        else if (numero<0){
            let textoSaida = "O numero é menor que zero";
            document.getElementById("saidaValidacao").innerText=textoSaida;
        }

        else{
            let textoSaida = "O numero é igual zero";
            document.getElementById("saidaValidacao").innerText=textoSaida;
        }
    
}