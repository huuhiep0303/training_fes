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
    },
    {
        name: "charmander",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    {
        name: "charmeleon",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
    },
    {
        name: "charizard",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
    },
    {
        name: "squirtle",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    {
        name: "wartortle",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
    },
    {
        name: "blastoise",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
    },
    {
        name: "caterpie",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
    },
    {
        name: "metapod",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
    },
    {
        name: "butterfree",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
    },
    {
        name: "weedle",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
    },
    {
        name: "kakuna",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"
    },
    {
        name: "beedrill",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
    },
    {
        name: "pidgey",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
    },
    {
        name: "pidgeotto",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"
    },
    {
        name: "pidgeot",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"
    }
]

// console.log(pokemon.length);
// const pok_name = document.querySelector("._name");
// const pok_img = document.querySelector("._img");
// const buttonMenu = document.querySelector(".evolve");
// let index = 0;

// buttonMenu.onclick = function() {
//     pok_name.innerText = pokemon[index].name;
//     pok_img.src = pokemon[index].image;
//     index = (index + 1) % pokemon.length;
// }

const container = document.querySelector(".container");
const buttonadd = document.querySelector(".button");

buttonadd.onclick = function() {
    const quantity = document.querySelector(".quantity").value;
    container.innerHTML = ""; // Clear the container before adding new Pokémon

    for (let i = 0; i < quantity && i < pokemon.length; i++) {
        const poke = pokemon[i];
        const element = document.createElement("div");
        element.className = "elements";
        element.innerHTML = `
            <div class="id">#${i + 1}</div>
            <div class="picture">
                <img src="${poke.image}" alt="${poke.name}">
            </div>
            <div class="name">${poke.name}</div>
            <div class="categories">
                <div class="category">Grass</div>
                <div class="category">Poison</div>
            </div>
        `;
        container.appendChild(element);
    }
}
