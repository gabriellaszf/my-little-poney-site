// 1. Selecionando os elementos do HTML
const botao = document.querySelector('#btn-cadastrar');
const campoInput = document.querySelector('#nome-input');
const feedback = document.querySelector('#mensagem-exibida');
const corpoPagina = document.querySelector('body');

// 2. A Mágica do Clique
botao.addEventListener('click', function() {
    const nome = campoInput.value;

    if (nome !== "") {
        // Ação 1: Mensagem na tela
        feedback.innerText = "Pônei " + nome + " cadastrado! POW! Invocou um feitiço!";
        feedback.style.color = "purple";
        feedback.style.fontWeight = "bold";

        // Ação 2: Mudar a cor do fundo (Efeito Mágico)
        const cores = ['#FFB6C1', '#E6E6FA', '#87CEFA', '#98FB98', '#FFD700'];
        const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
        corPagina.style.backgroundColor = corAleatoria;

        // Limpa o campo para o próximo pônei
        campoInput.value = "";
        
        console.log("Magia disparada para: " + nome);
    } else {
        alert("Digita o nome do pônei, meno!");
    }
});