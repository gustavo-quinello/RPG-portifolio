var displayPontos = document.getElementById("Pontos_disponiveis")
var atributo = document.querySelectorAll(".atributo")
var pontosTotais = document.getElementById("nivel")

function calcularSoma() {
    var somaTotal = 0; // Começa a soma do zero
    var pontosTotais = parseInt(document.getElementById("nivel").value)
    console.log(pontosTotais)

    // 3. Faz um loop por CADA input que foi selecionado
    atributo.forEach(input => {
        // 4. Pega o valor, converte para número e soma ao total
        // Usamos 'parseFloat' para aceitar números decimais
        somaTotal += parseFloat(input.value);
    });
    var result =  pontosTotais + 4 - somaTotal
// 5. Atualiza o HTML com o resultado final da soma
        displayPontos.textContent = result;
}

atributo.forEach(input => {
    input.addEventListener("input",calcularSoma)
})

pontosTotais.addEventListener("input", calcularSoma)

calcularSoma()






const campoNivel = document.getElementById('nivel');
const campoClasse = document.getElementById('classe-personagem');
const containerSelects = document.getElementById('container-selects');
const campoAura = document.getElementById('aura');
const campoTrilha = document.getElementById('trilha');

// --- ESTRUTURA DE DADOS PARA HABILIDADES DINÂMICAS ---
const habilidadesPorClasse = {
    mago_elemntental: [
        { valor: 'atalho-do-mago', texto: 'Atalho do Mago(C)', tier: 1 },
        { valor: 'finta-improvisada', texto: 'Finta Improvisada(C)', tier: 1 },
        { valor: 'intensificar', texto: 'Intensificar(C)', tier: 2 },
        { valor: 'ciclo-arcano', texto: 'Ciclo arcano(C)', tier: 2 },
        { valor: 'aniquilacao', texto: 'Aniquilação(C)', tier: 3 },
        { valor: 'aprender-magia', texto: 'Aprender Magia(C)', tier: 1 },
    ],
    mistico: [
        { valor: 'atalho-do-mago', texto: 'Atalho do Mago(C)', tier: 1 },
        { valor: 'finta-improvisada', texto: 'Finta Improvisada(C)', tier: 1 },
        { valor: 'espaço-extra', texto: 'Espaço Extra(C)', tier: 2 },
        { valor: 'agilizar-circulo', texto: 'Agilizar Círculo(C)', tier: 2 },
        { valor: 'gambiarra-do-mistico', texto: 'Gambiarra do Místico(C)', tier: 3 },
        { valor: 'aprender-magia', texto: 'Aprender Magia(C)', tier: 1 },
    ],
    mago_de_fronte: [
        { valor: 'atalho-do-mago', texto: 'Atalho do Mago(C)', tier: 1 },
        { valor: 'finta', texto: 'Finta(C)', tier: 1 },
        { valor: 'initerrupto', texto: 'Initerrupto(C)', tier: 2 },
        { valor: 'precisao', texto: 'Precisão(C)', tier: 2 },
        { valor: 'conjuracao-livre', texto: 'Conjuração Livre(C)', tier: 3 },
        { valor: 'aprender-magia', texto: 'Aprender Magia(C)', tier: 1 },
    ],
    fimbulwinter: [
        { valor: 'atalho-do-mago', texto: 'Atalho do Mago(C)', tier: 1 },
        { valor: 'finta-improvisada', texto: 'Finta Improvisada(C)', tier: 1 },
        { valor: 'resistencia-termica', texto: 'Resistência térmica(C)', tier: 2 },
        { valor: 'esfriar', texto: 'Esfriar(C)', tier: 2 },
        { valor: 'fimbulwinter', texto: 'Fimbulwinter(C)', tier: 3 },
        { valor: 'aprender-magia', texto: 'Aprender Magia(C)', tier: 1 },
    ],
    feengari: [
        { valor: 'atalho-do-mago', texto: 'Atalho do Mago(C)', tier: 1 },
        { valor: 'finta-improvisada', texto: 'Finta improvisada(C)', tier: 1 },
        { valor: 'lua-artificial', texto: 'Lua artificial(C)', tier: 2 },
        { valor: 'ascensao-lunar', texto: 'Ascensão Lunar(C)', tier: 2 },
        { valor: 'transmutacao-lunar', texto: 'Transmutação Lunar(C)', tier: 3 },
        { valor: 'aprender-magia', texto: 'Aprender Magia(C)', tier: 1 },
    ],
    ascendente: [
        { valor: 'atalho-do-mago', texto: 'Atalho do Mago(C)', tier: 1 },
        { valor: 'finta', texto: 'Finta(C)', tier: 1 },
        { valor: 'acalmar', texto: 'Acalmar(C)', tier: 2 },
        { valor: 'consciencia', texto: 'Consciência(C)', tier: 2 },
        { valor: 'harmonia', texto: 'Harmonia(C)', tier: 3 },
        { valor: 'aprender-magia', texto: 'Aprender Magia(C)', tier: 1 },
    ],
    espadachim: [
        { valor: 'precisao', texto: 'Precisão(C)', tier: 1 },
        { valor: 'finta', texto: 'Finta(C)', tier: 1 },
        { valor: 'ataque-do-trapaceiro', texto: 'Ataque do trapaceiro(C)', tier: 2 },
        { valor: 'finta-de-guerra', texto: 'Finta de guerra(C)', tier: 2 },
        { valor: 'ataque-do-trapaceiro-ii-passivo', texto: 'Ataque do trapaceiro II(passivo)(C)', tier: 3 },
    ],
    arma_de_corda: [
        { valor: 'precisao', texto: 'Precisão(C)', tier: 1 },
        { valor: 'finta', texto: 'Finta(C)', tier: 1 },
        { valor: 'prender', texto: 'Prender(C)', tier: 2 },
        { valor: 'puxar', texto: 'Puxar(C)', tier: 2 },
        { valor: 'zona-segura', texto: 'Zona segura(C)', tier: 3 },
    ],
    nordico: [
        { valor: 'precisao', texto: 'Precisão(C)', tier: 1 },
        { valor: 'finta', texto: 'Finta(C)', tier: 1 },
        { valor: 'iniciador', texto: 'Iniciador(C)', tier: 2 },
        { valor: 'maquina-de-matar', texto: 'Máquina de Matar(C)', tier: 2 },
        { valor: 'aniquilador-em-area', texto: 'Aniquilador em área(C)', tier: 3 },
    ],
    lanceiro: [
        { valor: 'precisao', texto: 'Precisão(C)', tier: 1 },
        { valor: 'finta', texto: 'Finta(C)', tier: 1 },
        { valor: 'arremesso', texto: 'Arremesso(C)', tier: 2 },
        { valor: 'calibrado', texto: 'Calibrado(C)', tier: 2 },
        { valor: 'estocada', texto: 'Estocada(C)', tier: 3 },
    ],
    atirador_de_elite: [
        { valor: 'calculo-exato-ii', texto: 'Cálculo exato II(C)', tier: 1 },
        { valor: 'finta-improvisada', texto: 'Finta improvisada(C)', tier: 1 },
        { valor: 'disparo-rapido', texto: 'Disparo rápido(C)', tier: 2 },
        { valor: 'conscentracao', texto: 'Conscentração(C)', tier: 2 },
        { valor: 'chuva-de-projeteis', texto: 'Chuva de projeteis(C)', tier: 3 },
    ],
    assassino: [
        { valor: 'calculo-exato-i', texto: 'Cálculo exato I(C)', tier: 1 },
        { valor: 'finta', texto: 'Finta(C)', tier: 1 },
        { valor: 'apunhalar', texto: 'Apunhalar(C)', tier: 2 },
        { valor: 'furtividade-real', texto: 'Furtividade real(C)', tier: 2 },
        { valor: 'finalizador', texto: 'Finalizador(C)', tier: 3 },
    ],
    gladiador: [
        { valor: 'calculo-exato-i', texto: 'Cálculo exato I(C)', tier: 1 },
        { valor: 'finta', texto: 'Finta(C)', tier: 1 },
        { valor: 'berzerk', texto: 'Berzerk(C)', tier: 2 },
        { valor: 'quebracascos', texto: 'Quebracascos(C)', tier: 2 },
        { valor: 'ate-a-morte', texto: 'Até a morte(C)', tier: 3 },
    ],
    charlatao: [
        { valor: 'especialista', texto: 'Especialista(C)', tier: 1 },
        { valor: 'finta-improvisada', texto: 'Finta improvisada(C)', tier: 1 },
        { valor: 'lingua-de-prata', texto: 'Lingua de prata(C)', tier: 2 },
        { valor: 'marca', texto: 'Marca(C)', tier: 2 },
        { valor: 'lider-tatico', texto: 'Lider tático(C)', tier: 3 },
    ],
    alquimista: [
        { valor: 'especialista', texto: 'Especialista(C)', tier: 1 },
        { valor: 'finta-improvisada', texto: 'Finta improvisada(C)', tier: 1 },
        { valor: 'medico', texto: 'Médico(C)', tier: 2 },
        { valor: 'maos-rapidas', texto: 'Mãos rápidas(C)', tier: 2 },
        { valor: 'reanimacao', texto: 'Reanimação(C)', tier: 3 },
    ],
    artifice: [
        { valor: 'especialista', texto: 'Especialista(C)', tier: 1 },
        { valor: 'finta-improvisada', texto: 'Finta improvisada(C)', tier: 1 },
        { valor: 'aprimorador-treinado', texto: 'Aprimorador treinado(C)', tier: 2 },
        { valor: 'inventario-organizado', texto: 'Inventário organizado(C)', tier: 2 },
        { valor: 'tatica-de-guerrilha', texto: 'Tática de guerrilha(C)', tier: 3 },
    ],
};

