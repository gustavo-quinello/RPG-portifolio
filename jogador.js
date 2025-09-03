// entrada.js - Versão Simplificada

// Seleciona os elementos específicos desta página
const welcomeMessage = document.getElementById('welcome-message');
const logoutButton = document.getElementById('logout-button');

// Esta é uma função que se executa sozinha assim que o script carrega
(async () => {
    // A função 'checkUserSession' vem do arquivo auth.js (que já foi carregado)
    // Ela nos retorna o usuário logado (ou já nos redirecionou se não houver login)
    const user = await checkUserSession();

    // Se a função retornou um usuário, nós o usamos para popular a página
    if (user) {
        welcomeMessage.textContent = `Bem-vindo, ${user.email}!`;
    }
})(); // Os parênteses no final fazem a função rodar imediatamente

// A lógica de logout continua aqui, pois o botão só existe nesta página
logoutButton.addEventListener('click', async () => {
    // A variável 'supabaseClient' também vem do auth.js
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
        alert("Erro ao fazer logout: " + error.message);
    } else {
        alert("Você foi desconectado.");
        window.location.href = "index.html";
    }
});

async function buscarPersonagens() {
    const lista = document.getElementById('personagens-lista');
    
    // Usamos nossa nova variável 'supabaseClient' para fazer a chamada
    const { data, error } = await supabaseClient.from('personagens').select('*');

    // 3. Verifica se deu algum erro na busca
    if (error) {
        console.error('Erro ao buscar personagens:', error);
        lista.innerHTML = 'Não foi possível carregar os personagens.';
        return;
    }

    lista.innerHTML = '';

    // 4. Se não deu erro, exibe os dados na página
    if (data) {
        for (const personagem of data) {
            const elementoPersonagem = document.createElement('p');
            elementoPersonagem.textContent = `Vilão: ${personagem.character} (Nível: ${personagem.nivel})`;
            lista.appendChild(elementoPersonagem);
        }
    }
}

// 5. Roda a função para buscar os personagens assim que a página carregar
buscarPersonagens();