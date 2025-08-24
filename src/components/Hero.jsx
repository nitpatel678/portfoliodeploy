import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <motion.div
      id="home"
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity }}
    >
      <motion.div style={{ y }} className="text-center z-10 px-4">
        <motion.h1
          id="heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text"
        >
          Nitin Patel
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          id="subheading"
          className="text-xl md:text-2xl lg:text-3xl text-white/80 mb-10 font-poppins"
        >
          Full-Stack Developer & UI/UX Designer
        </motion.h2>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center space-x-4"
        >
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 bg-white text-black font-medium rounded-full cursor-pointer hover:bg-white/90 transition-colors font-poppins"
          >
            Explore My Work
          </button>

          <a
            href="https://drive.google.com/your-resume-link" // 🔗 replace this with your Google Drive link
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-black font-medium rounded-full cursor-pointer hover:bg-white/90 transition-colors font-poppins inline-flex items-center justify-center"
          >
            Get Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ArrowDown className="text-white/60" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
