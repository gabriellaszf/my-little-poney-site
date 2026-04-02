const btnGirar = document.getElementById("btn-girar");
const btnSalvar = document.getElementById("btn-salvar");
const slotDia = document.getElementById("slot-dia");
const slotMes = document.getElementById("slot-mes");
const slotAno = document.getElementById("slot-ano");
const listaUl = document.getElementById("itens-lista");

// Função para gerar números aleatórios (O Caos)
btnGirar.onclick = () => {
    // Sorteia dia entre 1 e 31
    const dia = Math.floor(Math.random() * 31) + 1;
    // Sorteia mês entre 1 e 12
    const mes = Math.floor(Math.random() * 12) + 1;
    // Sorteia ano entre 1950 e 2024
    const ano = Math.floor(Math.random() * (2024 - 1950 + 1)) + 1950;

    // Atualiza a tela com os zeros à esquerda bonitinhos
    slotDia.textContent = dia.toString().padStart(2, '0');
    slotMes.textContent = mes.toString().padStart(2, '0');
    slotAno.textContent = ano;

    // Mostra o botão de salvar (porque agora tem um valor na tela)
    btnSalvar.style.display = "inline-block";
};

// Salvar no IndexedDB
btnSalvar.onclick = async () => {
    const dataFinal = `${slotDia.textContent}/${slotMes.textContent}/${slotAno.textContent}`;
    
    const objetoParaSalvar = {
        data: dataFinal,
        timestamp: new Date().getTime()
    };

    await adicionarData(objetoParaSalvar);
    alert("Data salva com sucesso! (Mesmo que esteja errada, o banco aceitou kkk)");
    renderizarLista();
};

// Mostrar na tela
async function renderizarLista() {
    const dados = await buscarDatas();
    listaUl.innerHTML = "";
    dados.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `Pônei nascido em: ${item.data}`;
        listaUl.appendChild(li);
    });
}

// Carregar ao abrir
renderizarLista();
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
