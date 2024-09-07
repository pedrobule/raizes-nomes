function pesquisar() {

    let section = document.getElementById("pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == "") {
        section.innerHTML = "<h1>Pesquisa Inválida</h1>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        if (titulo.includes(campoPesquisa)) {
            resultados += `
            <div class="resultado-pesquisa">
                    <img src=${dado.img}>
                    <h3>${dado.titulo}</h3>
                    <p>${dado.p1}</p>
                    <p>${dado.p2}</p>
                    <p>${dado.p3}</p>
                    <p>${dado.p4}</p>
                    <p>${dado.p5}</p>
                    <p>${dado.p6}</p>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<h1>Nada foi encontrado! Envie sua sugentão no campo Fale Conosco</h1>"
    }

section.innerHTML = resultados    
}



