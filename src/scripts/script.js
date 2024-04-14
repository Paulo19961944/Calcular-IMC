// Adiciona Evento ao Botão
calcularBtn.addEventListener('click', () => {
    let weightUser = weight.value // Captura o Peso do Usuário
    let heightUser = height.value // Captura a Altura do Usuário
    let imc = weightUser / Math.pow(heightUser, 2) // Calcula o IMC
    
    // Validação do IMC
    if(!isNaN(imc) && imc !== Infinity){
        calcularIMC() // Exibe o resultado na tela e retorna se o peso está normal ou não
    } else{
        alert('Digite o peso e a altura')  // Exibe um alerta na tela
    }

    function calcularIMC(){
        if(imc < 18.5){
            resultado.innerText = `O seu IMC é ${imc.toFixed(2)} e você está abaixo do peso`
        } else if(imc >= 18.5 && imc < 25){
            resultado.innerText = `O seu IMC é ${imc.toFixed(2)} e você está no peso normal`
        } else if(imc >= 25 && imc < 30){
            resultado.innerText = `O seu IMC é ${imc.toFixed(2)} e você está com sobrepeso`
        } else if(imc >= 30 && imc < 35){
            resultado.innerText = `O seu IMC é ${imc.toFixed(2)} e você está com Obesidade Grau 1`
        } else if(imc >= 35 && imc < 40){
            resultado.innerText = `O seu IMC é ${imc.toFixed(2)} e você está com Obesidade Grau 2`
        } else{
            resultado.innerText = `O seu IMC é ${imc.toFixed(2)} e você está com Obesidade Grau 3`
        }
    }
})
