const teams = [
  {
    name: "Manchester City",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
    stats: { del: 89, mid: 85, def: 87 }
  },
  {
    name: "Real Madrid",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    stats: { del: 88, mid: 86, def: 85 }
  },
  {
    name: "Paris Saint-Germain",
    logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg",
    stats: { del: 89, mid: 84, def: 81 }
  },
  {
    name: "FC Barcelona",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    stats: { del: 87, mid: 85, def: 84 }
  },
  {
    name: "Liverpool",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    stats: { del: 86, mid: 84, def: 85 }
  }
];

function generateTeams() {
  const random1 = teams[Math.floor(Math.random() * teams.length)];
  let random2;
  do {
    random2 = teams[Math.floor(Math.random() * teams.length)];
  } while (random1.name === random2.name);

  document.getElementById("team1").innerHTML = `
    <img src="${random1.logo}" alt="${random1.name}" />
    <h3>${random1.name}</h3>
    <p>DEL: ${random1.stats.del} | MED: ${random1.stats.mid} | DEF: ${random1.stats.def}</p>
  `;

  document.getElementById("team2").innerHTML = `
    <img src="${random2.logo}" alt="${random2.name}" />
    <h3>${random2.name}</h3>
    <p>DEL: ${random2.stats.del} | MED: ${random2.stats.mid} | DEF: ${random2.stats.def}</p>
  `;
}

window.onload = generateTeams;