const habilidadesPorAura = {
    reforco: [
        { valor: 'parrudo', texto: 'Parrudo(A)', tier: 1 },
        { valor: 'coagular', texto: 'Coagular(A)', tier: 2 },
        { valor: 'forca-maxima', texto: 'Força Máxima(A)', tier: 3 },
    ],    emissao: [
        { valor: 'explosao-magica', texto: 'Explosão Mágica(A)', tier: 1 },
        { valor: 'desvastar', texto: 'Devastar(A)', tier: 2 },
        { valor: 'raio-magico', texto: 'Raio mágico(A)', tier: 3 }
    ],
    transformacao: [
        { valor: 'flecha-precisa', texto: 'Adrenalina(A)', tier: 1 },
        { valor: 'agilizar-tempo', texto: 'Agilizar Tempo(A)', tier: 2 },
        { valor: 'agilizar-tempo-ii', texto: 'Agilizar Tempo II(A)', tier: 3 }
    ],
    materializacao: [
        { valor: 'familiar', texto: 'Familiar(A)', tier: 1 },
        { valor: 'arma-magica', texto: 'Arma Mágica(A)', tier: 2 },
        { valor: 'sutura', texto: 'Sutura(A)', tier: 3 }
    ],
    manipulacao: [
        { valor: 'as-na-manga', texto: 'Ás na manga(A)', tier: 1 },
        { valor: 'especializado', texto: 'Especializado(A)', tier: 2 },
        { valor: 'segunda-chance', texto: 'Segunda chance(A)', tier: 3 }
    ]
};

