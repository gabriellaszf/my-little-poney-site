
// controller.js - A ponte entre o HTML e o Banco

const btnCadastrar = document.getElementById("btn-cadastrar");
const inputNome = document.getElementById("nome-input");
const displayMensagem = document.getElementById("mensagem-exibida");

// Quando clicar no botão...
btnCadastrar.onclick = async () => {
    const nome = inputNome.value;

    if (nome === "") {
        alert("Digite um nome!");
        return;
    }

    const novoPonei = { nome: nome };

    // Salva no IndexedDB (função lá do db.js)
    await adicionarItem(novoPonei);
    
    // Limpa o campo e atualiza a lista na tela
    inputNome.value = "";
    mostrarPonies();
};

// Função para mostrar os pôneis na tela
async function mostrarPonies() {
    const lista = await buscarItens();
    
    if (lista.length === 0) {
        displayMensagem.innerHTML = "Nenhum pônei cadastrado ainda.";
        return;
    }

    displayMensagem.innerHTML = lista.map(p => `<li>${p.nome}</li>`).join("");
}

// Inicia mostrando o que já tem salvo
mostrarPonies();