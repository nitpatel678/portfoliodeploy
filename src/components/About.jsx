import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
      className="section-padding min-h-screen flex items-center"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* About Content */}
        <motion.div variants={itemVariants} className="order-2 md:order-1">
          <h2
            id="subheading"
            className="text-3xl md:text-4xl font-bold mb-6 gradient-text"
          >
            About Me
          </h2>
          <p className="text-white/80 mb-4 text-lg">
            I am a passionate <span className="font-semibold">Full-Stack Developer</span> specializing in the{" "}
            <span className="font-semibold">MERN stack</span>. I have strong expertise in{" "}
            <span className="font-semibold">React.js, Node.js, Express, and MongoDB</span>, 
            while also being proficient with <span className="font-semibold">Next.js</span> and{" "}
            <span className="font-semibold">TypeScript</span>.
          </p>
          <p className="text-white/80 mb-4 text-lg">
            My focus is on building scalable, user-friendly, and high-performance
            applications with clean architectures and engaging user experiences.
            I also explore <span className="font-semibold">3D web experiences</span>, APIs, and
            emerging technologies to deliver innovative solutions.
          </p>
          <p className="text-white/80 text-lg">
            Beyond coding, I enjoy learning cutting-edge tools, contributing to
            open-source, and continuously refining my craft to push the
            boundaries of web development.
          </p>

          {/* Education Section */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col gap-3"
          >
            <div className="flex items-center gap-3 px-4 py-3 bg-white/10 rounded-xl text-sm font-poppins">
              <School className="w-5 h-5 text-white/80" />
              <span>
                <strong>High School (10th)</strong> - Saraswati Vidya Mandir Inter College,
                <br /> 86% • 2020
              </span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 bg-white/10 rounded-xl text-sm font-poppins">
              <BookOpen className="w-5 h-5 text-white/80" />
              <span>
                <strong>Intermediate (12th)</strong> - Saraswati Vidya Mandir Inter College,
                <br /> 74.60% • 2022
              </span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 bg-white/10 rounded-xl text-sm font-poppins">
              <GraduationCap className="w-5 h-5 text-white/80" />
              <span>
                <strong>B.Tech CSE (AI)</strong> - ABESIT, Ghaziabad <br />
                Graduation • 2027
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div variants={itemVariants} className="order-1 md:order-2">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl transform rotate-6"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-2xl transform -rotate-3"></div>
            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/20">
              <img
                src="./protrait.png"
                alt="Nitin Patel"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
