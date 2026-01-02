import {KIP_IMAGE, KTU_SRC_IMAGE, STORE_FRONT_IMAGE, XOLACE_WEB_IMAGE} from "@/lib/costants";

export type ProjectType =
  | "Fullstack Web Applications"
  | "Mobile Applications"
  | "Backend Server APIs";

export interface ProjectInterface {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  type: ProjectType;
  githubUrl?: string;
  liveUrl?: string;
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
    id: "ktu-src-mobile-app",
    title: "KTU SRC Mobile Application",
    type: "Mobile Applications",
    description:
      "A mobile application built for the Koforidua Technical University SRC to improve student engagement and access to campus information.",
    image: KTU_SRC_IMAGE,
    technologies: ["React Native", "Expo", "Supabase", "Tailwind CSS"],
    githubUrl: "https://github.com/KTU-SRC-Org/ktu_src_app.git"
  },
  {
    id: "storefront-api-server",
    title: "Storefront API Server",
    type: "Backend Server APIs",
    description:
      "A scalable e-commerce backend server responsible for managing products, carts, orders, and payment processing.",
    image: STORE_FRONT_IMAGE,
    technologies: ["Java", "Spring Boot", "Stripe", "MySQL", "Render", "Postman"],
    githubUrl: "https://github.com/theduo34/store-front-api.git",
  },
  {
    id: "kornel-investment-platform",
    title: "Kornel Investment Properties Platform",
    type: "Fullstack Web Applications",
    description:
      "A secure investment platform for property and asset management featuring real-time transaction tracking, dividend analytics, and role-based access control for investors, administrators, and super administrators.",
    image: KIP_IMAGE,
    technologies: ["Vue.js", "Laravel", "Inertia SSR", "Tailwind CSS", "PostgreSQL"],
    githubUrl: "https://github.com/Kornel-Growth-Agency/KIP.git",
  },
];
