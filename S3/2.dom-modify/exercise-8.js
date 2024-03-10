const segundoDiv = document.querySelector('div:last-child');
const body = document.body;

const p = document.createElement('p')
p.textContent = 'lo que sea'
body.insertBefore(p, segundoDiv)