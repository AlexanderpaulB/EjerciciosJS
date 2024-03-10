const divs = document.querySelectorAll('.fn-insert-here');

for (let div of divs) {
    const p = document.createElement('p');
    p.textContent = 'Voy dentro';
    div.appendChild(p, div.nextSibling);
}