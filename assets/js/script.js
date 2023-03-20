function calcularIMC(){
    const form = document.querySelector('.dados')
    const resultado = document.querySelector('.resultado')

    function recebeDados(evento){
        evento.preventDefault();
        const altura = document.querySelector('.altura');
        const peso = document.querySelector('.peso');
        const imc = (peso.value / (altura.value*altura.value) *10000);
        const valorimc = imc.toFixed(2);

        if (valorimc < 18.5){
            resultado.innerHTML += `O valor do seu IMC é: ${valorimc}, você está: Abaixo do peso`
        } else if (valorimc >= 18.5 && valorimc <= 24.9){
            resultado.innerHTML += `O valor do seu IMC é: ${valorimc}, você está no peso: Normal`
        } else if (valorimc >= 25 && valorimc <= 29.9){
            resultado.innerHTML += `O valor do seu IMC é: ${valorimc}, você está com: Sobrepeso`   
        } else if (valorimc >= 30 && valorimc <= 34.9){
            resultado.innerHTML += `O valor do seu IMC é: ${valorimc}, você está com: Obesidade grau 1`
        } else if (valorimc >= 35 && valorimc <= 39.9){
            resultado.innerHTML += `O valor do seu IMC é: ${valorimc}, você está com: Obesidade grau 2`
        } else if (valorimc >= 40){
            resultado.innerHTML += `O valor do seu IMC é: ${valorimc}, você está com: Obesidade grau 3`
        }
    };
    form.addEventListener('submit', recebeDados)
};

calcularIMC();