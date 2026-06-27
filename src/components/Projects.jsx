import React from "react";
import { motion } from "framer-motion";
import {
    FaGithub,
    FaExternalLinkAlt,
    FaReact,
    FaNodeJs,
} from "react-icons/fa";

import {
    SiExpress,
    SiMysql,
    SiMongodb,
} from "react-icons/si";

import examHall from "../assets/projects/exam-hall.png";
import ecommerce from "../assets/projects/ecommerce.png";

const projects = [
    {
        id: 1,
        title: "Exam Hall Seating Arrangement System",
        subtitle: "Full Stack Web Application",

        image: examHall,

        description:
            "Automated seat allocation system that intelligently assigns students to examination halls, eliminating manual errors and reducing administrative workload by nearly 70% while providing conflict detection and PDF report generation.",

        tech: [
            "React",
            "Node.js",
            "Express",
            "MySQL",
        ],

        icons: [
            <FaReact />,
            <FaNodeJs />,
            <SiExpress />,
            <SiMysql />,
        ],

        features: [
            "Reduced Admin Workload by 70%",
            "Automatic Seat Allocation",
            "Conflict Detection",
            "Admin Dashboard",
            "Exam Schedule Management",
            "PDF Report Generation",
        ],

        github: "https://github.com/barathraj-kp/Exam-seating-system",
        live: "#",

        reverse: false,
    },

    {
        id: 2,

        title: "E-Commerce Product Platform",

        subtitle: "Modern MERN Application",

        image: ecommerce,

        description:
            "A responsive e-commerce platform with secure authentication, shopping cart, product management, admin dashboard and optimized REST APIs using Node.js and MongoDB.",

        tech: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
        ],

        icons: [
            <FaReact />,
            <FaNodeJs />,
            <SiExpress />,
            <SiMongodb />,
        ],

        features: [
            "JWT Authentication",
            "Shopping Cart",
            "Responsive Design",
            "Product CRUD",
            "Price Filtering",
            "Admin Dashboard",
        ],

        github: "https://github.com/barathraj-kp/Trendora-E-Commerce-Website",
        live: "#",

        reverse: true,
    },
];

const TechBadge = ({ icon, text }) => (
    <motion.div
        whileHover={{
            y: -5,
            scale: 1.05,
        }}
        className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-sm font-semibold"
    >
        <span className="text-red-500 text-lg">
            {icon}
        </span>

        {text}
    </motion.div>
);

const Feature = ({ text }) => (
    <motion.div

        initial={{
            opacity: 0,
            x: -20,
        }}

        whileInView={{
            opacity: 1,
            x: 0,
        }}

        viewport={{
            once: true,
        }}

        className="flex items-center gap-3"

    >

        <div className="w-3 h-3 rounded-full bg-red-500" />

        <p className="text-gray-600">

            {text}

        </p>

    </motion.div>

);

