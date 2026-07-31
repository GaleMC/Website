export default {
  nav: {
    home: "Home",
    downloads: "Downloads",
    documentation: "Documentation",
    github: "GitHub",
    discord: "Discord",
    menu: "menu",
  },
  hero: {
    title: "High performance Minecraft server software",
    subtitle:
      "A high-performance server fork of Paper, without behavioral changes. Dozens of optimizations for your Minecraft server.",
    downloadGale: "Download Gale",
    badge: "Gale 1.0 — High performance, zero compromises",
    stat1: "Paper fork, no behavioral changes",
    stat2: "Dozens of optimizations",
    stat3: "Open-source",
    line1: "High performance",
    line2: "Minecraft server software",
  },
  features: {
    label: "Performance",
    heading: "Why Gale?",
    subheading:
      "Engineered for performance without compromising vanilla behavior",
    zeroChanges: {
      title: "Zero Behavioral Changes",
      description:
        "Gale changes nothing about how your server runs. Every mechanic, every plugin behavior stays exactly as intended. No surprises, no incompatibilities.",
    },
    dropIn: {
      title: "Drop-in Replacement",
      description:
        "Replace your Paper jar with Gale and instantly get better performance. No config changes, no plugin migration, no compatibility headaches. It just works.",
    },
    optimizations: {
      title: "Dozens of Optimizations",
      description:
        "Large and small performance improvements, carefully reviewed and updated. Every optimization is tested to ensure zero behavioral changes.",
    },
    hardware: {
      title: "Modern Hardware Optimizations",
      description:
        "SIMD-accelerated math for collisions and lighting, Java virtual threads for parallel processing, and cache-friendly data structures for modern CPUs.",
    },
    caching: {
      title: "Smarter Caching",
      description:
        "Thread-local caching for chunks, entities, block states, and recipes. Reduces memory contention and speeds up repeated lookups across the board.",
    },
    upstream: {
      title: "Up-to-date with Paper",
      description:
        "Regular upstream merges keep Gale synchronized with the latest Paper improvements, security fixes, and Minecraft version support.",
    },
  },
  downloads: {
    title: "Downloads",
    subtitle: "Get the latest release of Gale for your Minecraft server.",
    selectTitle: "Download Gale",
    downloadLatest: "Download Latest Release",
    sourceCode: "Source Code",
    version: "Version",
    build: "Build",
    latest: "Latest",
    download: "Download",
    unavailable: "Unavailable",
    noChanges: "No changes",
    olderBuilds: "Looking for older releases? Check out GitHub Releases →",
    noBuilds: "No releases available.",
    loading: "Loading CI builds...",
    viewOnActions: "View on GitHub Actions",
    viewAllBuilds: "View all builds on GitHub Actions",
    viewOnGitHub: "View on GitHub",
    viewAllReleases: "View all releases on GitHub",
    releaseNotes: "Release notes",
    view: "View",
    downloadsUnavailable: "Downloads Unavailable",
    products: {
      gale: {
        title: "Gale",
        description:
          "A high-performance server fork of Paper, without behavioral changes. Dozens of optimizations for your Minecraft server.",
      },
    },
  },
  community: {
    label: "Community",
    heading: "Join our community",
    subheading:
      "Connect with the Gale community, contribute to development, and stay up-to-date.",
    discord: {
      title: "Discord",
      description:
        "Join our Discord community to get support, share your experiences, and connect with other Gale users.",
      action: "Join Discord",
    },
    github: {
      title: "GitHub",
      description:
        "Contribute to Gale development, report issues, and explore our open-source codebase on GitHub.",
      action: "View GitHub",
    },
  },
  footer: {
    sections: {
      projectDev: "Project & Development",
      getInvolved: "Get Involved",
      aboutGale: "About Gale",
    },
    links: {
      githubRepo: "GitHub",
      downloads: "Downloads",
      githubIssues: "Issues",
      license: "License",
    },
    disclaimer:
      "This website is not affiliated with or endorsed by Mojang Studios or Microsoft and is not an official Minecraft website. Minecraft and all other trademarks are the property of their respective owners.",
    builtWith: "Built with",
    by: "by the",
    team: "team",
  },
  notFound: {
    title: "404",
    heading: "Page Not Found",
    description: "The page you're looking for doesn't exist or has been moved.",
    backHome: "Back to Home",
    reportDiscord: "Report on Discord",
  },
  common: {
    loading: "Loading...",
    error: "Error",
    success: "Success",
    close: "Close",
    open: "Open",
    save: "Save",
    cancel: "Cancel",
    confirm: "Confirm",
    delete: "Delete",
    edit: "Edit",
    create: "Create",
    search: "Search",
    filter: "Filter",
    sort: "Sort",
    more: "More",
    less: "Less",
    failed: "Failed",
    cancelled: "Cancelled",
    by: "by",
  },
  status: {
    success: "Success",
    failure: "Failure",
    aborted: "Aborted",
    unstable: "Unstable",
  },
  docs: {
    label: "Docs",
    title: "Documentation",
    subtitle:
      "Everything you need to know about setting up and running a Gale server.",
    sections: {
      gettingStarted: "Getting Started",
      features: "Features",
      faq: "FAQ",
      troubleshooting: "Troubleshooting",
    },
    gettingStarted: {
      whatIsGale: {
        title: "What is Gale?",
        body1:
          "Gale is a <strong>drop-in replacement for Paper</strong> that makes your Minecraft server run faster without changing how anything works. Every plugin, every redstone machine, every farm that works on Paper will work identically on Gale — just with better performance."
      },
      install: {
        title: "Installation",
        subtitle: "Switching from Paper to Gale takes about 30 seconds:",
        step1: {
          title: "Download the latest Gale JAR",
          desc: "From the <a href='/downloads/gale' class='text-blue-400 hover:text-blue-300'>downloads page</a>",
        },
        step2: {
          title: "Swap the JAR in your start script",
          desc: "Replace <code class='text-blue-300 bg-blue-500/10 px-1 rounded'>paper-version.jar</code> with <code class='text-blue-300 bg-blue-500/10 px-1 rounded'>gale-version.jar</code>",
        },
        step3: {
          title: "Start your server",
          desc: "<pre class='mt-1 text-xs text-neutral-400 bg-neutral-900/50 p-2 rounded overflow-x-auto'>java -jar gale-version.jar</pre>(It is recommended to use <a href='https://flags.sh/'>Aikar's flags</a>)",
        },
        footer:
          "That's it. No configuration changes. No plugin migration. Your server just runs faster.",
      },
      building: {
        title: "Building from source (for developers)",
        command:
          "git clone https://github.com/GaleMC/Gale.git\ncd Gale\n./gradlew applyAllPatches\n./gradlew :gale-server:createPaperclipJar",
      },
    },
    features: {
      zeroChanges: {
        title: "Zero Behavioral Changes",
        body: "Gale's core philosophy: unlike most other Paper forks, Gale deliberately avoids changing any gameplay behavior. Your redstone, farms, and plugins all work exactly as they do on Paper.",
      },
      perf: {
        title: "Performance Optimizations",
        subtitle:
          "Dozens of individual performance patches:",
        simd: {
          title: "SIMD-Accelerated Operations",
          desc: "CPU-level parallelism for collisions, lighting, and math hot paths.",
        },
        virtualThreads: {
          title: "Virtual Threads",
          desc: "Java virtual threads for parallel entity and chunk processing.",
        },
        caching: {
          title: "Extensive Caching",
          desc: "Thread-local caches for chunks, entities, block states, and recipes.",
        },
        despawn: {
          title: "Event-Driven Despawn",
          desc: "Region-based despawning instead of tick-based scanning.",
        },
        collections: {
          title: "Optimized Collections",
          desc: "Packed arrays, fastutil and tuned capacities throughout.",
        },
        allocations: {
          title: "Reduced Allocations",
          desc: "Reused RandomSource instances, fewer clones, less GC pressure.",
        },
        fullList:
          "Full list: <a href='https://github.com/GaleMC/Gale/blob/main/Features.md' class='text-blue-400 hover:text-blue-300'>Features.md</a>",
      },
      upToDate: {
        title: "Up-to-date with Paper",
        body: "Regular upstream merges keep Gale synchronized with the latest Paper improvements, security fixes, and Minecraft version support. You don't have to choose between performance and being current.",
      },
    },
    faq: {
      q1: "Is Gale compatible with my plugins?",
      a1: "Yes. Gale makes no API changes to Paper. Every Bukkit/Paper plugin works without modification. If a plugin relies on specific Paper internal implementation details, it might break. We try to support these plugins regardless. Please open a <a href='https://github.com/GaleMC/Gale/issues' class='text-blue-400 hover:text-blue-300'>GitHub Issue</a> if a plugin doesn't work.",
      q2: "Do I need to change my configuration?",
      a2: "No. All your existing Paper configuration files (<code class='text-blue-300 bg-blue-500/10 px-1 rounded'>paper-global.yml</code>, <code class='text-blue-300 bg-blue-500/10 px-1 rounded'>bukkit.yml</code>, <code class='text-blue-300 bg-blue-500/10 px-1 rounded'>spigot.yml</code>, <code class='text-blue-300 bg-blue-500/10 px-1 rounded'>server.properties</code>) work unchanged. Gale does generate its own config files, but the defaults are tuned for maximum performance — you don't need to touch them.",
      q3: "Will my world files and player data work?",
      a3: "Yes. Gale uses the same world format as Paper. Your worlds, player data, and everything else are 100% compatible.",
      q4: "Will my redstone contraptions and farms break?",
      a4: "No. The developers explicitly avoid changing behavior that farms might depend on. Redstone and farm behavior is identical to Paper.",
      q5: "How much faster is Gale compared to Paper?",
      a5: "Gale is strictly faster than Paper on every server with no trade-offs. The largest gains are on servers with many entities, frequent chunk operations, and high player counts. Exact numbers depend on your server setup, but expect meaningful improvements with zero effort.",
      q6: "What if I need features that change vanilla behavior?",
      a6: "Gale's maintainers recommend <a href='https://www.leafmc.one/' class='text-blue-400 hover:text-blue-300'>Leaf</a> if you want features or optimizations that intentionally change vanilla or Paper behavior. Gale is designed to be a pure performance upgrade with zero compromises.",
      q7: "How do I report a bug or security issue?",
      a7: "Bug reports and feature requests: open a <a href='https://github.com/GaleMC/Gale/issues' class='text-blue-400 hover:text-blue-300'>GitHub Issue</a>. Security vulnerabilities: report privately via <a href='https://discord.gg/gwezNT8c24' class='text-blue-400 hover:text-blue-300'>Discord</a> — do NOT use public GitHub issues.",
    },
    troubleshooting: {
      items: {
        serverWontStart: {
          title: "Server won't start",
          desc: "Make sure you're using Java 25 or later. Check that you pointed to the right jar (<code class='text-blue-300 bg-blue-500/10 px-1 rounded'>gale-&lt;version&gt;.jar</code>) in your startup script.",
        },
        pluginIncompat: {
          title: "Plugin incompatibility",
          desc: "If a plugin breaks, first verify it works on the same version of Paper. If it does, <a href='https://github.com/GaleMC/Gale/issues' class='text-blue-400 hover:text-blue-300'>report the issue</a>. If it doesn't work on Paper either, the issue is with the plugin, not Gale.",
        },
        performance: {
          title: "Performance is worse than expected",
          desc: "Make sure your <a href='https://flags.sh/' class='text-blue-400 hover:text-blue-300'>startup flags</a> include appropriate memory settings (<code class='text-blue-300 bg-blue-500/10 px-1 rounded'>-Xms</code>/<code class='text-blue-300 bg-blue-500/10 px-1 rounded'>-Xmx</code>). If the issue persists, reach out on <a href='https://discord.gg/gwezNT8c24' class='text-blue-400 hover:text-blue-300'>Discord</a> for help.",
        },
      },
    },
    footer:
      "Still have questions? Join our <a href='https://discord.gg/gwezNT8c24' class='text-blue-400 hover:text-blue-300'>Discord</a> or open a <a href='https://github.com/GaleMC/Gale/issues' class='text-blue-400 hover:text-blue-300'>GitHub Issue</a>.",
  },
  time: {
    justNow: "just now",
    minuteAgo: "minute ago",
    minutesAgo: "minutes ago",
    hourAgo: "hour ago",
    hoursAgo: "hours ago",
    dayAgo: "day ago",
    daysAgo: "days ago",
    monthAgo: "month ago",
    monthsAgo: "months ago",
    yearAgo: "year ago",
    yearsAgo: "years ago",
  },
} as const;
