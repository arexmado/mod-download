const mods = [
  {name:"모드1", image:"images/mod1.png", file:"mods/mod1.zip", desc:"모드1 설명"},
  {name:"모드2", image:"images/mod2.png", file:"mods/mod2.zip", desc:"모드2 설명"}
];

const modList = document.getElementById("mod-list");

mods.forEach(mod => {
  const div = document.createElement("div");
  div.className = "mod";
  div.innerHTML = `
    <img src="${mod.image}" alt="${mod.name}">
    <h2>${mod.name}</h2>
    <p>${mod.desc}</p>
    <a href="${mod.file}" download>다운로드</a>
  `;
  modList.appendChild(div);
});