const ProjectCard = ({ project }) => {

    return (

        <motion.div

            initial={{

                opacity: 0,

                y: 100,

            }}

            whileInView={{

                opacity: 1,

                y: 0,

            }}

            viewport={{

                once: true,

            }}

            transition={{

                duration: .8,

            }}

            className={`grid lg:grid-cols-2 gap-16 items-center mb-36 ${project.reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
                }`}

        >

            {/* Image */}

            <motion.div

                whileHover={{

                    scale: 1.03,

                }}

                className="relative group"

            >

                <div className="absolute -inset-2 rounded-[40px] bg-gradient-to-r from-red-500 to-red-700 blur-xl opacity-0 group-hover:opacity-40 duration-700" />

                <div className="relative rounded-[40px] overflow-hidden border border-gray-200 shadow-[0_30px_70px_rgba(0,0,0,.08)]">

                    <img

                        src={project.image}

                        alt={project.title}

                        className="w-full h-full object-cover group-hover:scale-110 duration-700"

                    />

                </div>

            </motion.div>

            {/* Content */}

            <div>

                <p className="uppercase tracking-[4px] text-red-500 font-bold mb-4">

                    {project.subtitle}

                </p>

                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">

                    {project.title}

                </h2>

                <p className="text-gray-500 leading-8 mb-8">

                    {project.description}

                </p>

                <div className="grid gap-4 mb-10">

                    {project.features.map((feature, index) => (

                        <Feature

                            key={index}

                            text={feature}

                        />

                    ))}

                </div>

                <div className="flex flex-wrap gap-4 mb-10">

                    {project.tech.map((item, index) => (

                        <TechBadge

                            key={index}

                            text={item}

                            icon={project.icons[index]}

                        />

                    ))}
                    {project.tech.map((item, index) => (
                        <TechBadge
                            key={index}
                            text={item}
                            icon={project.icons[index]}
                        />

                    ))}

                </div>

                <div className="flex flex-wrap gap-5">

                    <motion.a

                        href={project.github}

                        target="_blank"

                        whileHover={{
                            scale: 1.05,
                            y: -4
                        }}

                        whileTap={{
                            scale: .95
                        }}

                        className="px-7 py-3 rounded-full bg-gray-900 text-white font-semibold flex items-center gap-3 shadow-lg"

                    >

                        <FaGithub />

                        GitHub

                    </motion.a>

                    <motion.a

                        href={project.live}

                        target="_blank"

                        whileHover={{
                            scale: 1.05,
                            y: -4
                        }}

                        whileTap={{
                            scale: .95
                        }}

                       

                    >

                    </motion.a>

                </div>

            </div>

        </motion.div>

    );

};

const Projects = () => {

    return (

        <section

            id="projects"

            className="relative py-24 px-6 md:px-12 overflow-hidden bg-white
bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
bg-[size:80px_80px]"

        >

            {/* Background */}

            <div className="absolute inset-0 overflow-hidden">

                <motion.div

                    animate={{
                        x: [-300, 300, -300],
                        y: [-150, 150, -150]
                    }}

                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}

                    className="absolute w-[650px] h-[650px] rounded-full bg-red-400/10 blur-[140px]"
                />

                <motion.div

                    animate={{
                        x: [300, -300, 300],
                        y: [150, -150, 150]
                    }}

                    transition={{
                        duration: 24,
                        repeat: Infinity,
                        ease: "linear"
                    }}

                    className="absolute right-0 bottom-0 w-[650px] h-[650px] rounded-full bg-pink-400/10 blur-[140px]"
                />

            </div>

            <div className="relative max-w-7xl mx-auto">

                <div

                    data-aos="fade-up"

                    className="text-center mb-24"

                >

                    <div className="inline-block px-5 py-2 rounded-full border border-gray-300 bg-white font-semibold text-gray-600 mb-6">

                        Featured Projects

                    </div>

                    <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">

                        Turning Ideas Into

                        <span className="text-red-500">

                            Real Applications

                        </span>

                    </h1>

                    <p className="max-w-3xl mx-auto mt-8 text-gray-500 text-lg leading-8">

                        These projects demonstrate my ability to design, develop and deploy
                        modern full-stack applications with scalable architecture and intuitive
                        user experiences.

                    </p>

                </div>

                {projects.map((project) => (

                    <ProjectCard

                        key={project.id}

                        project={project}

                    />

                ))}

                <motion.div

                    initial={{
                        opacity: 0,
                        y: 60
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    viewport={{
                        once: true
                    }}

                    transition={{
                        duration: .8
                    }}

                    className="mt-20"

                >

                    <div className="rounded-[40px] bg-gradient-to-r from-red-600 via-red-500 to-red-700 p-14 text-center shadow-[0_25px_70px_rgba(255,0,0,.25)]">

                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">

                            More Projects Coming Soon 

                        </h2>

                        <p className="text-red-100 text-lg max-w-3xl mx-auto leading-8">

                            I'm continuously building new full-stack applications,
                            experimenting with modern technologies,
                            and solving real-world problems.
                            Stay tuned for more exciting projects.

                        </p>

                    </div>

                </motion.div>

            </div>

        </section>

    );

};

export default Projects;