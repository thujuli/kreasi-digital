import client01 from "@/assets/images/client-01.jpg";
import client02 from "@/assets/images/client-02.jpg";
import client03 from "@/assets/images/client-03.jpg";
import culture01 from "@/assets/images/culture-01.jpg";
import culture02 from "@/assets/images/culture-02.jpg";
import culture03 from "@/assets/images/culture-03.jpg";

export const menuItems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About Us",
    url: "/about",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Teams",
    url: "/teams",
  },
];

export const servicesList = [
  {
    imgUrl: "/icons/brush.svg",
    title: "UI/UX Design",
    description:
      "Engaging and intuitive user interface (UI) and user experience (UX) design to enhance user comfort and improve conversions",
  },
  {
    imgUrl: "/icons/playstore.svg",
    title: "Mobile App Development",
    description:
      "Responsive and innovative mobile app creation to reach more users and expand your business's reach",
  },
  {
    imgUrl: "/icons/puzzle.svg",
    title: "Social Media Management",
    description:
      " Strategic management and execution of marketing campaigns across social media platforms to expand brand reach and engagement",
  },
  {
    imgUrl: "/icons/marketing.svg",
    title: "Email Marketing Campaigns",
    description:
      "Planning, design, and execution of email marketing campaigns to build relationships with customers and drive conversions",
  },
  {
    imgUrl: "/icons/globe.svg",
    title: "Website Optimization",
    description:
      " Website performance optimization, including loading speed, server response time, and overall performance for a better user experience",
  },
  {
    imgUrl: "/icons/layout.svg",
    title: "Content Management System (CMS) Integration",
    description:
      "Seamless integration of CMS to efficiently manage your website content",
  },
];

export const testimonialsList = [
  {
    ratings: 5,
    clientTestimonial:
      "Exceptional work! Kreasi Digital revamped our website and keeps it running smoothly with their maintenance services. Couldn't be happier!",
    clientName: "Sarah Thompson",
    clientImgUrl: client01,
    clientPosition: "Marketing Manager",
  },
  {
    ratings: 5,
    clientTestimonial:
      "Professional and reliable! Kreasi Digital not only built us a stunning website but also ensures it stays up-to-date and secure. Highly recommended!",
    clientName: "Mark Davis",
    clientImgUrl: client02,
    clientPosition: "Small Business Owner",
  },
  {
    ratings: 5,
    clientTestimonial:
      "Top-notch service! Kreasi Digital handles all our web development and maintenance needs seamlessly. Their expertise has truly elevated our online presence.",
    clientName: "IT Director",
    clientImgUrl: client03,
    clientPosition: "Jessica Lee",
  },
];

export const DMServices = [
  {
    name: "Social Media Management",
    description:
      "Strategic management and execution of marketing campaigns across social media platforms to expand brand reach and engagement.",
  },
  {
    name: "Search Engine Optimization (SEO)",
    description:
      "Website optimization to improve search engine rankings, enhance online visibility, and generate organic traffic.",
  },
  {
    name: "Email Marketing Campaigns",
    description:
      "Planning, design, and execution of email marketing campaigns to build relationships with customers and drive conversions.",
  },
  {
    name: "Copywriting and Content Creation",
    description:
      "Compelling and persuasive content writing for websites, blogs, and other marketing materials to increase user engagement and conversions.",
  },
];

export const WDServices = [
  {
    name: "UI/UX Design",
    description:
      "Engaging and intuitive user interface (UI) and user experience (UX) design to enhance user comfort and improve conversions.",
  },
  {
    name: "E-commerce Development",
    description:
      "Robust and secure e-commerce website development to facilitate online product or service sales.",
  },
  {
    name: "Mobile App Development",
    description:
      "Responsive and innovative mobile app creation to reach more users and expand your business's reach.",
  },
  {
    name: "Website Optimization",
    description:
      "Website performance optimization, including loading speed, server response time, and overall performance for a better user experience.",
  },
];

export const BSServices = [
  {
    name: "Content Management System (CMS) Integration",
    description:
      "Seamless integration of CMS to efficiently manage your website content.",
  },
  {
    name: "Cybersecurity Services",
    description:
      "Proactive protection against online security threats through advanced security measures and real-time security monitoring.",
  },
  {
    name: "Graphic Design Services",
    description:
      "Graphic design for branding, marketing materials, and other visual content to enhance brand appeal and impression.",
  },
  {
    name: "Web Analytics",
    description:
      "Implementation of web analytics tools to monitor your website's performance, analyze user behavior, and make data-driven decisions.",
  },
];

export const ourCulture = [
  {
    title: "Customer-Centric Excellence",
    description:
      "At Kreasi Digital, our foremost commitment is to deliver unparalleled customer experiences. We prioritize understanding and meeting the needs of our clients, ensuring their satisfaction and success drive everything we do. Our culture revolves around consistently exceeding expectations and providing exceptional service at every touchpoint.",
    imgUrl: culture01,
  },
  {
    title: "Innovation and Collaboration",
    description:
      "Innovation is the lifeblood of Kreasi Digital. We foster an environment where creativity flourishes, encouraging our team members to think outside the box and push boundaries. Collaboration is key, as we believe the best ideas emerge from diverse perspectives working together towards a common goal. We embrace experimentation and are not afraid to take calculated risks to stay ahead of the curve in an ever-evolving digital landscape.",
    imgUrl: culture02,
  },
  {
    title: "Customer-Centric Excellence",
    description:
      "At the heart of Kreasi Digital is a vibrant and inclusive community. We prioritize creating a workplace where every voice is heard, valued, and respected. Diversity is celebrated as a catalyst for innovation, and we actively promote an environment where individuals feel empowered to be themselves. Through mentorship, support networks, and continuous learning opportunities, we strive to ensure that every team member feels inspired, supported, and motivated to achieve their fullest potential.",
    imgUrl: culture03,
  },
];

export const API_RANDOM_USER = "https://randomuser.me/api";
