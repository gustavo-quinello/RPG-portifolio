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

var PontosResultante = document.getElementById("Pontos_disponiveis")
var pontosTotais = parseInt(document.getElementById("nivel").value)
var forca = parseInt(document.getElementById("atributo-Força").value)
var destreza = parseInt(document.getElementById("atributo-Destreza").value)
var vigor = parseInt(document.getElementById("atributo-Vigor").value)
var intelecto = parseInt(document.getElementById("atributo-Intelecto").value)
var presenca = parseInt(document.getElementById("atributo-Presença").value)

function pontosDisponiveis() {
    const pontos = pontosTotais - (forca + destreza + vigor + intelecto + presenca)
    
    PontosResultante.innerHTML = pontosTotais
}