// Função chamada ao clicar no botão "Agendar"
function agendar() {
    // Pega o valor do campo de nome
    const nome = document.getElementById('nome').value;

    // Pega o valor do campo de data
    const data = document.getElementById('data').value;

    // Pega o valor do campo de horário
    const hora = document.getElementById('hora').value;

    // Verifica se algum dos campos está vazio
    if (!nome || !data || !hora) {
        alert("Preencha todos os campos!"); // Alerta o usuário
        return; // Encerra a função se houver campos vazios
    }

    // Seleciona o contêiner onde os agendamentos são exibidos
    const lista = document.getElementById('listaAgendamentos');

    // Cria um novo elemento de parágrafo para exibir o agendamento
    const item = document.createElement('p');

    // Define o conteúdo do parágrafo com os dados preenchidos
    item.textContent = `${nome} agendou para ${data} às ${hora}`;

    // Adiciona o novo parágrafo dentro da lista
    lista.appendChild(item);

    // Limpa os campos de entrada após o agendamento
    document.getElementById('nome').value = '';
    document.getElementById('data').value = '';
    document.getElementById('hora').value = '';
}
