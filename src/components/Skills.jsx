"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Atom,
  FileCode,
  GitBranch,
  Cloud,
  Flame,
  LayoutGrid,
  Share,
  Component,
  BarChart3,
  TestTube2,
  RefreshCw,
  Activity,
  Box,
  Braces,
  Smartphone,
  Send,
  Palette,
} from "lucide-react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90, icon: <Atom size={20} /> },
        { name: "JavaScript", level: 85, icon: <FileCode size={20} /> },
        { name: "HTML/CSS", level: 95, icon: <Code size={20} /> },
        { name: "Tailwind CSS", level: 85, icon: <Palette size={20} /> },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85, icon: <Server size={20} /> },
        { name: "Express", level: 80, icon: <Server size={20} /> },
        { name: "MongoDB", level: 75, icon: <Database size={20} /> },
        { name: "PostgreSQL", level: 70, icon: <Database size={20} /> },
      ],
    },
    {
      title: "Other Tech Stack",
      skills: [
        { name: "Java (DSA)", level: 85, icon: <Flame size={20} /> },
        { name: "C (Basics)", level: 75, icon: <Braces size={20} /> },
        { name: "React Native", level: 80, icon: <Smartphone size={20} /> },
        { name: "Docker", level: 70, icon: <Box size={20} /> },
      ],
    },
  ];

  const otherTechnologies = [
    { name: "Git", icon: <GitBranch size={16} /> },
    { name: "Docker", icon: <Box size={16} /> },
    { name: "AWS", icon: <Cloud size={16} /> },
    { name: "Firebase", icon: <Flame size={16} /> },
    { name: "Next.js", icon: <LayoutGrid size={16} /> },
    { name: "Redux", icon: <Share size={16} /> },
    { name: "Postman", icon: <Send size={16} /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="skills"
      className="section-padding min-h-screen flex items-center"
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2
            id="subheading"
            className="text-3xl md:text-4xl font-bold mb-6 gradient-text"
          >
            Skills & Expertise
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my career. Here's
            a breakdown of my technical expertise and proficiency levels.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <h3
                id="subheading"
                className="text-xl font-bold mb-6 font-poppins"
              >
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon}
                        <span className="font-poppins">{skill.name}</span>
                      </div>
                      <span className="text-sm text-white/60 font-poppins">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-2 bg-gradient-to-r from-gray-200 to-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Tech */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <h3
            id="subheading"
            className="text-xl font-bold mb-6 font-poppins"
          >
            Also Familiar With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherTechnologies.map((tech) => (
              <motion.span
                key={tech.name}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-white/10 rounded-full text-sm font-poppins flex items-center gap-2"
              >
                {tech.icon}
                {tech.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
