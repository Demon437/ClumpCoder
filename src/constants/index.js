import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
  cloud,
  apple,
  google,
  arrowUp,
  robot,
  card,
  vr,
  mobile,
  web,
  software,
  marketing,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "career",
    title: "Career",
  },
  {
    id: "contact",
    title: "Contact",
  }
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",

    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [

  { // Cloud Solutions

    id: "cloud-solutions",

    content:

      "Scalable cloud infrastructure and migration services for seamless operations.",


    name: "Cloud Solutions",

    title: "",
    icon: cloud,

  },

  {

    id: "cybersecurity",

    content:

      "Advanced protection against threats with cutting-edge security protocols.",

    name: "Cybersecurity",

    title: "",

    icon: shield,

  },

  {

    id: "software-development",

    content:

      "Custom software tailored to your business needs using modern technologies.",

    name: "Software Development",

    title: "",

    icon: software,

  },

  {

    id: "ai-machine",

    content:

      "AI & machine learning to drive innovation and automation across workflows.",

    name: "AI & Machine Learning",

    title: "",

    icon: robot,

  },

  {

    id: "mobile-app",

    content:

      "Mobile applications built for performance, usability and scalability.",

    name: "Mobile App Development",

    title: "",

    icon: mobile,

  },

  {

    id: "web-application",

    content:

      "Web apps let businesses offer services directly through browsers, no installation needed.",
    name: "Web Application",

    title: "",

    icon: web,

  },




  {

    id: "augmented-reality",

    content:

      "At Augmented Reality, we believe that finding the perfect property is more than just a transaction – it’s about building dreams and creating value.",

    name: "Augmented Reality",

    title: "",

    icon: arrowUp,

  },

  {

    id: "virtual-reality",

    content:

      "At Virtual Reality, we combine technology and innovation to redefine the real estate experience.",

    name: "Virtual Reality",

    title: "",

    icon: vr,

  },

  { // Digital Marketing

    id: "digital-marketing",

    content:

      "Digital Marketing grows brands through SEO, social media, content, email, and ads.",
    name: "Digital Marketing",

    title: "",

    icon: marketing,

  },

];

export const stats = [
  // {
  //   id: "stats-1",
  //   title: "User Active",
  //   value: "3800+",
  // },
  // {
  //   id: "stats-2",
  //   title: "Trusted by Company",
  //   value: "230+",
  // },
  // {
  //   id: "stats-3",
  //   title: "Transaction",
  //   value: "$230M+",
  // },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Services",
        link: "#services",
      },
      {
        name: "About",
        link: "#about",
      },
      {
        name: "Portfolio",
        link: "#portfolio",
      },
      {
        name: "Career",
        link: "#career",
      },
      {
        name: "Contact",
        link: "#contact",
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        name: "Cybersecurity",
        link: "#services",
      },
      {
        name: "Software Development",
        link: "#services",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/clumpcoder_ind/",
  },
  {
    id: "social-media-2",
    icon: twitter,
    link: "https://x.com/ClumpCoder_IND",
  },
  {
    id: "social-media-3",
    icon: linkedin,
    link: "https://www.linkedin.com/company/clumpcoder/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const technologyStack = [
  {
    id: "tech-1",
    name: "Node.js",
    description: "Runtime environment",
    icon: "⬡", // Green circle (Node.js green)
    color: "from-green-500 to-green-600"
  },
  {
    id: "tech-2", 
    name: "Copilot",
    description: "AI assistant",
    icon: "🤖", // Robot
    color: "from-blue-500 to-purple-500"
  },
  {
    id: "tech-3",
    name: "buildScape",
    description: "Development platform",
    icon: "🔧", // Wrench
    color: "from-orange-500 to-orange-600"
  },
  {
    id: "tech-4",
    name: "React.js",
    description: "Frontend framework",
    icon: "⚛️", // Atom structure
    color: "from-cyan-400 to-blue-500"
  },
  {
    id: "tech-5",
    name: "Java",
    description: "Programming language",
    icon: "♨️", // Coffee cup
    color: "from-red-500 to-red-600"
  },
  {
    id: "tech-6",
    name: "TensorFlow",
    description: "ML framework",
    icon: "🧠", // Brain/ML
    color: "from-orange-500 to-yellow-500"
  },
  {
    id: "tech-7",
    name: "Kubernetes",
    description: "Orchestration tool",
    icon: "⚓", // Ship wheel
    color: "from-blue-600 to-blue-700"
  },
  {
    id: "tech-8",
    name: "AWS",
    description: "Cloud platform",
    icon: "☁️", // Cloud
    color: "from-orange-400 to-orange-500"
  },
  {
    id: "tech-9",
    name: "Web 4.0",
    description: "Next-gen web",
    icon: "🌐", // Globe
    color: "from-purple-500 to-blue-500"
  },
  {
    id: "tech-10",
    name: "Uizer",
    description: "UI framework",
    icon: "🎨", // Palette
    color: "from-purple-400 to-pink-500"
  },
  {
    id: "tech-11",
    name: "Python",
    description: "Programming language",
    icon: "🐍", // Snake
    color: "from-yellow-400 to-blue-500"
  },
  {
    id: "tech-12",
    name: "WordPress",
    description: "CMS platform",
    icon: "📝", // Document
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "tech-13",
    name: "Docker",
    description: "Containerization",
    icon: "🐳", // Whale
    color: "from-blue-400 to-blue-500"
  },
  {
    id: "tech-14",
    name: "MongoDB",
    description: "Database",
    icon: "🍃", // Leaf
    color: "from-green-500 to-green-600"
  },
  {
    id: "tech-15",
    name: "Shopify",
    description: "E-commerce platform",
    icon: "🛒", // Shopping bag
    color: "from-green-500 to-green-600"
  },
  {
    id: "tech-16",
    name: "SQL Server",
    description: "Database",
    icon: "🗄️", // Database
    color: "from-blue-500 to-green-500"
  },
  {
    id: "tech-17",
    name: "Azure",
    description: "Cloud platform",
    icon: "☁️", // Cloud
    color: "from-blue-400 to-blue-600"
  },
  {
    id: "tech-18",
    name: "Data Processing",
    description: "Big data frameworks",
    icon: "🐘", // Elephant
    color: "from-orange-500 to-green-500"
  },
  {
    id: "tech-19",
    name: "React Native",
    description: "Mobile framework",
    icon: "⚛", // Mobile
    color: "from-cyan-400 to-blue-500"
  },
  {
    id: "tech-20",
    name: "Angular",
    description: "Framework",
    icon: "🅰️", // A symbol
    color: "from-red-500 to-red-600"
  },
  {
    id: "tech-21",
    name: "Vue.js",
    description: "Framework",
    icon: "💚", // Green V
    color: "from-green-500 to-green-600"
  },
  {
    id: "tech-22",
    name: "GitHub",
    description: "Version control",
    icon: "🐙", // Octocat
    color: "from-purple-500 to-purple-600"
  },
  {
    id: "tech-23",
    name: "Blockchain",
    description: "Distributed ledger",
    icon: "⛓️", // Chain
    color: "from-blue-400 to-blue-600"
  },
  {
    id: "tech-24",
    name: "Flutter",
    description: "Mobile framework",
    icon: "🦋", // Butterfly
    color: "from-blue-400 to-blue-500"
  }
];