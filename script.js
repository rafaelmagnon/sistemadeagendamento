// Chave usada para guardar os agendamentos no navegador
const CHAVE_STORAGE = "agendamentos";

// Lista em memória, carregada do localStorage ao abrir a página
let agendamentos = carregarAgendamentos();

// Lê os agendamentos salvos (se o dado estiver corrompido, começa vazio)
function carregarAgendamentos() {
    try {
        return JSON.parse(localStorage.getItem(CHAVE_STORAGE)) || [];
    } catch {
        return [];
    }
}

// Salva a lista atual no navegador
function salvarAgendamentos() {
    try {
        localStorage.setItem(CHAVE_STORAGE, JSON.stringify(agendamentos));
    } catch {
        console.warn("Não foi possível salvar os agendamentos neste navegador.");
    }
}

// Converte "2026-10-08" em "08/10/2026"
function formatarData(dataISO) {
    const [ano, mes, dia] = dataISO.split("-");
    return `${dia}/${mes}/${ano}`;
}

// Cria o parágrafo que representa um agendamento na tela
function criarItem({ nome, data, hora }) {
    const item = document.createElement("p");
    item.textContent = `${nome} agendou para ${formatarData(data)} às ${hora}`;
    return item;
}

// Desenha na tela todos os agendamentos salvos
function renderizarAgendamentos() {
    const lista = document.getElementById("listaAgendamentos");
    agendamentos.forEach((agendamento) => lista.appendChild(criarItem(agendamento)));
}

// Função chamada ao clicar no botão "Agendar"
function agendar() {
    const campoNome = document.getElementById("nome");
    const campoData = document.getElementById("data");
    const campoHora = document.getElementById("hora");

    const nome = campoNome.value.trim();
    const data = campoData.value;
    const hora = campoHora.value;

    // Verifica se algum dos campos está vazio
    if (!nome || !data || !hora) {
        alert("Preencha todos os campos!");
        return;
    }

    const novoAgendamento = { nome, data, hora };

    // Guarda, salva e mostra na tela
    agendamentos.push(novoAgendamento);
    salvarAgendamentos();
    document.getElementById("listaAgendamentos").appendChild(criarItem(novoAgendamento));

    // Limpa os campos e devolve o foco para o nome
    campoNome.value = "";
    campoData.value = "";
    campoHora.value = "";
    campoNome.focus();
}

// Mostra os agendamentos salvos ao abrir a página
renderizarAgendamentos();
