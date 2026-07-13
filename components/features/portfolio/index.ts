import {KTU_SRC_IMAGE, STORE_FRONT_IMAGE, XOLACE_MOBILE_IMAGE} from "@/lib/constants";

export type ProjectType =
  | "Fullstack Web Applications"
  | "Mobile Applications"
  | "Backend Server APIs";

export interface ProjectInterface {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  type: ProjectType;
  githubUrl?: string;
  liveUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
}

export interface OtherWebsite {
  title: string;
  description: string;
  url: string;
}

export const myPortfolio: ProjectInterface[] = [
  {
    id: "xolace-mobile-app",
    title: "Xolace App",
    type: "Mobile Applications",
    description:
      "Xolace's mobile app is end-to-end emotional processing infrastructure: a private space to name feelings you can't quite put into words, then get pointed toward real help instead of a chatbot or a social feed. It pairs anonymized peer reflections with built-in crisis-detection safety redirects, so support feels human without ever being performative.",
    image: XOLACE_MOBILE_IMAGE,
    technologies: ["React Native", "Expo", "Convex", "Tailwind CSS"],
    appStoreUrl: "https://apps.apple.com/gh/app/xolace/id6761601429",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.xolaceincorg.xolace",
  },
  {
    id: "ktu-src-mobile-app",
    title: "KTU SRC App",
    type: "Mobile Applications",
    description:
      "A mobile application built for the Koforidua Technical University SRC to improve student engagement and access to campus information.",
    image: KTU_SRC_IMAGE,
    technologies: ["React Native", "Expo", "Supabase", "Tailwind CSS"],
    appStoreUrl: "https://apps.apple.com/gh/app/ktu-src/id6759487105",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.xolaceincorg.KtuSrcAppOfficial&pcampaignid=web_share",
  },
  {
    id: "storefront-api-server",
    title: "Storefront API Server",
    type: "Backend Server APIs",
    description:
      "A scalable e-commerce backend server responsible for managing products, carts, orders, and payment processing.",
    image: STORE_FRONT_IMAGE,
    technologies: ["Java", "Spring Boot", "Stripe", "MySQL", "Railway", "Postman", "Flyway"],
    githubUrl: "https://github.com/theduo34/store-front-api.git",
  },
  // {
  //   id: "kornel-investment-platform",
  //   title: "Kornel Investment Properties Platform",
  //   type: "Fullstack Web Applications",
  //   description:
  //     "A secure investment platform for property and asset management featuring real-time transaction tracking, dividend analytics, and role-based access control for investors, administrators, and super administrators.",
  //   technologies: ["Vue.js", "Laravel", "Inertia SSR", "Tailwind CSS", "PostgreSQL"],
  //   // githubUrl: "https://github.com/Kornel-Growth-Agency/KIP.git",
  // },
];

export const otherWebsites: OtherWebsite[] = [
  {
    title: "Xolace Web App",
    description: "The web version of the Xolace app.",
    url: "https://www.xolace.app/",
  },
  {
    title: "Heaven's Dew Montessori School",
    description: "A school website for a Montessori institution in Koforidua.",
    url: "https://hdm.edu.gh/",
  },
  {
    title: "AIMS Achievers Network",
    description: "A voting and awards platform for campus events in Ghana.",
    url: "https://aimsachieversnetwork.com/",
  },
  {
    title: "Smak Photography",
    description: "A photography studio site with portfolio, pricing, and booking.",
    url: "https://smak-photography.com/",
  },
];
