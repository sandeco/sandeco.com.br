// Animações baseadas no scroll - inspirado no physia.com.br
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    // Função para verificar se o elemento está visível na tela
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        // Elemento está visível quando pelo menos 20% dele está na tela
        return (
            rect.top <= windowHeight * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Função para animar elemento
    function animateElement(element) {
        if (element.classList.contains('animated')) return;
        
        const animation = element.getAttribute('data-animation');
        const delay = parseFloat(element.getAttribute('data-delay')) || 0;
        
        setTimeout(() => {
            element.style.animation = `${animation} 1s ease-out forwards`;
            element.classList.add('animated');
        }, delay * 1000);
    }
    
    // Função para verificar e animar elementos visíveis
    function checkAndAnimateElements() {
        animatedElements.forEach(element => {
            if (isElementInViewport(element)) {
                animateElement(element);
            }
        });
    }
    
    // Verificar elementos na carga inicial
    checkAndAnimateElements();
    
    // Verificar elementos no scroll
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(checkAndAnimateElements, 10);
    });
    
    // Verificar elementos no resize da janela
    window.addEventListener('resize', function() {
        checkAndAnimateElements();
    });
    
    // Verificar elementos quando a página terminar de carregar
    window.addEventListener('load', function() {
        setTimeout(checkAndAnimateElements, 100);
    });
});

// Efeito de parallax suave para a frase de destaque
document.addEventListener('DOMContentLoaded', function() {
    const fraseDestaque = document.querySelector('.frase-destaque');
    
    if (fraseDestaque) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            fraseDestaque.style.transform = `translateY(${rate}px)`;
        });
    }
});

// Efeito de hover suave para o botão
document.addEventListener('DOMContentLoaded', function() {
    const btnInscricao = document.querySelector('.btn-inscreva-se');
    
    if (btnInscricao) {
        btnInscricao.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        btnInscricao.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }
}); 