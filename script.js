import { loadCompetitive } from "./main/content/list-player-competitive-warfare.js";

window.loadCompetitive = loadCompetitive;

// HEADER
const header = document.createElement("div");
header.className = "header";
header.innerHTML = `
    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMpnTvmtxUawB9vnmgFPhR7x4Bceel8wq8Kuh-T5K-3_3LnYklgh-qvYXEhRIBZMefx-SQ8r5cLWtVaCcn-TNmYFwN6KLOk4JxrJJYkkcR7adtSZ0jHi-J-oJ-ZYRKCWpFyLqcDfvl5AbZGIfo0qefm_q3zKpliLSc5JbW_2N3qUGoW7zPn9O4T4g1xK4/s320/178089.jpg" width="40">
`;

// HERO
const hero = document.createElement("div");
hero.className = "hero";
hero.innerHTML = `
    <h2>Welcome To Extreme Unit</h2>
    <p>Top 12 Delta Force Mobile Clan</p>
`;
// FEATURES DATA
const data = [
    { title: "Anouncement Clan", desc: "Chat Meo" },
    { title: "Arsip Tournament Competitive", desc: "Tanya Ipan ae lah." },
    { title: "Divisi", desc: "Tanya SI MAUNGR7" },
    { title: "Event", desc: "-" },
    { title: "Community ", desc: "-" },
  {
    title: "List Player Competitive [Warfare]",
    desc: "-",
    action: "loadCompetitive"
  }
];

// FEATURES CONTAINER
const features = document.createElement("div");
features.className = "features";

// LOOP ISI FEATURES
data.forEach(item => {
  const box = document.createElement("div");
  box.className = "feature";

  box.innerHTML = `
    <h3>${item.title}</h3>
    <p>${item.desc}</p>
  `;

  // 👉 ini yang bikin bisa diklik
  if (item.action) {
    box.onclick = () => {
      window[item.action]();
    };
  }

  features.appendChild(box);
});

// FOOTER
const footer = document.createElement("div");
footer.className = "footer";
footer.innerHTML = `
    <p>&copy; 2026 Extreme Unit. All rights reserved.</p>
`;

// RENDER KE BODY
document.body.append(header, hero, features, footer);