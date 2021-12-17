fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=40").then((e=>e.json())).then((e=>e.results)).then((e=>{const t=document.querySelector(".list"),n=e.reduce(((e,t)=>e+`<li>${t.name}</li>`),"");t.innerHTML=n}));
//# sourceMappingURL=module10.852b14d9.js.map
