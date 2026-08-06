import {
  Briefcase,
  Cloud,
  Code2,
  Coffee,
  Cpu,
  Database,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  Layout,
  Mail,
  MapPin,
  Palette,
  Phone,
  Server,
  Smartphone,
  Terminal,
} from "lucide-react";

import { FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

export const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Happy Clients", value: "10+" },
  // { label: "Students Taught", value: "1000+" },
];

export const highlights = [
  { icon: MapPin, text: "Based in Lagos, NIG" },
  { icon: Briefcase, text: "Open for work" },
  { icon: GraduationCap, text: "Computer Engineering Graduate from NAU" },
  // { icon: Coffee, text: "Powered by coffee & curiosity" },
];

export const userReviewData = [
  {
    id: 1,
    name: "John Doe",
    profession: "Real Estate Agent",
    userImage: "/images/u1.jpg",
    review:
      "A wonderful experience! The platform made it easy to find exactly what I needed. lorem ipsum dolor sit ame",
  },
  {
    id: 2,
    name: "Mike Smith",
    profession: "Business Owner",
    userImage: "/images/u2.jpg",
    review:
      "Great selection of properties and seamless process. Highly recommended for anyone looking to invest.",
  },
  {
    id: 3,
    name: "Alex Johnson",
    profession: "Web developer",
    userImage: "/images/u3.jpg",
    review:
      "The website helped me find my dream home quickly and hassle-free. Exceptional service!",
  },
  {
    id: 4,
    name: "Emily Clark",
    profession: "Interior Designer",
    userImage: "/images/u4.jpg",
    review:
      "Fantastic range of properties with clear details. The best platform for home and design inspiration!",
  },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ifejioforcdavid@gmail.com",
    href: "mailto:ifejioforcdavid@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 (803) 074-3472",
    href: "tel:+2348030743472",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria",
    href: "#",
  },
];

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
];

export const experiences = [
  {
    type: "Education",
    title: "ProDev FrontEnd Engineer",
    company: "Alx Africa",
    period: "2025 - 2026",
    description:
      "Completed an intensive 7-month program focused on advanced frontend development. Built several projects using React, Next.js, and TypeScript. mobile development with React Native.",
    technologies: ["React", "Node.js", "NextJs", "TypeScript", "React Native"],
  },
  // {
  //   type: "work",
  //   title: "Full-Stack Developer",
  //   company: "StartupXYZ",
  //   period: "2020 - 2022",
  //   description:
  //     "Built and maintained multiple web applications. Collaborated with design team to implement responsive UIs.",
  //   technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
  // },
  {
    type: "education",
    title: "Front End Developer Bootcamp",
    company: "Dive Africa",
    period: "2025",
    description:
      "Completed an intensive 12-week bootcamp focused on modern frontend development. Built several projects using React, Next.js, and TypeScript.",
    technologies: ["HTML", "CSS", "REACT", "JavaScript"],
  },
  {
    type: "work",
    title: "Assistant Lecturer",
    company: "Airforce Institute of Technology",
    period: "2021 - 2022",
    description:
      "Taught undergraduate courses in web development and database systems. Developed curriculum and assessments.",
    technologies: [
      "JavaScript",
      "MySQL",
      "Mentoring",
      "Curriculum Development",
    ],
  },
  {
    type: "education",
    title: "Bachelor of Engineering",
    company: "Nnamdi Azikiwe University",
    period: "2014 - 2019",
    description:
      "Strong foundation in system design, data structures, and software engineering principles.",
    technologies: ["Computer Science", "Mathematics", "Problem Solving"],
  },
];

export const footerSocialLinks = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "This project simulates a real-world e-commerce platform where users can, Browse products fetched from an external API, Filter products by category, Search for products globally Sort products by price",
    image: "/images/p1.jpg",
    techStack: ["Next.js", "TypeScript", "Redux", "API"],
    demoUrl: "http://alx-project-nexus-two-beta.vercel.app/",
    githubUrl:
      "https://github.com/Davcid1572/alx-project-nexus/tree/main/e-commerce-product-catalog-app",
  },
  {
    title: "AskTechBro 👨🏿‍💻",
    description:
      "An AI-powered chat app featuring TechBro — your senior African tech mentor. Ask anything about code, tech careers, or software concepts and get real, no-nonsense answers with African context and flavor.",
    image: "/images/p2.png",
    techStack: [
      "Nextjs",
      "TypeScript",
      "TailwindCss",
      "Groq API (llama-3.3-70b-versatile)",
    ],
    demoUrl: "https://asktechbro.vercel.app/",
    githubUrl: "https://github.com/Davcid1572/asktechbro",
  },
  {
    title: "AI Document Summarizer 📄",
    description:
      "A full-stack AI app that summarizes any text or PDF document instantly.",
    image: "/images/p8.png",
    techStack: [
      "NextJs",
      "TypeScript",
      "Groq API(llama-3.3-70b-versatile-preview)",
      "TailwindCss",
    ],
    demoUrl: "https://ai-summarizer-ten-iota.vercel.app/",
    githubUrl:
      "https://github.com/Davcid1572/ai-summarizer#ai-document-summarizer-",
  },
  {
    title: "AI Image Caption Generator 🖼️",
    description:
      "Upload any image and get an instant AI-generated caption, alt text, or creative description powered by a multimodal vision AI model.",
    image: "/images/p7.png",
    techStack: ["Next.js", "TypeScript", "Groq API(qwen)", "Maps API"],
    demoUrl: "https://ai-image-caption-five.vercel.app/",
    githubUrl: "https://github.com/Davcid1572/ai-image-caption",
  },
  // {
  //   title: "Fitness Tracker",
  //   description:
  //     "Cross-platform mobile app for workout tracking, nutrition logging, and progress analytics.",
  //   image: "/images/p5.jpg",
  //   techStack: ["React Native", "Firebase", "Node.js", "Charts"],
  //   demoUrl: "https://example.com",
  //   githubUrl: "https://github.com",
  // },
  // {
  //   title: "Learning Management System",
  //   description:
  //     "Educational platform with video streaming, quizzes, progress tracking, and certificates.",
  //   image: "/images/p6.jpg",
  //   techStack: ["Next.js", "Prisma", "AWS S3", "Stripe"],
  //   demoUrl: "https://example.com",
  //   githubUrl: "https://github.com",
  // }
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: Terminal },
      { name: "Tailwind CSS", icon: Palette },
      { name: "React Native", icon: Smartphone },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Layers },
      { name: "MongoDB", icon: Database },
      { name: "GraphQL", icon: Cpu },
      { name: "REST APIs", icon: Cloud },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Server },
      { name: "Linux", icon: Terminal },
      { name: "Figma", icon: Palette },
    ],
  },
];