const habilidadesPorTrilha = {
    envoltura: [
        { valor: 'troca', texto: 'Troca(T)', tier: 1 },
        { valor: 'barganha-insana', texto: 'Barganha Insana(T)', tier: 2 },
        { valor: 'absorcao-vital', texto: 'Absorsão Vital(T)', tier: 3 },
    ],
    expansao: [
        { valor: 'dash', texto: 'Dash(T)', tier: 1 },
        { valor: 'ripostar', texto: 'Ripostar(T)', tier: 2 },
        { valor: 'correcao', texto: 'Correção(T)', tier: 3 }
    ],
    liberacao: [
        { valor: 'calmo-e-preciso', texto: 'Calmo e Preciso(T)', tier: 1 },
        { valor: 'respiro', texto: 'Respiro(T)', tier: 2 },
        { valor: 'comecar-com-tudo', texto: 'Começar com Tudo(T)', tier: 3 }
    ]
};

/**
 * Pega a lista de opções de habilidades com base na classe selecionada.
 * @returns {Array} - Um array de objetos de opção.
 */
function getOpcoesAtuais() {
    const classeSelecionada = campoClasse.value;
    const auraSelecionada = campoAura.value;
    const trilhaSelecionada = campoTrilha.value;
    const nivelPersonagem = parseInt(campoNivel.value) || 0;

    let maxTierAcessivel = 1;
    if (nivelPersonagem >= 13) {
        maxTierAcessivel = 3;
    } else if (nivelPersonagem >= 5) {
        maxTierAcessivel = 2;
    }

    const opcoesBase = [
        { valor: '', texto: '-- Escolha uma habilidade --' }
    ];
    
    const opcoesDaClasse = habilidadesPorClasse[classeSelecionada] || [];
    const opcoesDaAura = habilidadesPorAura[auraSelecionada] || [];
    const opcoesDaTrilha = habilidadesPorTrilha[trilhaSelecionada] || [];

    const opcoesFiltradas = [
    ...opcoesDaAura.filter(habilidade => habilidade.tier <= maxTierAcessivel),
    ...opcoesDaTrilha.filter(habilidade => habilidade.tier <= maxTierAcessivel),
    ...opcoesDaClasse.filter(habilidade => habilidade.tier <= maxTierAcessivel)
    ];
    

    return [...opcoesBase, ...opcoesFiltradas];
}

function getValoresSelecionados() {
    const selects = containerSelects.querySelectorAll('select');
    const valoresUsados = new Set(); // Usamos um Set para evitar duplicatas
    
    selects.forEach(s => {
        if (s.value) { // Ignora o "-- Escolha..."
            valoresUsados.add(s.value);
        }
    });
    return valoresUsados;
}

