
Base_regras = {
    Aura : {
        "Reforço" : {
            habilidades : ["Parrudo","Coagular","Força Máxima"]
        },
        "Emissão" : {
            habilidades : ["Explosão Mágica","Devastar","Raio mágico"]
        },
        "Transformação" : {
            habilidades : ["Adrenalina","Agilizar tempo","Agilizar tempo II"]
        },
        "Materialização" : {
            habilidades : ["Familiar","Arma Mágica","Sutura"]
        },
        "Manipulação" :{
            habilidades : ["Ás na manga","Especializado","Segunda chance"]
        },
    },
    Trilha : {
        "Envoltura" : {
            habilidades : ["Troca","Barganha Insana","Absorsão Vital"]
        },
        "Expansão" : {
            habilidades : ["Dash","Ripostar","Correção(ataque e defesa)"]
        },
        "Liberação" : {
            habilidades : ["Calmo e preciso","Respiro","Começar com tudo"]
        }
    },
    Classe : {
        "Mago elemental" : {
            habilidades : ["Atalho do Mago","Finta improvisada","Intensificar","Ciclo arcano","Aniquilação","Aprender Magia"]
        },
        "Místico" : {
            habilidades : ["Atalho do Mago","Finta improvisada","Espaço extra","Agilizar Círculo","Gambiarra do místico","Aprender Magia"]
        },
        "Mago de fronte" : {
            habilidades : ["Atalho do Mago","Finta","Initerrupto","Precisão","Conjuração livre"]
        },
        "Fimbulwinter" : {
            habilidades : ["Atalho do Mago","Finta improvisada","Resistência térmica","Esfriar","Fimbulwinter","Aprender Magia"]
        },
        "Feengari" : {
            habilidades : ["Atalho do Mago","Finta improvisada","Lua artificial","Ascensão Lunar","Transmutação Lunar","Aprender Magia"]
        },
        "Ascendente" : {
            habilidades : ["Atalho do Mago","Finta","Acalmar","Consciência","Harmonia","Aprender Magia"]
        },
        "Espadachim" : {
            habilidades : ["Precisão","Finta","Ataque do trapaceiro","Finta de guerra","Ataque do trapaceiro II(passivo)"]
        },
        "Arma de Corda" : {
            habilidades : ["Precisão","Finta","Prender","Puxar","Zona segura"]
        },
        "Nórdico" : {
            habilidades : ["Precisão","Finta","Iniciador","Máquina de Matar","Aniquilador em área"]
        },
        "Lanceiro" : {
            habilidades : ["Precisão","Finta","Arremesso","Calibrado","Estocada"]
        },
        "Atirador de elite" : {
            habilidades : ["Cálculo exato II","Finta improvisada","Disparo rápido","Conscentração","Chuva de projeteis"]
        },
        "Assassino" : {
            habilidades : ["Cálculo exato I","Finta","Apunhalar","Furtividade real","Finalizador"]
        },
        "Gladiador" : {
            habilidades : ["Cálculo exato I","Finta","Berzerk","Quebracascos","Até a morte"]
        },
        "Charlatão" : {
            habilidades : ["Especialista","Finta improvisada","Lingua de prata","Marca","Lider tático"]
        },
        "Alquimista" : {
            habilidades : ["Especialista","Finta improvisada","Médico","Mãos rápidas","Reanimação"]
        },
        "Artífice" : {
            habilidades : ["Especialista","Finta improvisada","Aprimorador treinado","Inventário organizado","Tática de guerrilha"]
        }
    }
}

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
    var result =  pontosTotais - somaTotal
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

// --- ESTRUTURA DE DADOS PARA HABILIDADES DINÂMICAS ---
const habilidadesPorClasse = {
    guerreiro: [
        { valor: 'ataque-poderoso', texto: 'Ataque Poderoso' },
        { valor: 'investida', texto: 'Investida Feroz' },
        { valor: 'grito-de-guerra', texto: 'Grito de Guerra' }
    ],
    mago: [
        { valor: 'bola-de-fogo', texto: 'Bola de Fogo' },
        { valor: 'raio-congelante', texto: 'Raio Congelante' },
        { valor: 'escudo-arcano', texto: 'Escudo Arcano' }
    ],
    arqueiro: [
        { valor: 'flecha-precisa', texto: 'Flecha Precisa' },
        { valor: 'chuva-de-flechas', texto: 'Chuva de Flechas' },
        { valor: 'tiro-perfurante', texto: 'Tiro Perfurante' }
    ]
};

/**
 * Pega a lista de opções de habilidades com base na classe selecionada.
 * @returns {Array} - Um array de objetos de opção.
 */
function getOpcoesAtuais() {
    const classeSelecionada = campoClasse.value;
    const opcoesBase = [
        { valor: '', texto: '-- Escolha uma habilidade --' }
    ];
    const opcoesDaClasse = habilidadesPorClasse[classeSelecionada] || [];
    return [...opcoesBase, ...opcoesDaClasse];
}

function criarSelectParaNivel(numeroNivel) {
    const wrapperDiv = document.createElement('div');
    wrapperDiv.className = 'select-wrapper';
    const novoLabel = document.createElement('label');
    novoLabel.textContent = `Habilidade do Nível ${numeroNivel}:`;
    const novoSelect = document.createElement('select');
    novoSelect.id = `select-nivel-${numeroNivel}`;

    const opcoes = getOpcoesAtuais(); // Pega as opções dinamicamente
    
    opcoes.forEach(opt => {
        const optionElement = document.createElement('option');
        optionElement.value = opt.valor;
        optionElement.textContent = opt.texto;
        novoSelect.appendChild(optionElement);
    });

    wrapperDiv.appendChild(novoLabel);
    wrapperDiv.appendChild(novoSelect);
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
    const novasOpcoes = getOpcoesAtuais();

    todosOsSelects.forEach(select => {
        const valorSelecionadoAnteriormente = select.value;
        select.innerHTML = ''; // Limpa as opções atuais

        novasOpcoes.forEach(opt => {
            const optionElement = document.createElement('option');
            optionElement.value = opt.valor;
            optionElement.textContent = opt.texto;
            select.appendChild(optionElement);
        });

        select.value = valorSelecionadoAnteriormente;
    });
}

// --- CONECTANDO OS EVENTOS ---
campoNivel.addEventListener('input', atualizarSelectsPorNivel);
campoClasse.addEventListener('change', atualizarOpcoesDeTodosOsSelects);

atualizarSelectsPorNivel();