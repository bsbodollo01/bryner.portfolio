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
                        href="https://www.hububble.co/"
                        target="_blank"
                        className="hover:underline"
                    >
                        Brooky Technologies
                    </a>
                    <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
                        <CalendarIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
                        July, 2021 - PRESENT
                    </span>
                    <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
                        <BriefcaseIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
                        JUNIOR FRONT-END ENGINEER
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
                        Partnered with DOST in developing a real estate
                        management system that helped realtor to manage their
                        agent transactions and property listing limited only in
                        the Philippines.
                    </li>
                    <li>
                        Integrated a chatbot within a real estate management
                        system website, enhancing user engagement and improving
                        customer support.
                    </li>
                    <li>
                        Successfully launched three nationwide real estate
                        system projects within a year, showcasing strong project
                        management skills and ability to meet deadlines.{" "}
                    </li>
                    <li>
                        Designed and Implemented user interfaces using ReactJS,
                        NextJS, and Svelte to create visually appealing and
                        interactive web applications for a real estate
                        management system.
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
                        href="https://www.upwork.com/freelancers/~013e0372898b53a69e"
                        target="_blank"
                        className="hover:underline"
                    >
                        Department of Information and Communications Technology
                        - Region 10
                    </a>
                    <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
                        <CalendarIcon className=" text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
                        January, 2022 - March 2022
                    </span>
                    <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
                        <BriefcaseIcon className="text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
                        Intern | FULL-STACK ENGINEER
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
                        Developed a computerized web-based accounting management
                        system for the process of purchasing goods/services.
                    </li>
                    <li>
                        Assembled a moving robot using raspberry PI which can
                        able to avoid slab, followed a certain track, and emit
                        sound upon collision with a structure.
                    </li>
                    <li>
                        Constructed an interior design for the upcoming
                        renovation of DOST office using Coohom software.
                    </li>
                </ul>
            </motion.div>
        </motion.div>
    );
};

export default TwoColumnCard;
