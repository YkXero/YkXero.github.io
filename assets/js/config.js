window.portfolioConfig = {
  // Personal Information
  personal: {
    name: "Nyte",
    roleAccent: "Lua &",
    roleHighlight: "Systems.",
    description: "I build clean, optimized Roblox systems — from <code>game loops</code> to full <code>frameworks</code>. Server-side logic, custom UIs, datastores, and everything in between.",
    yearsScripting: "3+",
    projectsBuilt: "10+",
    bugsFixed: "∞",
    githubUsername: "YkXero",
    githubLink: "https://github.com/YkXero",
    robloxLink: "https://www.roblox.com/", // Add your Roblox profile link here
    isOpenToWork: true,
    statusText: "Available",
    specialty: "Systems & OOP",
    stack: "Luau · Roblox"
  },

  // About Section text paragraphs
  aboutParagraphs: [
    "Hey! I'm Nyte — a Roblox scripter who cares about writing code that's actually maintainable. No spaghetti scripts, no LocalScript-everything hacks. Just clean, modular Luau built to last.",
    "I got into scripting because I wanted to build the games I couldn't find. A few years later I'm still doing exactly that — and helping others do the same.",
    "I'm comfortable taking a project from idea to shipped: system design, implementation, testing, and optimization. If you need a scripter who can own a feature end-to-end, let's talk."
  ],

  // Skills
  skills: [
    {
      icon: "🌙",
      name: "Luau / Lua",
      description: "Core scripting for all game logic, modules, and systems.",
      mastery: 95
    },
    {
      icon: "🔁",
      name: "RemoteEvents",
      description: "Client-server communication, replication, and anti-exploit patterns.",
      mastery: 90
    },
    {
      icon: "💾",
      name: "DataStore",
      description: "Persistent player data with ProfileService, DataStore2, and retries.",
      mastery: 85
    },
    {
      icon: "🖼️",
      name: "UI / TweenService",
      description: "Custom GUIs, animations, and responsive layout.",
      mastery: 80
    },
    {
      icon: "🏗️",
      name: "OOP & Modules",
      description: "Clean architecture using metatables, Knit, and Nevermore.",
      mastery: 88
    },
    {
      icon: "⚙️",
      name: "Physics & Raycasting",
      description: "Custom movement, hit detection, and viewport manipulation.",
      mastery: 75
    }
  ],

  // Projects
  projects: [
    {
      tags: [
        { name: "Luau", class: "tag-lua" },
        { name: "Combat", class: "tag-sys" }
      ],
      title: "Melee Combat Framework",
      description: "Hitbox detection, combo chains, and lag-compensated registration. Fully server-authoritative.",
      link: "https://github.com/YkXero"
    },
    {
      tags: [
        { name: "Luau", class: "tag-lua" },
        { name: "OOP", class: "tag-oop" },
        { name: "Open Source", class: "tag-open" }
      ],
      title: "Inventory & Equipment System",
      description: "Module-based inventory with drag-and-drop UI, DataStore persistence, and equip logic.",
      link: "https://github.com/YkXero"
    },
    {
      tags: [
        { name: "Luau", class: "tag-lua" },
        { name: "Admin", class: "tag-sys" }
      ],
      title: "Admin Command Handler",
      description: "Lightweight, extensible admin system with permission levels and prefix parsing.",
      link: "https://github.com/YkXero"
    },
    {
      tags: [
        { name: "Luau", class: "tag-lua" },
        { name: "OOP", class: "tag-oop" }
      ],
      title: "NPC Dialogue & Quest Engine",
      description: "Branching dialogue trees, quest tracking, and reward dispatch with a clean API.",
      link: "https://github.com/YkXero"
    }
  ],

  // Code Block in About Section
  aboutCodeBlock: `
<span class="cm">-- nyte.lua</span>
<br><span class="kw">local</span> <span class="fn">Nyte</span> = {}
<br>
<br><span class="fn">Nyte</span>.languages  = { <span class="str">"Luau"</span>, <span class="str">"Lua 5.1"</span> }
<br><span class="fn">Nyte</span>.frameworks = { <span class="str">"Knit"</span>, <span class="str">"Nevermore"</span> }
<br><span class="fn">Nyte</span>.github     = <span class="str">"YkXero"</span>
<br><span class="fn">Nyte</span>.available  = <span class="kw">true</span>
<br>
<br><span class="kw">return</span> <span class="fn">Nyte</span>
`
};
