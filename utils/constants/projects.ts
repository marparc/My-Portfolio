export const projects = [
  {
    id: "The-Silliman-University-Camera-Club-Portal",
    num: "01",
    title: "The Silliman University Camera Club Portal",
    description:
      "This project develops a centralized web-based system with modules for booking management, event management, equipment management, and member management. These modules help organize SUCC's club activities, resources, and records, making operations more efficient and easier to manage for all stakeholders",
    modules: [
      "Booking Management",
      "Event Management",
      "Member Managemnet",
      "Equipment Management",
      "Equipment Recommendations",
    ],
    role: ["UI/UX Designer", "Fullstack Developer"],
    src: [
      { type: "video" as const, src: "/projects/succp/0418.webm" },
      { type: "image" as const, src: "/projects/succp/0417.webp" },
      { type: "image" as const, src: "/projects/succp/0416.webp" },
    ],
  },
  {
    id: "Awestruck-Productions",
    num: "02",
    title: "Awestruck Productions",
    description:
      "This project focuses on the development of a centralized booking system for Awestruck Productions to replace their current reliance on social media platforms. The system is designed to streamline client interactions, improve scheduling efficiency, and provide a more organized and accessible booking experience.",
    modules: ["Booking Management", "Event Management"],
    role: ["UI/UX Designer", "Frontend Developer"],
    src: [
      { type: "video" as const, src: "/projects/awestruck/0419.webm" },
      { type: "image" as const, src: "/projects/awestruck/0420.webp" },
      { type: "image" as const, src: "/projects/awestruck/0421.webp" },
    ],
  },
  {
    id: "Galanter-And-Jones",
    num: "03",
    title: "Galanter and Jones",
    description:
      "The Sales/Order Flow module is part of an Enterprise Resource Planning (ERP) system for Galanter and Jones, designed to manage customer inquiries, quotations, approvals, and proforma invoice creation. It streamlines the sales process by improving communication, automating workflows, and ensuring a structured, efficient, and transparent order pipeline.",
    modules: ["Sales and Order"],
    role: ["UI/UX Designer", "Frontend Developer"],
    src: [{ type: "image" as const, src: "/projects/galanter/0422.webp" }],
  },
  {
    id: "Homework",
    num: "04",
    title: "Homework",
    description:
      "A Mobile Application for Student Job Opportunities project is designed to address the financial challenges faced by students by providing a platform that connects them with accessible and flexible job opportunities.",
    modules: ["Job & Services", "Task Management", "Messaging"],
    role: ["UI/UX Designer", "Frontend Developer"],
    src: [
      { type: "image" as const, src: "/projects/homework/0423.webp" },
      { type: "image" as const, src: "/projects/homework/0424.webp" },
    ],
  },
];
