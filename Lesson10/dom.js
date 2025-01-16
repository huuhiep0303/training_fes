const pokemon = [
    {
        name: 'bulbasaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    },
    {
        name: 'ivysaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
    },
    {
        name: 'venusaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
    }
]

// console.log(pokemon.length);
const pok_name = document.querySelector("._name");
const pok_img = document.querySelector("._img");
const buttonMenu = document.querySelector(".evolve");
let index = 0;

buttonMenu.onclick = function() {
    pok_name.innerText = pokemon[index].name;
    pok_img.src = pokemon[index].image;
    index = (index + 1) % pokemon.length;
}