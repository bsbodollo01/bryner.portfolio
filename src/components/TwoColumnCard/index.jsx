import React from "react";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const TwoColumnCard = () => {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-10 items-center md:grid-cols-2"
        >
            <motion.div
                variants={{
                    offscreen: {
                        y: 150,
                    },
                    onscreen: {
                        y: 0,
                        transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 1,
                        },
                    },
                }}
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer bg-gray-50 px-6 py-16 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-primary-500"
            >
                <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
                    <a
                        href="https://brooky.io/"
                        target="_blank"
                        className="hover:underline"
                    >
                        Ves Artex
                    </a>
                    <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
                        <CalendarIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
                        April 2024 - Jan 2025
                    </span>
                    <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
                        <BriefcaseIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
                        Software Development Engineer 3
                   </span>
                </h6>
                <div className="relative mb-4">
                    <div
                        className="absolute inset-0 flex items-center"
                        aria-hidden="true"
                    >
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center">
                        <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
                            duties & responsibilities
                        </span>
                    </div>
                </div>

                <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
                    <li>
                        Engineered smarter barn systems using ReactJS, AWS, Kafka, and Python Framework, 
                        that optimize animal well-being and elevate operational efficiency by 40%, 
                        driving innovation for farms worldwide with a 80% efficiency.
                    </li>
                    <li>
                        Proactively identified and resolved motor anomalies in barn systems improving 
                        operational efficiency by 35%, ensuring seamless operations and minimizing downtime by 50%.
                    </li>
                    <li>
                        Designed cutting-edge system solutions that transformed dairy operations into connected 
                        ecosystems enhancing user customization options by 50%.
                    </li>
                    <li>
                        Optimized code runtime, reducing page load times by 30% and boosting user registrations by 15%, 
                        enhancing overall user experience and engagement.
                    </li>
                </ul>
            </motion.div>
            <motion.div
                variants={{
                    offscreen: {
                        y: 300,
                    },
                    onscreen: {
                        y: 0,
                        // rotate: -10,
                        transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 1.5,
                        },
                    },
                }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 px-6 py-16 rounded-3xl h-full relative filter shadow-md md:px-10 dark:bg-primary-500"
            >
                <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
                    <a
                        href="https://brooky.io/"
                        target="_blank"
                        className="hover:underline"
                    >
                        Brooky Technologies
                    </a>
                    <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
                        <CalendarIcon className=" text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
                        June 2021 - April 2024
                    </span>
                    <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
                        <BriefcaseIcon className="text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
                        Full-stack Software Engineer
                    </span>
                </h6>
                <div className="relative mb-4">
                    <div
                        className="absolute inset-0 flex items-center"
                        aria-hidden="true"
                    >
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center">
                        <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
                            duties & responsibilities
                        </span>
                    </div>
                </div>
                <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
                    <li>
                        Partnered with DOST in developing a real estate management system using Next.js, 
                        TailwindCSS, Express.js that helped realtor to manage their agent transactions and 
                        property listing limited only in the Philippines reducing transaction processing time by 75%.
                    </li>
                    <li>
                        Implemented a robust and scalable system architecture using Next.js, React.js, 
                        Svelte for frontend development, ShadcnUI, MaterialUI, and DaisyUI for styling, and 
                        GraphQL with Express.js for backend services.
                    </li>
                    <li>
                        Integrated a chatbot using Crisp within a real estate management system website, 
                        enhancing user engagement and improving customer support resulting in a 80% increase in conversion rates.
                    </li>
                    <li>
                        Successfully launched three nationwide real estate system projects within a year, 
                        showcasing strong project management skills and streamlining processes for realtors by 30%.
                    </li>
                    <li>
                        Monitored user engagement and analyzed behavioral patterns using Mixpanel to optimize features and
                        improve user experience by 20%.
                    </li>
                    <li>
                        Improved web application performance by ensuring cross-browser and cross-platform compatibility, 
                        reducing load times by 30%, and implementing effective caching strategies.
                    </li>
                </ul>
            </motion.div>
        </motion.div>
    );
};

export default TwoColumnCard;
