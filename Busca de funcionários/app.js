const funcionarios = ["Pedro", "Maria", "João", "Ana","Lucas", "Julia", "Davi", "Larissa", "Fernanda", "Vitor"]

function buscarFuncionario() {
    const busca = document.querySelector('#busca')
    const resultado = document.querySelector('#resultado')
    
    const nomeBuscado = busca.value
    
    //trim() - Limpa espaços antes de fazer comparações
    if (nomeBuscado.trim() === '') { //Nesse if, ela está tirando os espaços em branco e se estiver vazia ela retornará pra digitar um nome válido
        resultado.textContent = 'Por favor, digite um nome válido.'
        return
    }
    
    if (funcionarios.includes(nomeBuscado)) {
        resultado.textContent = `Funcionário encontrado: ${nomeBuscado}`
    } else {
        resultado.textContent = `Funcionário não encontrado: ${nomeBuscado}`
    }
}