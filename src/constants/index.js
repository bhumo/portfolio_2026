import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const siteConfig = {
  brand: "Portfolio",
  name: "Adrian",
  headline: `I build products and help teams ship polished web experiences through strong engineering, thoughtful UX, and reliable delivery.`,
  email: "hello@adrian.dev",
  mission:
    "My focus is partnering with people who care about craft—shipping software that feels as good as it looks.",
};

export const navLinks = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "career", title: "Career" },
  { id: "blog", title: "Blog" },
  { id: "contact", title: "Contact" },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "X / Twitter", href: "https://twitter.com/" },
];

export const heroBadges = [
  "Developer",
  "UI engineer",
  "Product-minded",
  "Consultant",
];

const services = [
  {
    title: "Web developer",
    icon: web,
    description:
      "I design and build responsive, accessible interfaces and scalable frontends—turning product goals into fast, maintainable code.",
  },
  {
    title: "React specialist",
    icon: mobile,
    description:
      "From design systems to complex state, I ship React experiences that stay performant and pleasant to iterate on.",
  },
  {
    title: "Backend & APIs",
    icon: backend,
    description:
      "I integrate services, model data thoughtfully, and collaborate on APIs that keep clients and servers in sync.",
  },
  {
    title: "Content & storytelling",
    icon: creator,
    description:
      "I help teams clarify narrative—docs, landing pages, and demos that explain the “why” behind the build.",
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#f4f2ed",
    date: "Mar 2020 — Apr 2021",
    points: [
      "Built and maintained customer-facing web apps with React and modern tooling.",
      "Partnered with design and product to ship iterative, measurable improvements.",
      "Focused on performance, accessibility, and resilient component architecture.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#e8e4dc",
    date: "Jan 2021 — Feb 2022",
    points: [
      "Delivered mobile experiences with shared design language across platforms.",
      "Collaborated on release planning, QA, and analytics-informed refinements.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#f4f2ed",
    date: "Jan 2022 — Jan 2023",
    points: [
      "Owned feature slices across storefront and merchant admin surfaces.",
      "Improved reliability through testing, monitoring, and thoughtful refactors.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#e8e4dc",
    date: "Jan 2023 — Present",
    points: [
      "Shipping end-to-end product work across web stack and cross-functional initiatives.",
      "Mentoring, code review, and raising the bar for UX polish and operational excellence.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Adrian has an exceptional ability to turn ambiguity into a clear plan. Working together was both productive and energizing.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "As a collaborator, Adrian is transparent, strategic, and committed to long-term quality. You always know where things stand.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After we rebuilt our frontend, engagement climbed and the codebase finally felt maintainable. Huge lift for our team.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    year: "2024",
    tagline: "Transportation platform",
    description:
      "Search, book, and manage rentals from multiple providers in one streamlined flow.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    categories: ["Product", "Full stack"],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    year: "2023",
    tagline: "Hiring tools",
    description:
      "Job discovery with salary insights and location-aware listings for faster matching.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" },
    ],
    categories: ["Frontend", "APIs"],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    year: "2022",
    tagline: "Travel booking",
    description:
      "Flights, hotels, and cars with curated destination recommendations.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    categories: ["Platform", "Design"],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const blogPosts = [
  {
    date: "Oct 12, 2025",
    title: "Notes on shipping faster without breaking quality",
    category: "Article",
  },
  {
    date: "Sep 3, 2025",
    title: "How I structure React apps for long-term change",
    category: "Article",
  },
  {
    date: "Aug 18, 2025",
    title: "What good design handoff looks like in practice",
    category: "News",
  },
  {
    date: "Jul 2, 2025",
    title: "Three.js in production: lessons from the field",
    category: "Article",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  blogPosts,
};
