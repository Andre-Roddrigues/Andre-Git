function changeColor(card) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.backgroundColor = '#f0f0f0';
    });
    document.getElementById(card).style.backgroundColor = '#3498db';
}