

var displayPontos = document.getElementById("Pontos_disponiveis")
var atributo = document.querySelectorAll(".atributo")

function pontosDisponiveis() {
    var pontosTotais = parseInt(document.getElementById("nivel").value)
    var forca = parseInt(document.getElementById("atributo-Força").value)
    var destreza = parseInt(document.getElementById("atributo-Destreza").value)
    var vigor = parseInt(document.getElementById("atributo-Vigor").value)
    var intelecto = parseInt(document.getElementById("atributo-Intelecto").value)
    var presenca = parseInt(document.getElementById("atributo-Presença").value)

    
    const pontos = pontosTotais + 5 - (forca + destreza + vigor + intelecto + presenca)
    displayPontos.textContent = pontos
}

atributo.forEach(input => {
    input.addEventListener("input",pontosDisponiveis)
})

