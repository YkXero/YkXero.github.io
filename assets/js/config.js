window.portfolioConfig = {
  // Personal Information
  personal: {
    name: "Nyte",
    roleAccent: "Roblox Lua Developer",
    roleHighlight: "",
    description: "I build clean, optimized Roblox <code>systems</code>, from <code>frameworks</code> to <code>complex systems</code>, <code>UI scripting</code>, <code>datastores</code>, and more.",
    yearsScripting: "3+",
    gamesDeveloped: "2+",
    bugsFixed: "∞",
    discordUsername: "_nyte._",
    discordUserId: "1403162458134155356",
    robloxName: "nyytte",
    robloxLink: "https://www.roblox.com/users/9134288901/profile",
    xUsername: "_nyyte_",
    xLink: "https://x.com/_nyyte_",
    isOpenToWork: true,
    statusText: "Available",
    specialty: "Systems",
    stack: "Luau · Roblox"
  },

  // About Section text paragraphs
  aboutParagraphs: [
    "Hi! I'm Nyte, an 18-year-old Roblox developer from Spain with 3 years of experience creating maintainable, high-performance code. I specialize in building robust systems that last for a game's entire lifecycle, from simple scripts to complex mechanics tailored to each project.",
    "I work with professional tools like Rojo, strict Luau type-checking, and modular development patterns to catch bugs early and keep code clean. From server-authoritative combat loops to scalable game state systems, I focus on efficiency, reliability, and long-term maintainability.",
    "I can take a project from concept to launch, designing advanced systems using metatables, modular architecture, and large-scale code organization. If you need a developer to create solid, high-performance Roblox systems, I’m ready to help."
  ],

  // Skills
  skills: [
    {
      icon: "🌙",
      name: "Luau",
      description: "Comfortable building complex systems with metatables and type-safe patterns, keeping code clean and easy to work with.",
      mastery: 95
    },
    {
      icon: "🚀",
      name: "Performance",
      description: "Keeping gameplay smooth with optimized client visuals, efficient server logic, and systems that scale well without losing performance.",
      mastery: 99
    },
    {
      icon: "🧩",
      name: "Scalable Architecture",
      description: "Modular, reusable systems designed for multi-project use, with flexible controllers, services, and configurations.",
      mastery: 95
    },
    {
      icon: "🔧",
      name: "Rojo, Git, Wally",
      description: "Well structured external workflow with Rojo, Wally, and Git, focused on clean organization and scalability.",
      mastery: 93
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
      description: "Advanced use of Networker wrapper for secure client-server communication, server validation, and reliable remote calls",
      mastery: 95
    },
    {
      icon: "💾",
      name: "Player Data Systems",
      description: "Player data handled with ProfileStore, session locking, reliable save/load patterns, and custom utility functions",
      mastery: 94
    },
    {
      icon: "⚙️",
      name: "Physics & Combat",
      description: "High-performance combat and physics: hitboxes, raycasting, server authoritative logic, and custom systems",
      mastery: 95
    }
  ],

  // Commissions
  commissions: [
    {
      status: "finished",
      title: "Swing System",
      description: "A fast paced, spiderman inspired swinging system with momentum based movement and bhop mechanics.",
      details: "The system focuses on speed and control, letting you build momentum and keep it as you move. You can chain bhops, adjust your movement in the air, and use the grapple in different ways to stay in motion without losing speed. (made in about 2 hours)",
      links: [
        { text: "Showcase swinging", url: "https://streamable.com/lh0388", icon: "🏹" },
        { text: "Showcase bhop", url: "https://streamable.com/unpltw", icon: "🐇" }
      ]
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
        { text: "Throwables Showcase 1", url: "https://streamable.com/j7plkf", icon: "💣" },
        { text: "Throwables Showcase 2", url: "https://streamable.com/9sf6it", icon: "💨" },
        { text: "Freezing/Melting Showcase", url: "https://streamable.com/ja9pu8", icon: "🧊" },
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
      title: "Your Project Here",
      description: "I'm currently taking on new commissions. Let's build your next game core systems together!",
      details: "I'm currently available for short-term commissions. If your project needs robust, scalable Luau code, feel free to reach out and discuss what you'd like built!",
      links: [
        { text: "Contact Me", url: "#contact", icon: "💬" }
      ]
    }
  ],


  // UI Settings
  ui: {
    feedbackScrollSpeed: 1.2
  },

  feedback: [
    // Example:
    // {
    //   role: "Game Owner",
    //   discordUserId: "123456789012345678", // Put their ID here to fetch avatar!
    //   avatarUrl: "URL", // (Optional fallback if Discord ID fetch fails)
    //   text: "Nyte delivered exactly what I needed. Clean code, fast turnaround.",
    //   rating: 5
    // }
    {
      role: "Game Owner",
      discordUserId: "934568920285847552",
      text: "I spent a lot of time working with Nyte and he is always great with communication and delivers really good code.",
      rating: 5
    },
    {
      role: "Developer",
      discordUserId: "741374651288256583",
      text: "Fast working, super active and open for feedback and improvements, also really nice!",
      rating: 5
    },
    {
      role: "Developer",
      discordUserId: "1110691943559737444",
      text: "Quick to get things done, open to ideas, and really easy to work with.",
      rating: 5
    },


  ],

};
