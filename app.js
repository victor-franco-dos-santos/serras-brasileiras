function pesquisar() {


    //seleciona no index.html a seção dos resultados da pesquisa pelo ID.
    let section = document.getElementById("resultados-pesquisa");

    // referente a "<input type="text" placeholder="Digite sua busca" id="campo-pesquisa">" no index.html
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    campoPesquisa = campoPesquisa.toLowerCase();

    console.log(campoPesquisa);

    //Atribui uma string vazia à variável "resultados", deixando o espaço preparado para receber os dados da base de dados que constituirão os resultados da busca seguindo a estrutura HTML determinada no laço "for" posteriormente.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    let nenhumResultado = "<p>Nenhum resultado foi encontrado. Tente pesquisar novamente.</p>"

    // Itera sobre os itens da lista "dados", atribuindo os valores de cada elemento à variável dado.
    for (let dado of dados)  {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase()
        // Compara o valor da pesquisa com uma string vazia para, caso seja vazia, não retorne todos os resultados.
        if (campoPesquisa == "") {
            // inteja um parágrafo no documento html para informar que, como a busca é vazia, não encontrou nenhum resultado.
            section.innerHTML = nenhumResultado

            // finaliza a função se a string for vazia e ignora o restante da função.
            return
        }

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //Adiciona cada um dos resultados da busca incluindo a div determinada na string a cada iteração atualizando os dados de acordo com os valores do laço "for".
            // Os acentos graves permitem o imprimir o conteúdo da variável "dado" diretamente dentro da string.
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href=${dado.link} target="_blank">${dado.titulo}</a>
                </h2>
                <p>${dado.descricao}</p>
            
            </div>
            `;
        }

    }

    // Altera o valor da variável resultados para o valor de nenhumResultado para injetar esse trecho no documento html.
    if (!resultados) {
        resultados = nenhumResultado;
    }

    // Injeta o conteúdo HTML criado pela função pesquisar() no documento HTML, dentro de <section id="resultados-pesquisa">
    section.innerHTML = resultados;

}



