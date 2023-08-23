// Aguarda o evento de carregamento do DOM
document.addEventListener("DOMContentLoaded", function() {
    // Obtém os parâmetros da URL
    const urlParams = new URLSearchParams(window.location.search)
    const nome = urlParams.get('nome') // Obtém o valor do parâmetro 'nome'
    const mensalidade = parseFloat(urlParams.get('mensalidade')) // Obtém o valor do parâmetro 'mensalidade'
    const contribuicao = parseInt(urlParams.get('contribuicao')) // Obtém o valor do parâmetro 'contribuicao'
    const taxaDeJuros = 0.00517 // Taxa de juros

    // Calcula o montante usando a função calculoDeJuros
    const montante = calculoDeJuros(mensalidade, contribuicao, taxaDeJuros)

    // Exibe os resultados nos elementos da página
    document.querySelector('#nome').textContent = nome
    document.querySelector('#mensalidade').textContent = mensalidade.toFixed(2)
    document.querySelector('#resultado').textContent = montante.toFixed(2)
    document.querySelector('#tempo').textContent = contribuicao
});

// Função para calcular juros compostos
function calculoDeJuros(mensalidade, contribuicao, taxaDeJuros) {
    // Fórmula para calcular os juros compostos
    const montante = mensalidade * ((Math.pow(1 + taxaDeJuros, contribuicao) - 1) / taxaDeJuros);
    return montante
}
