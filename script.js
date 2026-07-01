document.addEventListener('DOMContentLoaded', () => {
    const botaoCurtir = document.getElementById('btn-curtir');
    const contador = document.getElementById('contador');
    let curtidas = 0;

    botaoCurtir.addEventListener('click', () => {
        curtidas++;
        contador.textContent = curtidas;
        
        // Efeito visual simples ao clicar
        botaoCurtir.style.transform = 'scale(0.95)';
        setTimeout(() => {
            botaoCurtir.style.transform = 'scale(1)';
        }, 100);
    });
});