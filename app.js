const btnMenu = document.getElementById('toggle-menu');
const menuLateral = document.querySelector('.menu-lateral');

btnMenu.addEventListener('click', () => {
    menuLateral.classList.toggle('aberto');
});



function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = '<section class = "resultados-pesquisa"><div class="item-resultado"><h2>Nada foi encontrado</h2><p class = "descricao-meta">Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p></div></section>'
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let ong of ONGsNordeste) {
        titulo = ong.nome.toLowerCase()
        descricao = ong.descricao.toLowerCase()
        tags = ong.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${ong.nome}</a>
                </h2>
                <p class="descricao-meta">${ong.descricao}</p>
                <a href=${ong.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = '<section class = "resultados-pesquisa"><div class="item-resultado"><h2>Nada foi encontrado</h2><p class = "descricao-meta">Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p></div></section>'
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
