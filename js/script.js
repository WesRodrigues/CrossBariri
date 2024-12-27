//Seleção de elemento
const imagem = document.querySelector('.fotoBarra');
const referencias2018 = document.querySelector('.conteudoprincipal__referencias--2018');
const referenciasProfissionalismo = document.querySelector('.conteudoprincipal__referencias--profissionalismo');


//Função visivel ou não na tela
function verificarVisibilidade(elemento) {
    const rect = elemento.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

    //Add classe visivel ao elemento
    function verificarVisibilidadeElementos() {
        if (verificarVisibilidade(referencias2018)) {
            referencias2018.classList.add('visivel');
        }
        if (verificarVisibilidade(referenciasProfissionalismo)) {
            referenciasProfissionalismo.classList.add('visivel');
        }
        if (verificarVisibilidade(imagem)) {
            imagem.classList.add('visivel');
        }
    }
    


//Evento scroll para ativar a função
window.addEventListener('scroll', verificarVisibilidadeElementos);

//Verifica se a imagem está visivel
verificarVisibilidadeElementos();