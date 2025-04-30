import { Code, Smartphone, TestTube, TerminalSquare } from "lucide-react";

export const services = [
  {
    icon: <Smartphone className="h-8 w-8 text-purple-600" />,
    title: "Mobile App Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    icon: <Code className="h-8 w-8 text-purple-600" />,
    title: "Web Design & Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    icon: <TestTube className="h-8 w-8 text-purple-600" />,
    title: "Software Testing Service",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    icon: <TerminalSquare className="h-8 w-8 text-purple-600" />,
    title: "Software Tech",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    icon: <Code className="h-8 w-8 text-purple-600" />,
    title: "Web Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
];

interface Partner {
  id: number;
  logo: string;
  width: string;
}

export const partners: Partner[] = [
  {
    id: 1,
    logo: "/home/partners/1.png",
    width: "w-24",
  },
  {
    id: 2,
    logo: "/home/partners/2.png",
    width: "w-24",
  },
  {
    id: 3,
    logo: "/home/partners/3.png",
    width: "w-24",
  },
  {
    id: 4,
    logo: "/home/partners/4.png",
    width: "w-24",
  },
  {
    id: 5,
    logo: "/home/partners/5.png",
    width: "w-24",
  },
  {
    id: 6,
    logo: "/home/partners/6.png",
    width: "w-24",
  },
];

// testimonials.ts

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
  active: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Romeena De Silva",
    role: "",
    company: "Janet Cosmetics",
    text: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've came across so far. Wouldn't be hesitated to introduce their work to someone else.",
    avatar:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/7t5244NwR6.png",
    active: false,
  },
  {
    id: 2,
    name: "Romeena De Silva",
    role: "",
    company: "Janet Cosmetics",
    text: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've came across so far. Wouldn't be hesitated to introduce their work to someone else.",
    avatar:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/qxsxb8WbFU.png",
    active: false,
  },
  {
    id: 3,
    name: "Imran Khan",
    role: "Software Engineer",
    company: "",
    text: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've came across so far. Wouldn't be hesitated to introduce their work to someone else.",
    avatar:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/7eGAmowbDp.png",
    active: true,
  },
  {
    id: 4,
    name: "Romeena De Silva",
    role: "",
    company: "Janet Cosmetics",
    text: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've came across so far. Wouldn't be hesitated to introduce their work to someone else.",
    avatar:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/pn2qC0EEnD.png",
    active: false,
  },
  {
    id: 5,
    name: "Romeena De Silva",
    role: "",
    company: "Janet Cosmetics",
    text: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've came across so far. Wouldn't be hesitated to introduce their work to someone else.",
    avatar:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/nu9D4vezoM.png",
    active: false,
  },
];

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Website Design for SCFC Canada",
    description:
      "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation.",
    image:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/18fac10c-e45a-492b-9840-d753da9f6fb7.png",
    bgColor: "#f1f1ff",
  },
  {
    id: 2,
    title: "Website Design for SCFC Canada",
    description:
      "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation.",
    image:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/71d1f438-3386-401a-81b2-0dd5de74a51e.png",
    bgColor: "#f0fff7",
  },
  {
    id: 3,
    title: "Website Design for SCFC Canada",
    description:
      "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation.",
    image:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/eeef1161-aa0d-4fa9-84e6-84b3c9d644b2.png",
    bgColor: "#fff4f4",
  },
];

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  image: string;
  quote: string;
  person: {
    name: string;
    role: string;
    avatar: string;
  };
  reversed?: boolean;
}

export const steps: ProcessStep[] = [
  {
    id: 1,
    title: "Build the right team to scale",
    description:
      "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
    image: "/home/section1.png",
    quote:
      '"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"',
    person: {
      name: "Jeewa markram",
      role: "CEO",
      avatar:
        "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/R4Z2pOYXNb.png",
    },
  },
  {
    id: 2,
    title: "Build the right team to scale",
    description:
      "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
    image: "/home/section2.png",
    quote:
      '"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"',
    person: {
      name: "Jeewa markram",
      role: "CEO",
      avatar:
        "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/cqDKmuC9Jx.png",
    },
    reversed: true,
  },
  {
    id: 3,
    title: "Build the right team to scale",
    description:
      "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
    image: "/home/section3.png",
    quote:
      '"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"',
    person: {
      name: "Jeewa markram",
      role: "CEO",
      avatar:
        "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/dk31vUqiaw.png",
    },
  },
];

