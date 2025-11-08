

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