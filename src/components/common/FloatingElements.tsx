import { motion } from 'motion/react';

interface FloatingElementsProps {
  className?: string;
}

export function FloatingElements({ className = '' }: FloatingElementsProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Floating Circles */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-20 w-6 h-6 bg-secondary/30 rounded-full"
        animate={{
          y: [0, 30, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-accent/25 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      <motion.div
        className="absolute top-1/2 right-1/3 w-2 h-2 bg-primary/15 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Floating Shapes */}
      <motion.div
        className="absolute bottom-20 right-16 w-8 h-8 border-2 border-accent/20 rotate-45"
        animate={{
          y: [0, -25, 0],
          rotate: [45, 225, 405],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-2/3 left-1/3 w-5 h-5"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20 transform rotate-45"></div>
      </motion.div>
    </div>
  );
}

export function SkillIcons() {
  const skills = ['🎨', '🎵', '💻', '🍳', '💪', '🗣️', '📷', '✂️'];
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {skills.map((skill, index) => (
        <motion.div
          key={skill}
          className="absolute text-2xl opacity-10"
          style={{
            left: `${10 + (index * 12) % 80}%`,
            top: `${20 + (index * 15) % 60}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4 + (index * 0.5),
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
        >
          {skill}
        </motion.div>
      ))}
    </div>
  );
}