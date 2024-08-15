"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const blogData = [
  {
    id: 1,
    title: "What is an API?",
    description: (
      <>
        An API, or application programming interface, is a collection of
        guidelines and conventions that facilitates communication between
        various
        <a
          href="https://medium.com/p/087669b1c83b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {" "}
          Read more
        </a>
      </>
    ),
    image: "/images/projects/API.jpg",
    previewUrl: "https://medium.com/p/087669b1c83b",
    readMoreUrl: "https://medium.com/p/087669b1c83b",
  },
  {
    id: 2,
    title: "The Importance of Cybersecurity",
    description: (
      <>
        The necessity of cybersecurity has increased dramatically in today’s
        quickly changing technology landscape. Protecting sensitive data
        <a
          href="https://medium.com/@arshdeep2926/the-importance-of-cybersecurity-in-todays-digital-world-8956db4e2f74"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {" "}
          Read more
        </a>
      </>
    ),
    image: "/images/projects/CyberSecurity.jpg",
    previewUrl:
      "https://medium.com/@arshdeep2926/the-importance-of-cybersecurity-in-todays-digital-world-8956db4e2f74",
    readMoreUrl:
      "https://medium.com/@arshdeep2926/the-importance-of-cybersecurity-in-todays-digital-world-8956db4e2f74",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="blogs">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Blogs
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {blogData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default BlogSection;