interface ApproachCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  textColor: string;
}
export const approaches: ApproachCard[] = [
  {
    id: 1,
    title: "UX Driven Engineering",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/524f54f0-782f-4288-9345-eeb0c474c618.png",
    iconBg: "bg-gray-800",
    textColor: "text-gray-800",
  },
  {
    id: 2,
    title: "Developing Shared Understanding",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/3fc8b3bd-afda-4bd7-9de0-35654cea43d2.png",
    iconBg: "bg-blue-400",
    textColor: "text-blue-400",
  },
  {
    id: 3,
    title: "Proven Experience and Expertise",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/e807db8d-070d-4375-af14-66a06ed6c7f8.png",
    iconBg: "bg-pink-500",
    textColor: "text-pink-500",
  },
  {
    id: 4,
    title: "Security & Intellectual Property (IP)",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/abbba058-0678-478d-9fec-c103f77185ca.png",
    iconBg: "bg-green-400",
    textColor: "text-green-400",
  },
  {
    id: 5,
    title: "Code Reviews",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/59977c6a-a344-4c19-8aa1-35ae2a85cd18.png",
    iconBg: "bg-yellow-400",
    textColor: "text-yellow-400",
  },
  {
    id: 6,
    title: "Quality Assurance & Testing",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/d369cc2c-3c5a-451a-9ffc-169813e7af85.png",
    iconBg: "bg-purple-500",
    textColor: "text-purple-500",
  },
];

export const techLogos = [
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/9Dx5PrxACR.png",
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/KU1dzW0U54.png",
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/190a5e35-0e39-47a1-a82d-7949414fcc99.png",
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/4qYH3QXgbg.png",
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/S1jK1RruKx.png",
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/ekRmSNtu1V.png",
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/sCaGQN81s9.png",
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/hbD7zRRCqR.png",
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/18df4747-52da-4d5a-9b17-d4e81760dcac.png",
];

interface ProcessStep2 {
  id: number;
  number: string;
  title: string;
  description: string;
}
export const topSteps: ProcessStep2[] = [
  {
    id: 1,
    number: "#1",
    title: "Assemble the right team",
    description:
      "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
  },
  {
    id: 3,
    number: "#3",
    title: "Tech architecture",
    description:
      "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently",
  },
  {
    id: 5,
    number: "#5",
    title: "Code reviews",
    description:
      "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells",
  },
];

export const bottomSteps: ProcessStep2[] = [
  {
    id: 2,
    number: "#2",
    title: "Sprint planning",
    description:
      "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
  },
  {
    id: 4,
    number: "#4",
    title: "Standups & weekly demos",
    description:
      "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
  },
  {
    id: 6,
    number: "#6",
    title: "Iterative delivery",
    description:
      "We divide the implementation process into several checkpoints rather than a single deadline.",
  },
];

interface Resource {
  id: number;
  title: string;
  image: string;
}

export const resources: Resource[] = [
  {
    id: 1,
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/d09aad5d-108a-48d3-95e8-db2d0a5dca3f.png"
  },
  {
    id: 2,
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/e1602230-4cc3-49eb-ad45-b7833d4a1daf.png"
  },
  {
    id: 3,
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/efba1194-dad2-47dd-8753-9464ea8834aa.png"
  },
  {
    id: 4,
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/eda7a6f7-b6f5-4963-a14a-dbb20ba57a4b.png"
  },
  {
    id: 5,
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/eda7a6f7-b6f5-4963-a14a-dbb20ba57a4b.png"
  },
  {
    id: 6,
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/eda7a6f7-b6f5-4963-a14a-dbb20ba57a4b.png"
  },
  {
    id: 7,
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-29/eda7a6f7-b6f5-4963-a14a-dbb20ba57a4b.png"
  }
];
