import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
  SiSolidity,
  SiWeb3Dotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "Prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShadCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  solidity: {
    title: "Solidity",
    bg: "black",
    fg: "white",
    icon: <SiSolidity/>,
  },
  hardhat: {
    title: "Hardhat",
    bg: "black",
    fg: "white",
    icon: <span className="font-bold">🔨</span>,
  },
  foundry: {
    title: "Foundry",
    bg: "black",
    fg: "white",
    icon: <span className="font-bold">⚒️</span>,
  },
  ethers: {
    title: "Ethers.js",
    bg: "black",
    fg: "white",
    icon: <SiWeb3Dotjs/>,
  },
  web3js: {
    title: "Web3.js",
    bg: "black",
    fg: "white",
    icon: <SiWeb3Dotjs/>,
  },
  wagmi: {
    title: "Wagmi",
    bg: "black",
    fg: "white",
    icon: <span className="font-bold">💎</span>,
  },
  viem: {
    title: "Viem",
    bg: "black",
    fg: "white",
    icon: <span className="font-bold">⚡</span>,
  },
  phaser: {
    title: "Phaser.js",
    bg: "black",
    fg: "white",
    icon: <span className="font-bold">🎮</span>,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <span className="font-bold">🚀</span>,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "shadowfund",
    category: "Blockchain & DeFi",
    title: "ShadowFund",
    src: "/assets/projects-screenshots/shadowfund/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.wagmi,
        PROJECT_SKILLS.viem,
      ],
      backend: [
        PROJECT_SKILLS.solidity,
        PROJECT_SKILLS.hardhat,
        PROJECT_SKILLS.foundry,
        PROJECT_SKILLS.ethers,
      ],
    },
    live: "https://shadowfund.vercel.app",
    github: "https://github.com/anshdeep/shadowfund",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Anonymous Crowdfunding on the Blockchain
          </TypographyP>
          <TypographyP className="font-mono">
            ShadowFund is a revolutionary decentralized crowdfunding platform that prioritizes privacy and anonymity. 
            Built on Ethereum, it allows users to create and fund campaigns without revealing their identities, 
            ensuring complete privacy while maintaining transparency through blockchain technology.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Anonymous campaign creation and funding</li>
            <li>Smart contract-based escrow system</li>
            <li>Milestone-based fund release</li>
            <li>Voting mechanism for fund allocation</li>
            <li>Zero-knowledge proof integration</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Technical Implementation</TypographyH3>
          <p className="font-mono mb-2">
            Built with modern Web3 stack including Solidity smart contracts, Next.js frontend, 
            and integrated with Wagmi and Viem for seamless blockchain interactions. 
            Deployed on Ethereum testnet with comprehensive testing using Foundry.
          </p>
        </div>
      );
    },
  },
  {
    id: "dataforge",
    category: "Machine Learning & Analytics",
    title: "DataForge",
    src: "/assets/projects-screenshots/dataforge/dashboard.png",
    screenshots: ["dashboard.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://dataforge.ai",
    github: "https://github.com/anshdeep/dataforge",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Advanced Data Analytics & ML Platform
          </TypographyP>
          <TypographyP className="font-mono">
            DataForge is a comprehensive data analytics platform that empowers businesses to 
            transform raw data into actionable insights using advanced machine learning algorithms 
            and real-time analytics dashboards.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Real-time data processing and visualization</li>
            <li>Machine learning model training and deployment</li>
            <li>Interactive dashboards with custom metrics</li>
            <li>API integrations for data sources</li>
            <li>Automated reporting and alerts</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Technology Stack</TypographyH3>
          <p className="font-mono mb-2">
            Frontend built with Next.js and TypeScript, featuring responsive design with Tailwind CSS. 
            Backend powered by FastAPI and Python with PostgreSQL database. 
            Containerized with Docker for scalable deployment.
          </p>
        </div>
      );
    },
  },
  {
    id: "fundr",
    category: "DeFi & Crowdfunding",
    title: "Fundr",
    src: "/assets/projects-screenshots/fundr/homepage.png",
    screenshots: ["homepage.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.web3js,
      ],
      backend: [
        PROJECT_SKILLS.solidity,
        PROJECT_SKILLS.hardhat,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
      ],
    },
    live: "https://fundr-dapp.vercel.app",
    github: "https://github.com/anshdeep/fundr",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Decentralized Crowdfunding Platform
          </TypographyP>
          <TypographyP className="font-mono">
            Fundr is a blockchain-based crowdfunding platform that eliminates intermediaries 
            and ensures transparent, secure funding for innovative projects. Built on Ethereum, 
            it provides automated fund management through smart contracts.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Core Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Smart contract-based fund management</li>
            <li>Transparent project tracking</li>
            <li>Automated refund mechanisms</li>
            <li>Multi-token support</li>
            <li>Community voting system</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Smart Contract Architecture</TypographyH3>
          <p className="font-mono mb-2">
            Implemented with Solidity smart contracts deployed on Ethereum. Features include 
            escrow functionality, milestone-based releases, and governance tokens for 
            community decision-making.
          </p>
        </div>
      );
    },
  },
  {
    id: "task-manager",
    category: "Productivity & Web Development",
    title: "Advanced Task Manager",
    src: "/assets/projects-screenshots/taskmanager/dashboard.png",
    screenshots: ["dashboard.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.prisma,
      ],
    },
    live: "https://taskmanager-pro.vercel.app",
    github: "https://github.com/anshdeep/task-manager",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Full-Stack Task Management Solution
          </TypographyP>
          <TypographyP className="font-mono">
            A comprehensive task management application with advanced features including 
            real-time collaboration, project tracking, and analytics. Designed for teams 
            and individuals to boost productivity and streamline workflows.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Drag-and-drop task management</li>
            <li>Real-time collaboration</li>
            <li>Project analytics and reporting</li>
            <li>Time tracking and productivity insights</li>
            <li>Team management and permissions</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Architecture</TypographyH3>
          <p className="font-mono mb-2">
            Built with React and TypeScript frontend, Node.js/Express backend, 
            MongoDB database with Prisma ORM. Features responsive design and 
            real-time updates using WebSocket connections.
          </p>
        </div>
      );
    },
  },
  {
    id: "gamefi-platform",
    category: "GameFi & Blockchain Gaming",
    title: "GameFi Platform",
    src: "/assets/projects-screenshots/gamefi/platform.png",
    screenshots: ["platform.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.phaser,
      ],
      backend: [
        PROJECT_SKILLS.solidity,
        PROJECT_SKILLS.foundry,
        PROJECT_SKILLS.wagmi,
        PROJECT_SKILLS.viem,
      ],
    },
    live: "https://gamefi-platform.vercel.app",
    github: "https://github.com/anshdeep/gamefi-platform",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Blockchain Gaming & NFT Platform
          </TypographyP>
          <TypographyP className="font-mono">
            A comprehensive GameFi platform combining blockchain technology with gaming, 
            featuring NFT integration, play-to-earn mechanics, and decentralized tournaments. 
            Built with modern Web3 tools and game development frameworks.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Gaming Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Play-to-earn game mechanics</li>
            <li>NFT-based in-game assets</li>
            <li>Decentralized tournaments</li>
            <li>Token rewards and staking</li>
            <li>Cross-game asset interoperability</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Technical Stack</TypographyH3>
          <p className="font-mono mb-2">
            Frontend developed with Next.js and Phaser.js for game mechanics. 
            Smart contracts built with Solidity and deployed using Foundry. 
            Web3 integration through Wagmi and Viem for seamless user experience.
          </p>
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio & Design",
    title: "3D Interactive Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["landing.png"],
    live: "https://anshdeep.dev",
    github: "https://github.com/anshdeep/3D-interactive-portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Welcome to my digital playground, where creativity meets code in the most 
            innovative way possible. This 3D interactive portfolio showcases my skills 
            and projects through immersive experiences.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects
          </TypographyH3>
          <p className="font-mono mb-2">
            Features an interactive 3D keyboard rendered directly in the browser, 
            where each key reveals different skills and technologies. Combining 
            art with functionality to create an engaging user experience.
          </p>
          <TypographyH3 className="my-4">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark theme with floating particles and space-like animations 
            create an immersive, out-of-this-world experience.
          </p>
          <TypographyH3 className="my-4 mt-8">Interactive Elements</TypographyH3>
          <p className="font-mono mb-2">
            Smooth animations powered by Framer Motion and GSAP, with 3D models 
            created in Spline. Every interaction is carefully crafted for maximum 
            visual impact and user engagement.
          </p>
          <p className="font-mono mb-2 mt-8 text-center">
            This portfolio isn&apos;t just a showcase — it&apos;s an experience that 
            demonstrates the future of web development.
          </p>
        </div>
      );
    },
  },
];

export default projects;