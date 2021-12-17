// fetch('https://pokeapi.co/api/v2/pokemon/2')
//   .then((response) => {
//     return response.json();
//   })
//   .then((pokemon) => {
//     console.log(pokemon);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// =============================Render test pokemon.name ============
// fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=40')
//   .then((r) => r.json())
//   .then((response) => response.results)
//   .then((result) => {
//     const list = document.querySelector('.list');
//     const items = result.reduce(
//       (acc, item) => (acc += `<li>${item.name}</li>`),
//       ''
//     );
//     list.innerHTML = items;
//   });
