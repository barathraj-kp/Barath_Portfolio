import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/images/background.jpg";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: <FaReact />,
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "HTML5", level: 95, icon: <FaHtml5 /> },
      { name: "CSS3", level: 92, icon: <FaCss3Alt /> },
      { name: "JavaScript", level: 90, icon: <FaJsSquare /> },
      { name: "React JS", level: 92, icon: <FaReact /> },
    ],
  },

  {
    title: "Backend Development",
    icon: <FaNodeJs />,
    color: "from-green-500 to-emerald-600",
    skills: [
      { name: "Node JS", level: 88, icon: <FaNodeJs /> },
      { name: "Express JS", level: 85, icon: <SiExpress /> },
      { name: "MongoDB", level: 90, icon: <SiMongodb /> },
      { name: "MySQL", level: 82, icon: <SiMysql /> },
    ],
  },

  {
    title: "Developer Tools",
    icon: <FaGithub />,
    color: "from-red-500 to-pink-500",
    skills: [
      { name: "Git", level: 90, icon: <FaGitAlt /> },
      { name: "GitHub", level: 92, icon: <FaGithub /> },
      { name: "Postman", level: 88, icon: <SiPostman /> },
    ],
  },
];

const SkillBar = ({ skill }) => {
  return (
    <div className="mb-7">

      <div className="flex justify-between items-center mb-2">

        <div className="flex items-center gap-3">

          <div className="text-xl text-red-500">
            {skill.icon}
          </div>

          <span className="font-semibold text-gray-700">
            {skill.name}
          </span>

        </div>

        <span className="font-bold text-red-500">
          {skill.level}%
        </span>

      </div>

      <div className="w-full h-3 rounded-full bg-gray-200 overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="relative h-full rounded-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 overflow-hidden"
        >

          <motion.div
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            }}
            className="absolute inset-0 bg-white/40"
          />

        </motion.div>

      </div>

    </div>
  );
};

const SkillCard = ({ group, index }) => {
  return (
    <motion.div

      initial={{
        opacity: 0,
        scale: .8,
        rotateX: 25,
      }}

      whileInView={{
        opacity: 1,
        scale: 1,
        rotateX: 0,
      }}

      viewport={{
        once: false,
        amount: .3,
      }}

      transition={{
        duration: .9,
        type: "spring"
      }}

      whileHover={{
        scale: 1.04,
        y: -10
      }}

      className="relative group"

    >

      <div
        className={`absolute -inset-1 rounded-[35px] bg-gradient-to-r ${group.color} blur-xl opacity-0 group-hover:opacity-60 transition duration-700`}
      />

      <div
        className="
        relative
        rounded-[35px]
        border
        border-white/40
        bg-white/70
        backdrop-blur-xl
        shadow-[0_25px_60px_rgba(0,0,0,.08)]
        p-8
        overflow-hidden
        "
      >

        <motion.div

          animate={{
            rotate: 360,
          }}

          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear",
          }}

          className={`
w-20
h-20
mx-auto
rounded-3xl
bg-gradient-to-br
${group.color}
text-white
text-4xl
flex
items-center
justify-center
mb-8
shadow-xl
`}
        >
          {group.icon}
        </motion.div>

        <h2 className="text-3xl font-black text-gray-800 mb-2">
          {group.title}
        </h2>

        <p className="text-gray-500 mb-10">
          Technologies I use to build scalable,
          modern and beautiful applications.
        </p>

        {group.skills.map((skill, i) => (
          <SkillBar
            key={i}
            skill={skill}
          />
        ))}

      </div>

    </motion.div>
  );
};

export default function Skills() {

  return (



<section
  id="skills"
  className="relative overflow-hidden py-24 px-6 md:px-12 bg-cover bg-center bg-fixed"
  style={{
    backgroundImage: `url(${bgImage})`,
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

  {/* Animated Background */}
  <div className="absolute inset-0 overflow-hidden">

    <motion.div
      animate={{
        x: [-300, 300, -300],
        y: [-150, 150, -150],
      }}
      transition={{
        repeat: Infinity,
        duration: 20,
        ease: "linear",
      }}
      className="absolute w-[700px] h-[700px] rounded-full bg-red-400/10 blur-[140px]"
    />

    <motion.div
      animate={{
        x: [300, -300, 300],
        y: [200, -200, 200],
      }}
      transition={{
        repeat: Infinity,
        duration: 25,
        ease: "linear",
      }}
      className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full bg-pink-300/10 blur-[120px]"
    />

  </div>

  {/* All Content */}
  <div className="relative z-10 max-w-7xl mx-auto">
    

        <motion.div

          animate={{

            x: [300, -300, 300],

            y: [200, -200, 200],

          }}

          transition={{

            repeat: Infinity,

            duration: 25,

            ease: "linear",

          }}

          className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full bg-pink-300/10 blur-[120px]"
        />

      </div>

      <div className="relative max-w-7xl mx-auto">

        <motion.div

          initial={{
            opacity: 0,
            y: 80
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          viewport={{
            once: false,
            amount: .5
          }}

          transition={{
            duration: .8
          }}

          className="text-center mb-20"

        >

          <div className="inline-block border border-gray-300 rounded-full px-5 py-2 text-sm font-bold text-gray-600 bg-white mb-6">

            Technical Skills

          </div>

          <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">

            Building Amazing

            <span className="text-red-500">

              Digital Experiences

            </span>

          </h1>

          <p className="text-gray-500 max-w-2xl mx-auto mt-8 text-lg">

            From beautiful user interfaces to powerful backend systems,
            I specialize in building fast, scalable, and modern web applications.

          </p>

        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          {skillGroups.map((group, index) => (
            <SkillCard
              key={index}
              group={group}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Section */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-24"
        >
          <div className="relative overflow-hidden rounded-[35px] border border-gray-200 bg-gradient-to-r from-gray-900 via-black to-gray-900 p-10 md:p-14">


            {/* Animated circles */}

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-2xl"
            />

            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-2xl"
            />

            <div className="relative z-10">

              <h2 className="text-4xl md:text-5xl font-black text-white text-center">

                Never Stop Learning 

              </h2>

              <p className="text-center text-red-100 mt-6 max-w-3xl mx-auto text-lg leading-8">

                Technology evolves every day, and so do I.
                I continuously learn new frameworks, improve my coding practices,
                and build real-world projects that solve meaningful problems.

              </p>

              {/* Statistics */}

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14">

                {[
                  {
                    number: "3+",
                    title: "Projects",
                  },
                  {
                    number: "10+",
                    title: "Technologies",
                  },
                  {
                    number: "100%",
                    title: "Passion",
                  },
                  {
                    number: "24/7",
                    title: "Learning",
                  },
                ].map((item, index) => (

                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20"
                  >

                    <h3 className="text-5xl font-black text-white mb-2">

                      {item.number}

                    </h3>

                    <p className="text-red-100 font-medium">

                      {item.title}

                    </p>

                  </motion.div>

                ))}

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  );

}