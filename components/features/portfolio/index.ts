import {KTU_SRC_IMAGE, STORE_FRONT_IMAGE, XOLACE_MOBILE_IMAGE, XOLACE_WEB_IMAGE} from "@/lib/constants";

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
    id: "xolace-web-app",
    title: "Xolace Web Application",
    type: "Fullstack Web Applications",
    description:
      "Xolace is a socio-hybrid digital mental health platform available on both web and mobile. It supports individuals navigating emotional and mental health challenges by combining social connection with professional guidance.",
    image: XOLACE_WEB_IMAGE,
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "Docker", "ElevenLabs"],
    githubUrl: "https://github.com/inside-aims/xolace.git",
    liveUrl: "https://xolace.app",
  },
  {
    id: "xolace-mobile-app",
    title: "Xolace App",
    type: "Mobile Applications",
    description:
      "Xolace's mobile app is end-to-end emotional processing infrastructure — a private space to name feelings you can't quite put into words, then get pointed toward real help instead of a chatbot or a social feed. It pairs anonymized peer reflections with built-in crisis-detection safety redirects, so support feels human without ever being performative.",
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
    githubUrl: "https://github.com/KTU-SRC-Org/ktu_src_app.git",
    liveUrl: "https://play.google.com",
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

// TODO: replace with real sites — dummy placeholders so the layout can be previewed
export const otherWebsites: OtherWebsite[] = [
  {
    title: "Placeholder Business Site",
    description: "A marketing site built for a local business client.",
    url: "https://example.com",
  },
  {
    title: "Placeholder Restaurant Site",
    description: "A menu and reservations site for a restaurant client.",
    url: "https://example.com",
  },
  {
    title: "Placeholder Agency Site",
    description: "A small marketing site built for a design agency.",
    url: "https://example.com",
  },
  {
    title: "Placeholder Personal Brand Site",
    description: "A simple portfolio/blog built for a client's personal brand.",
    url: "https://example.com",
  },
];
