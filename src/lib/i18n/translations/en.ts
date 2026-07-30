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
    stat3: "Open source",
    line1: "High performance",
    line2: "Minecraft server software",
  },
  features: {
    label: "Performance",
    heading: "Why Gale?",
    subheading:
      "Engineered for performance without compromising vanilla behavior",
    simd: {
      title: "SIMD-Optimized Operations",
      description:
        "SIMD-accelerated math and memory operations for collisions, lighting calculations, and entity AI, leveraging modern CPU instructions.",
    },
    virtualThreads: {
      title: "Virtual Thread Usage",
      description:
        "Leverages Java virtual threads for parallel processing in entity lifecycle management and chunk loading, reducing latency at high player counts.",
    },
    caching: {
      title: "Extensive Caching",
      description:
        "Thread-local caching for chunks, entities, block states, and recipes. Reduces memory contention and speeds up repeated lookups significantly.",
    },
    despawn: {
      title: "Event-Driven Despawn",
      description:
        "Region-based, event-driven despawn system that replaces traditional tick-based scanning, improving performance on servers with large worlds.",
    },
    optimizations: {
      title: "Dozens of Optimizations",
      description:
        "Performance patches drawn from the broader Minecraft community, carefully reviewed to ensure no behavioral changes from vanilla Paper.",
    },
    upstream: {
      title: "Up-to-Date with Paper",
      description:
        "Regular upstream merges keep Gale synchronized with the latest Paper improvements, security fixes, and Minecraft version support.",
    },
  },
  downloads: {
    title: "Downloads",
    subtitle:
      "Get the latest release of Gale for your Minecraft server.",
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
      "Connect with the Gale community, contribute to development, and stay up to date.",
    discord: {
      title: "Discord",
      description:
        "Join our Discord community to get support, share your experiences, and connect with other Gale users.",
      action: "Join Discord",
    },
    github: {
      title: "GitHub",
      description:
        "Contribute to Gale development, report issues, and explore our open source codebase on GitHub.",
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
      githubRepo: "GitHub Repository",
      downloads: "Downloads",
      wiki: "Wiki",
      githubIssues: "GitHub Issues",
      license: "License",
    },
    disclaimer:
      "This website is not an official Minecraft website and is not associated with Mojang Studios or Microsoft. All product and company names are trademarks or registered trademarks of their respective holders. Use of these names does not imply any affiliation or endorsement by them.",
    builtWith: "Built with",
    by: "by the",
    team: "Team",
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
