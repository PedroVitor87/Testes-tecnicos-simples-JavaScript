function calculoDeJuros() {
    //Capturar os valores inseridos pelo usuárip
    const nome = document.getElementById('nome').value
    const mensalidade = parseFloat(document.getElementById('mensalidade').value)
    const contribuicao = parseInt(document.getElementById('contribuicao').value)
    const taxaDeJuros = 0.00517

    //Fórmula para calcular os juros compostos
    const montante = mensalidade * (Math.pow(1 + taxaDeJuros, contribuicao) - 1) / taxaDeJuros

    //Elementos onde os resultados são exibidos
    const nomeResultado = document.getElementById('nomeResultado')
    const mensalidadeResultado = document.getElementById('mensalidadeResultado')
    const montanteResultado = document.getElementById('montanteResultado')
    const contribuicaoResultado = document.getElementById('contribuicaoResultado')

    //Define os resultados aos elementos
    nomeResultado.textContent = nome
    mensalidadeResultado.textContent = mensalidade.toFixed(2)
    montanteResultado.textContent = montante.toFixed(2)
    contribuicaoResultado.textContent = contribuicao
}
