window.portfolioConfig = {
  // Personal Information
  personal: {
    name: "Nyte",
    roleAccent: "Lua &",
    roleHighlight: "Systems.",
    description: "I build clean, optimized Roblox <code>systems</code>, from <code>frameworks</code> to <code>complex systems</code>, <code>UI scripting</code>, <code>datastores</code>, and more.",
    yearsScripting: "3+",
    projectsBuilt: "10+",
    bugsFixed: "∞",
    discordUsername: "_nyte._",
    discordUserId: "1403162458134155356",
    robloxName: "nyytte",
    robloxLink: "https://www.roblox.com/users/9134288901/profile",
    xUsername: "_nyyte_",
    xLink: "https://x.com/_nyyte_",
    isOpenToWork: true,
    statusText: "Available",
    specialty: "Systems & OOP",
    stack: "Luau · Roblox"
  },

  // About Section text paragraphs
  aboutParagraphs: [
    "Hi! I'm Nyte, an 18-year-old Roblox developer from Spain with 3 years of experience creating maintainable, high-performance code. I build systems that last for a game's entire lifecycle, from simple scripts to complex mechanics depending on the project’s needs.",
    "I use professional tools like Rojo and Wally, and strict Luau type-checking to catch bugs early. From server-authoritative combat loops to modular game state systems, I focus on clean and efficient design.",
    "I can take a project from idea to launch, using advanced OOP, metatables, and large-scale code organization. If you need a developer to build solid Roblox systems, I’m ready to help."
  ],

  // Skills
  skills: [
    {
      icon: "🌙",
      name: "Luau",
      description: "Advanced OOP with metatables, type annotations, and strict type-safe patterns.",
      mastery: 95
    },
    {
      icon: "🚀",
      name: "Performance",
      description: "Client-only visuals, server-authoritative logic, deferred streaming, and profiler-driven optimization.",
      mastery: 99
    },
    {
      icon: "🧩",
      name: "Scalable Architecture",
      description: "Modular, reusable systems designed for multi-project use — plug-and-play controllers, services, and configs.",
      mastery: 90
    },
    {
      icon: "🔧",
      name: "Rojo & Wally",
      description: "Professional external workflow with Rojo for syncing, Wally for package management, and Rokit for toolchains.",
      mastery: 90
    },
    {
      icon: "⚛️",
      name: "React-Luau & Charm",
      description: "Declarative UI with React-Luau, Charm for state management, and Ripple for smooth animations.",
      mastery: 85
    },
    {
      icon: "🔁",
      name: "Networking",
      description: "Custom networking framework (Networker) for secure client-server communication, published on Wally.",
      mastery: 92
    },
    {
      icon: "💾",
      name: "Data Persistence",
      description: "Player data with ProfileStore, session locking, and reliable save/load patterns.",
      mastery: 85
    },
    {
      icon: "⚙️",
      name: "Physics & Combat",
      description: "Shapecast hitboxes, raycasting, custom movement controllers, and server-authoritative combat.",
      mastery: 80
    }
  ],

  // Projects
  projects: [
    {
      tags: [
        { name: "Game", class: "tag-sys" },
        { name: "Luau", class: "tag-lua" }
      ],
      status: "wip", // "wip" or "finished"
      title: "Freeze Tag",
      description: "A tactical PvP round-based Ice Tag game featuring momentum-driven movement, strategic sword combat, and a team objective system centered on freezing and thawing opponents.",
      details: "Freeze Tag is my current long-term project. It is a fast-paced PvP Ice Tag game where teams compete to immobilize opponents while saving their own. Sword strikes freeze enemies into solid ice blocks, requiring teammates to quickly use a melter to thaw them before a death timer runs out. Success depends on mastering momentum-based movement, skillfully using throwables like grenades, and precise sword combat, rewarding players who can navigate the arena effectively to defeat the opposing team or secure key objectives.",
      links: [
        { text: "Throwables Showcase 1", url: "https://streamable.com/l88s4c", icon: "🚀" },
        { text: "Throwables Showcase 2", url: "https://streamable.com/vuwg38", icon: "💨" },
        { text: "Freezing Showcase", url: "https://streamable.com/nn7w55", icon: "🧊" },
        { text: "Control point showcase", url: "https://streamable.com/1d9pbe", icon: "🎯" }
      ]
    },
    {
      tags: [
        { name: "Framework", class: "tag-oop" },
        { name: "Open Source", class: "tag-open" }
      ],
      status: "finished",
      title: "ControllerManager",
      description: "A two-phase module loader for character controllers with automatic lifecycle management, parallel loading, and built-in retry logic.",
      details: "The ControllerManager is a modular system that organizes the game controllers and services. It follows a three-phase lifecycle: Construction, Initialization, and Start, loading modules in parallel using Promise package while safely handling dependencies between systems. It includes built-in cleanup using Janitor and manages both character-specific and persistent player controllers, providing a simple and reliable framework for gameplay logic.",
      links: [
        { text: "Source Code", url: "https://github.com/YkXero/controllermanager", icon: "🔗" },
        { text: "Wally Package", url: "https://wally.run/package/ykxero/controllermanager", icon: "📦" }
      ]
    },
    {
      tags: [
        { name: "Available", class: "tag-sys" },
        { name: "Commissions Open", class: "tag-lua" }
      ],
      status: "wip",
      title: "Your Project Here",
      description: "I'm currently taking on new commissions. Let's build your next game core systems together!",
      details: "I’m currently available for short-term commissions. If your project needs robust, scalable Luau code, feel free to reach out and discuss what you’d like built!",
      links: [
        { text: "Contact Me", url: "#contact", icon: "💬" }
      ]
    }
  ],

  // Feedback / Testimonials
  feedback: [
    // Example:
    // {
    //   name: "ClientName",
    //   role: "Game Owner",
    //   discordUserId: "123456789012345678", // Put their ID here to fetch avatar!
    //   avatarUrl: "URL", // (Optional fallback if Discord ID fetch fails)
    //   text: "Nyte delivered exactly what I needed. Clean code, fast turnaround.",
    //   rating: 5
    // }
    {
      name: "Test",
      role: "Game Owner",
      discordUserId: "934568920285847552",
      text: "Test test test test test test test test test test test test test test test test test test test ",
      rating: 5
    },
    {
      name: "Test",
      role: "Game Owner",
      discordUserId: "1176142736169115668",
      text: "Test test test test test test test test test test test test test test test test test test test ",
      rating: 5
    },
    {
      name: "Test",
      role: "Game Owner",
      discordUserId: "741374651288256583",
      text: "Test test test test test test test test test test test test test test test test test test test ",
      rating: 5
    },
    {
      name: "Test",
      role: "Game Owner",
      discordUserId: "994345953559580753",
      text: "Test test test test test test test test test test test test test test test test test test test ",
      rating: 5
    },
    {
      name: "Test",
      role: "Game Owner",
      discordUserId: "937769033435074581",
      text: "Test test test test test test test test test test test test test test test test test test test ",
      rating: 5
    },
    {
      name: "Test",
      role: "Game Owner",
      discordUserId: "1012172995189559386",
      text: "Test test test test test test test test test test test test test test test test test test test ",
      rating: 5
    }

  ],

};
