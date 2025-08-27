import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const projects = [
    {
      title: "Cortex",
      description:
        "Cortex is an AI-powered SaaS platform designed to streamline creative workflows. It enables users to generate high-quality content such as articles and blog titles, while also offering advanced image manipulation tools like background and object removal. This freemium platform enhances productivity by leveraging AI to automate time-consuming tasks.",
      image: "./cortex.png",
      tags: [
        "React",
        "Node.js",
        "Express",
        "Tailwind CSS",
        "Gemini API",
        "Vercel",
      ],
      links: {
        demo: "https://cortex-nu.vercel.app/",
        github: "https://github.com/nitpatel678/Cortex_SAAS_Project",
      },
    },

    {
      title: "SerenityAI",
      description:
        "SerenityAI is a full-stack AI-powered therapy assistant that offers a safe, conversational space for users to reflect on their emotions, track mental well-being, and receive AI-guided support in real time. Built with Next.js, Express.js, and MongoDB, and integrated with EchoAPI, it provides an accessible, intelligent companion for improving mental health and self-reflection.",
      image: "./serenity.png",
      tags: ["Next.js", "Express.js", "MongoDB", "EchoAPI", "Tailwind CSS"],
      links: {
        demo: "https://example.com",
        github: "https://github.com/nitpatel678/Serenity_AI",
      },
    },

    {
      title: "VerveAI",
      description:
        "VerveAI is an advanced AI-powered personal assistant designed to transform interview preparation. By combining intelligent conversational agents with immersive 3D simulations, it delivers realistic, interactive mock interviews that replicate real-world scenarios. VerveAI adapts to each user’s needs, offering personalized feedback on responses, body language, and confidence, making it the ultimate tool for mastering interviews with cutting-edge AI and 3D technology.",
      image: "./verve.png",
      tags: ["React", "Node.js", "Three.js", "AI", "Express.js"],
      links: {
        demo: "https://example.com",
        github: "https://github.com",
      },
    },
    {
      title: "TruthLink",
      description:
        "TruthLink is an anonymous crime reporting and tracking platform that lets anyone securely upload evidence, submit a tip to the correct authority, and receive a unique ID to follow progress without revealing their identity.",
      image: "./truthlink.png",
      tags: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "NextAuth.js",
        "Tailwind CSS",
        "GeminiAI",
        "Neon Database",
        "BCrypt",
      ],
      links: {
        demo: "https://truthlink.vercel.app/",
        github: "https://github.com/nitpatel678/next.js_truthlink",
      },
    },
    {
      title: "Gemini Clone",
      description:
        "Gemini Clone is a simple React-based frontend application that replicates the Gemini AI interface. It integrates directly with the Gemini API to provide a seamless conversational experience without requiring any backend. Designed as a lightweight UI copy, it demonstrates clean React architecture and responsive styling while showcasing Gemini’s AI capabilities in a minimal, modern layout.",
      image: "./gemini.png",
      tags: ["React", "Gemini API", "Tailwind CSS"],
      links: {
        demo: "https://gemini-react-clone-murex.vercel.app/",
        github: "https://github.com/nitpatel678/gemini_ReactClone",
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="section-padding min-h-screen">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-20"
      >
        <motion.div variants={itemVariants} className="text-center">
          <h2
            id="subheading"
            className="text-3xl md:text-4xl font-bold mb-6 gradient-text"
          >
            Featured Projects
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was carefully crafted
            to solve specific problems and deliver exceptional user experiences.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
            >
              {/* iMac Mockup */}
              <div className="w-full md:w-3/5">
                <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-lg relative">
                  {/* Header bar */}
                  <div className="flex items-center justify-between px-4 py-2 bg-white/10 backdrop-blur-md">
                    <div className="flex gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    </div>
                    <span className="text-xs text-white/60 font-poppins text-center flex-1 truncate">
                      {project.title}
                    </span>
                    <div className="w-6" />
                  </div>

                  {/* Image content */}
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full object-cover"
                      style={{ height: "300px" }}
                    />
                  </div>
                </div>
              </div>

              {/* Text content */}
              <div className="w-full md:w-2/5 space-y-4">
                <h3 id="subheading" className="text-2xl font-bold">
                  {project.title}
                </h3>
                <p className="text-white/80">{project.description}</p>

                <div className="flex flex-wrap gap-2 my-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs font-poppins"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-white/80 transition-colors font-poppins"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-white/80 transition-colors font-poppins"
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
