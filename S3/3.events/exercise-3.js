const input = document.getElementById('myInput');

    input.addEventListener('input', function (event) {

      console.log('Valor del input:', event.target.value);
    });