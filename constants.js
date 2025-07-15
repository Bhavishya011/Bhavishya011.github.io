export const METADATA = {
  author: "Bhavishya Jain",
  title: "Portfolio | Bhavishya Jain",
  description:
    "Bhavishya Jain is a Java Full-Stack Developer, Competitive Programming and ML Enthusiast.",
  siteUrl: "https://bhavishya011.github.io/", // Update if you have a custom site
  twitterHandle: "", // Add if you have a Twitter handle
  keywords: [
    "Bhavishya Jain",
    "Java Full-Stack Developer",
    "Competitive Programming",
    "ML Enthusiast",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "", // Add a social preview image if available
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "Java Full-Stack Developer",
  "Competitive Programming",
  "ML Enthusiast",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto:bhavishyajain011@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/bhavishya018",
  },
  {
    name: "github",
    url: "https://github.com/Bhavishya011",
  },
  {
    name: "instagram",
    url: "https://instagram.com/bhavishya011",
  },
  {
    name: "twitter",
    url: "https://x.com/ManNothing53918",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "Java",
    "C",
    "html",
    "tailwindcss",
    "javascript",
    "typescript",
  ],
  librariesAndFrameworks: [
    "springboot",
    "Hibernate",
    "JUnit",
    "Flask",
    "TensorFlow",
  ],
  webTechnologiesAndAPIs: [
    "restfulapis",
    "servlet",
    "jdbc",
    "dom",
  ],
  databases: ["mysql", "mongodb"],
  other: [
    "systemdesign",
    "oop",
    "dsa",
    "os",
    "networks",
    "dbms",
    "datascience",
  ],
};

export const PROJECTS = [
  {
    name: "TypeWise-AI",
    image: "/projects/airbnb.webp", // keep image for now
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "AI-Powered Professional Message Generator",
    gradient: ["#F14658", "#DC2537"],
    url: "https://typewise-ai.netlify.app",
    tech: ["typescript", "nextjs", "tailwindcss", "html"],
  },
  {
    name: "Loan Approval Prediction",
    image: "/projects/medium.webp", // keep image for now
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Predicting Loan Approval with Precision",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://loan-approval-prediction-huo2.onrender.com",
    tech: ["python", "jupyter", "scikit-learn", "tailwindcss", "javascript"],
  },
  {
    name: "Privacy-Preserving Techniques For Smart Cities",
    image: "/projects/inshorts.webp", // keep image for now
    blurImage: "/projects/blur/inshorts-blur.webp",
    description: "Securing Privacy in Smart Cities",
    gradient: ["#000066", "#6699FF"],
    url: "https://github.com/Bhavishya011/Privacy-preserving-iot-smart-city",
    tech: ["python", "flask", "anaconda", "javascript"],
  },
  {
    name: "Hotel Reservation System",
    image: "/projects/tesla.webp", // keep image for now
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "Java-powered hotel management with robust MySQL integration.",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/Bhavishya011/Hotel-Reservation-System",
    tech: ["java", "mysql", "IntelliJ IDEA", "GitHub"],
  },
];

export const WORK_CONTENTS = {
  PLINTH: [
    {
      title: "Esports Lead",
      description:
        "Led the Esports vertical at Plinth, LNMIIT’s Techno-Management Fest, driving digital transformation and operational scale. From revamping registration to live execution, the event hit 1,00,000+ impressions, 40% higher engagement, and full funding through key sponsorships.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Esports Event Management Lead
        </div>
      ),
    },
    {
      title: "Digital Transformation",
      description:
        "Migrated event operations from Google Forms to Unstop, streamlining sign-ups and boosting participant experience. Introduced an end-to-end scheduling and leaderboard system that improved coordination by 30% and ensured real-time leaderboard accuracy.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Event Tech & Operations
        </div>
      ),
    },
    {
      title: "Execution & Sponsorship",
      description:
        "Secured Valorant as a key sponsor, covering full event logistics and prizes. Managed 20+ live-streamed matches with 99.5% uptime and 100% on-time execution, while proactively resolving technical glitches and ensuring seamless viewer experience.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Strategic Partnerships & Live Ops
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