/* Atualiza as opções de UM ÚNICO select, aplicando a lógica
* de desabilitar opções já usadas.
* @param {HTMLSelectElement} selectElement - O <select> a ser populado
*/
function popularUmSelect(selectElement) {
    const opcoesGlobais = getOpcoesAtuais(); // Opções (filtradas por classe/tier)
    const valoresUsados = getValoresSelecionados(); // O que já foi pego
    const valorAtualDesteSelect = selectElement.value; // O valor que este select JÁ TEM

    // Limpa o select
    selectElement.innerHTML = '';

    opcoesGlobais.forEach(opt => {
        const optionElement = document.createElement('option');
        optionElement.value = opt.valor;
        optionElement.textContent = opt.texto;

        // A LÓGICA DE DESABILITAR:
        // 1. A opção tem valor? (ignora o "-- Escolha...")
        // 2. Esse valor JÁ ESTÁ USADO em algum select?
        // 3. Esse valor NÃO É o que já estava selecionado NESTE select?
        //    (Isso permite que a opção atual permaneça selecionada)
        const estaUsadoPorOutro = valoresUsados.has(opt.valor) && opt.valor !== valorAtualDesteSelect;

        if (estaUsadoPorOutro) {
            optionElement.disabled = true;
            optionElement.textContent += ' (Selecionada)';
        }
        
        selectElement.appendChild(optionElement);
    });

    // Restaura o valor que este select tinha
    selectElement.value = valorAtualDesteSelect;
}

function criarSelectParaNivel(numeroNivel) {
    const wrapperDiv = document.createElement('div');
    wrapperDiv.className = 'select-wrapper';
    const novoLabel = document.createElement('label');
    novoLabel.textContent = `Habilidade do Nível ${numeroNivel}:`;
    const novoSelect = document.createElement('select');
    novoSelect.id = `select-nivel-${numeroNivel}`;

    wrapperDiv.appendChild(novoLabel);
    wrapperDiv.appendChild(novoSelect);
    
    // Chama a função de popular para este select recém-criado
    popularUmSelect(novoSelect);
    
    return wrapperDiv;
}

function atualizarSelectsPorNivel() {
    const nivelDesejado = parseInt(campoNivel.value) || 0;
    const selectsAtuais = containerSelects.querySelectorAll('.select-wrapper').length;

    if (nivelDesejado > selectsAtuais) {
        for (let i = selectsAtuais + 1; i <= nivelDesejado; i++) {
            const novoSelect = criarSelectParaNivel(i);
            containerSelects.appendChild(novoSelect);
        }
    } else if (nivelDesejado < selectsAtuais) {
        while (containerSelects.children.length > nivelDesejado) {
            containerSelects.removeChild(containerSelects.lastChild);
        }
    }
}

/**
 * Atualiza as opções de TODOS os selects de habilidade existentes na tela.
 * É chamado quando a classe do personagem muda.
 */
function atualizarOpcoesDeTodosOsSelects() {
    const todosOsSelects = containerSelects.querySelectorAll('select');
    // Manda cada select se re-popular individualmente
    todosOsSelects.forEach(popularUmSelect);
}

/**
 * Nova função para lidar com a mudança de nível.
 * Quando o nível muda, precisamos:
 * 1. Atualizar as opções de todos os selects que já existem.
 * 2. Adicionar ou remover selects para bater com o novo nível.
 */
function onNivelChange() {
    // Atualiza os selects existentes (nível 1, 2, 3...) com a nova lista de tiers
    atualizarOpcoesDeTodosOsSelects();
    
    // Adiciona/Remove os selects (nível 4, 5...)
    atualizarSelectsPorNivel();
}

containerSelects.addEventListener('change', function(event) {
    // Garante que o evento foi disparado por um SELECT
    if (event.target.tagName === 'SELECT') {
        // Se um select mudou, mandamos TODOS os selects se atualizarem
        // para desabilitar a opção recém-escolhida.
        atualizarOpcoesDeTodosOsSelects();
    }
});

// O 'input' de nível agora chama a nova função 'onNivelChange'
campoNivel.addEventListener('input', onNivelChange);

// O 'change' da classe continua o mesmo
campoClasse.addEventListener('change', atualizarOpcoesDeTodosOsSelects);
campoAura.addEventListener('change', atualizarOpcoesDeTodosOsSelects);
campoTrilha.addEventListener('change', atualizarOpcoesDeTodosOsSelects);

// Chama a função 'onNivelChange' no início para carregar o estado (0)
onNivelChange();

