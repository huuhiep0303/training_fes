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


const container = document.querySelector(".container");
const buttonadd = document.querySelector(".button");
let index = container.children.length;

buttonadd.onclick = function() {
    // DOM 
    const quantity = document.querySelector(".quantity").value;
    const currentCount = container.children.length; 
    for (let i = currentCount; i < currentCount + parseInt(quantity) && i < pokemon.length; i++) {
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
    index = container.children.length;
}


const button_auto = document.querySelector(".button_auto")

function add_auto() {
    if (index < pokemon.length) {
        const poke = pokemon[index];
        const element = document.createElement("div");
        element.className = "elements";
        element.innerHTML = `
            <div class="id">#${index + 1}</div>
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
        index++;
    }
}

button_auto.onclick = function() {
    setInterval(add_auto, 1000);
}