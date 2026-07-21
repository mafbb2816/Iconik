document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.grid-perfumes');
    if (!container) return;

    const cards = Array.from(container.querySelectorAll('.card'));
    const disponibles = [];
    const agotados = [];

    cards.forEach(card => {
        const esAgotado = card.querySelector('.esgotado') || card.textContent.toUpperCase().includes('ESGOTADO');
        (esAgotado ? agotados : disponibles).push(card);
    });

    [...disponibles, ...agotados].forEach(card => container.appendChild(card));
});
