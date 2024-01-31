import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import images from "../../constants/image";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
const logos = [
    {
        image: images.htmlLogo,
        title: "HTML5",
    },
    {
        image: images.cssLogo,
        title: "CSS3",
    },
    {
        image: images.javascriptLogo,
        title: "JavaScript",
    },
    {
        image: images.typescriptLogo,
        title: "TypeScript",
    },
    {
        image: images.gitLogo,
        title: "Git",
    },
    {
        image: images.reactLogo,
        title: "React",
    },
    {
        image: images.nextLogo,
        title: "NextJS",
    },
    {
        image: images.svelteLogo,
        title: "Svelte",
    },
    {
        image: images.laravelLogo,
        title: "Laravel",
    },
    {
        image: images.reduxLogo,
        title: "Redux",
    },
    {
        image: images.expressjsLogo,
        title: "ExpressJS",
    },
    {
        image: images.vueLogo,
        title: "VueJS",
    }
];

const TabSection = () => {
    console.log("asd", images.svelteLogo);
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            <Tabs defaultIndex={0}>
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "linear", duration: 0.5 }}
                >
                    <TabList className="bg-primary flex flex-col justify-center items-center mx-auto rounded-xl mb-16 w-full dark:bg-primary-500 md:w-max md:flex-row">
                        <Tab className="text-white w-full text-center cursor-pointer px-8 py-4 font-semibold focus-within:bg-secondary-400 md:w-max dark:focus-within:bg-secondary rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
                            Know me more
                        </Tab>
                        <Tab className="text-white w-full text-center cursor-pointer  px-8 py-4 font-semibold focus-within:bg-secondary-400 md:w-max dark:focus-within:bg-secondary rounded-t-none rounded-b-xl md:rounded-l-none md:rounded-r-xl">
                            Technical Skills
                        </Tab>
                    </TabList>
                </motion.div>
                <TabPanel className="flex gap-20 items-center flex-col-reverse md:flex-row-reverse transition-all">
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "linear", duration: 0.5 }}
                        className="w-full text-primary md:w-1/2 dark:text-white"
                    >
                        <h2 className="text-2xl font-semibold mb-2">
                            React / Next Web Developer | Front-End Developer
                        </h2>
                        <p className="text-base font-normal text-neutral-700 dark:text-neutral-300">
                            As a graduate student from the University of Science
                            and Technologies of Southern Philippines, pursued a
                            Bachelor's degree in Information Technology, with a
                            year of experience as a software engineer. I am
                            thrilled to learn about new web development
                            technologies.
                        </p>
                        <br />
                        <p className="text-base font-normal text-neutral-700 dark:text-neutral-300">
                            I am a Certified IOT passer Developer who
                            specializes on automation and artificial
                            intelligence for digital transformation. I've also
                            proactively worked with DICT region 10 as a
                            full-stack web developer that uses laravel,
                            Bootsrap, and Mysql as a programming language. In
                            the future, I hope to learn more about machine
                            learning.
                        </p>
                        <br />
                        <h3 className="font-semibold text-xl mb-2">
                            Certifications 📝:
                        </h3>
                        <ul className="list-inside list-disc text-neutral-700 dark:text-neutral-300">
                            <li>
                                <a
                                    href="https://drive.google.com/file/d/15yXpS-SJT1gd98S_MwAmUCbCGdItw_NV/view?usp=sharing"
                                    className="underline"
                                    target="_blank"
                                >
                                    DICT Cybersecurity Awareness
                                    <span className="ml-1 inline-flex align-middle">
                                        <ExternalLinkIcon className="h-5 w-5" />
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://drive.google.com/file/d/1oHgbVycnoRbmoVh48JPHZBthCWIC4UxS/view?usp=sharing"
                                    className="underline"
                                    target="_blank"
                                >
                                    Cisco Networking Academy
                                </a>
                                <span className="ml-1 inline-flex align-middle">
                                    <ExternalLinkIcon className="h-5 w-5" />
                                </span>
                            </li>
                            <li>
                                <a
                                    href="https://drive.google.com/file/d/1AuADnwnf3vzWtvJ6WZ9PQz5A-iAKDM2Q/view?usp=sharing"
                                    className="underline"
                                    target="_blank"
                                >
                                    IOT Developer
                                </a>
                                <span className="ml-1 inline-flex align-middle">
                                    <ExternalLinkIcon className="h-5 w-5" />
                                </span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "linear", duration: 0.5 }}
                        className="w-full relative md:w-1/2 md:h-[450px]"
                    >
                        {!isLoaded && (
                            <div className="absolute top-0 rounded-lg left-0 z-50 bg-primary-400 animate-pulse w-full md:h-[450px]" />
                        )}
                        <img
                            src={images.brynerImage}
                            className="h-full w-full z-10 object-cover object-top rounded-lg filter shadow-lg"
                            alt="Image Bryner"
                            loading="lazy"
                            onLoad={() => setIsLoaded(true)}
                        />
                    </motion.div>
                </TabPanel>
                <TabPanel className="flex gap-20 items-center flex-col md:flex-row-reverse transition-all">
                    <div className="w-full text-center text-white max-w-3xl mx-auto md:h-[450px]">
                        <motion.div
                            viewport={{ once: true }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: "linear", duration: 0.5 }}
                            className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 lg:mt-8"
                        >
                            {logos.map((logo, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col justify-center items-center gap-4 py-8 px-8 bg-gray-50 rounded-xl filter shadow-md dark:bg-primary-400"
                                >
                                    <img
                                        className="h-14 object-contain dark:filter dark:invert"
                                        src={logo.image}
                                        alt={logo.title}
                                        loading="lazy"
                                    />
                                    <h6 className="text-xl font-semibold text-primary dark:text-white">
                                        {logo.title}
                                    </h6>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </TabPanel>
            </Tabs>
        </>
    );
};

export default TabSection;
