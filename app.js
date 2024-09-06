
function pesquisar (){
    let section = document.getElementById("resultados-pesquisa");

    let resultados = '';

    for (let ong of ONGsNordeste){
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="${ong.site}"target="_blank">${ong.nome}</a>
            </h2>
            <p class="descricao-meta">${ong.descricao}</p>
            <a href="${ong.link}" target="_blank">Entre em contato</a>
        </div>`
    };  

    section.innerHTML = resultados;

}
