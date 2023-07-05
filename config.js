const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Algum tempo depois...');
    }, 3000)
});
promise.then(response => {
    console.log(response);
});
  console.log('Imediato!');


const buscarPokemon = fetch('https://www.pokemon.com/br/');
buscarPokemon
.then(res => {
    return res.json();
})
.then(res => {
    console.log(res);
});


const pokemons = [];
const neededPokemons = [ 1, 2, 3 ];
for (let i = 0; i < neededPokemons.length; i++) {
  pokemons.push(
    fetch(`https://pokeapi.co/api/v2/pokemon/${ neededPokemons[i] }/`)
      .then(res => res.json())
  );
}
await Promise.all(pokemons);
console.log(pokemons);