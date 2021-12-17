fetch("https://newsapi.org/v2/everything?q=cat",{headers:{Authorization:"b29d46388ca946e8ba8f7c84607dbf2d"}}).then((e=>e.json())).then((({articles:e})=>console.log(e))).catch((e=>{console.error(e)}));
//# sourceMappingURL=index.690daacd.js.map
