//SELEÇÃO DOS PLANOS
const planos = [
    document.querySelector('.conteudoprincipal__plano--mensal'),
    document.querySelector('.conteudoprincipal__plano--trimestral'),
    document.querySelector('.conteudoprincipal__plano--semestral')
];

//BOOLEAN PARA "ESTÁ VENDO"
function verificarVisibilidade(elemento) {
    const rect = elemento.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= window.innerHeight;
}

//ADD CLASS
function animarPlanos() {
    planos.forEach(plano => {
        if (verificarVisibilidade(plano)) {
            plano.classList.add('conteudoprincipal__plano--animar');
        }
    });
}

//SCROLL ATIVA ANIMAÇÃO
window.addEventListener('scroll', animarPlanos);

//EXEC DA FUNÇÃO
animarPlanos();