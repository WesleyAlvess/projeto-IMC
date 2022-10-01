// Capturar Evento do formulario.
const form = document.getElementById('formulario');

// Parando o evento de SUBMIT-Enviar
form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Estou parando o evento!')

    //Capturando o evento alvo de peso e altura.
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')
    
    // Pegando os NÚMEROS dos inputs peso e altura.
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)
    console.log(peso, altura)
    
    // Estrutura condicional
    //Se o peso for avaliado como verdadeiro acontece algo
    //Mais aqui e ao contrario se o peso nao for avaliado como true
    // ele e false.
    if (!peso) {
        // Usando a função mostraResultado.
        mostraResultado('Peso inválido')
        // se o peso for invalido para resultado.
        // usando return.
        return;
    }

    // Se a altura não for valida.
    if (!altura) {
        mostraResultado('Altura inválida')
        return;
    }
    
    //obtendo o valor de IMC nesse local 
    // onde o evento e disparado.
    const imc = calculaImc(peso, altura)
    const dImc = dadosImc(imc)
    
    const msg = `Seu IMC é ${imc} (${dImc}).`;
    mostraResultado(msg, true);
});

function dadosImc(imc) {
    const dados = ['Abaixo do peso', 'Peso normal', 'Sobre peso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    
    if (imc >= 39.9) return dados[5];
    if (imc >= 34.9) return dados[4];
    if (imc >= 29.9) return dados[3];
    if (imc >= 24.9) return dados[2]; 
    if (imc >= 18.5) return dados[1];
    if (imc < 18.5) return dados[0];
    
}


function calculaImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}


// Criando Paragrafo.
function criaParagrafo() {
    const paragrafo = document.createElement('p');
    return paragrafo;
};

function mostraResultado(msg, isValid) {
    // Capturar evento do resultado.
    const resultado = document.querySelector('#resultado');

    // Add um espaço vazio dentro do resultado.
    resultado.innerHTML = '';

    // Usando a função cria Paragrafo.
    paragrafo = criaParagrafo();

    if (isValid) {
        paragrafo.classList.add('paragrafo-resultado')
    } else {
        paragrafo.classList.add('bad')
    }

    // Colocando o paragrafo dentro do HTML.
    paragrafo.innerHTML = msg;

    //Injetando paragrafo dentro do resultado.
    resultado.appendChild(paragrafo);

};

