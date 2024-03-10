const input = document.querySelector('input');
input.addEventListener('focus', recogerDatos)

function recogerDatos(event) {
    console.log(event.target.value)

}

