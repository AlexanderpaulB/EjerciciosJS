
//ARRAY TRATADO.
let resultadoArray = [];
let cardPokemon$$;
let cardInput$$;





//Funcion para sacar todos los pokemons
const sacarPokemons = async () => {

    for (let i = 1; i <= 151; i++ ){

        const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`) 
        const requestAPI = await request.json();

        resultadoArray = [...resultadoArray, requestAPI];

    }
    
}

const mapeadoPokemon = (results) => {

   return results.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
       img: pokemon.sprites.other['official-artwork'].front_default,
       type: pokemon.types.map(type => type.type.name).join(', ')
    
    }));

}
const pintarPokemons = (allpokemons) => {
    
    cardPokemon$$.innerHTML = "";

    for (const allpokemons2 of allpokemons) {
    

       // Creamos Logo pokemon
        
         //Creamos pokemon
        let divPokemons = document.createElement("div");
        divPokemons.className = "pokemon-card";

        //Creamos por cada pokemon el nombre del pokemon
        let pokemonNombre = document.createElement("h3");
        pokemonNombre.className = "pokemon-name";
        pokemonNombre.textContent = allpokemons2.name;

        //Creamos la imagen con el link de la imagen de la API --> API
        let pokemonImagen = document.createElement("img");
        pokemonImagen.setAttribute("src", allpokemons2.img);
        pokemonImagen.className = "pokemon-img";

        let pokemonTipo = document.createElement("p");
        pokemonTipo.classTipo = "pokemon.tipo";
        pokemonTipo.textContent = allpokemons2.type;

        cardPokemon$$.appendChild(divPokemons);
        divPokemons.appendChild(pokemonNombre);
        divPokemons.appendChild(pokemonImagen);
        divPokemons.appendChild(pokemonTipo);
        
        


    }

}


const crearInput = () => {

    let input$$ = document.createElement('input');
    input$$.className = "input-class";
    input$$.placeholder = "Elige tu pokemon!";

    cardInput.appendChild(input$$);

    input$$.addEventListener("input", () => buscarPokemon(input$$.value, resultadoArray))


}


buscarPokemon = (input, resultado) => {


    var mapeoPokemon = mapeadoPokemon(resultado);
    let textoInputminu = input.toLowerCase();

    let filtropokemon = mapeoPokemon.filter((recorridoPokemons) => recorridoPokemons.name.includes(textoInputminu));
    
    pintarPokemons(filtropokemon);

}

const init = async () => {

    await sacarPokemons();
    pokemon = mapeadoPokemon(resultadoArray);

    console.log(resultadoArray);

    pintarPokemons(pokemon);
    crearInput();
}

window.onload = () => {

    cardPokemon$$ = document.querySelector(".card-pokemon");
    cardInput = document.querySelector(".buscador");
    init();

};










