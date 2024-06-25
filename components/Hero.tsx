"use client"

import { useEffect, useRef, useState, type ComponentPropsWithoutRef } from "react"
import { Playfair_Display } from "next/font/google"
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion"
import AnimatedText from "./AnimateText"
// @ts-ignore
import GlslCanvas from "glslCanvas"
import Image from "next/image"
import bg from "@/assets/bg.png"
import dddepth from "@/assets/dddepth.jpg"


const playfair = Playfair_Display({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-playfair",
})


const randomMovement = () => ({
    x: Math.random() * 100 - 50 + 'vw',
    y: Math.random() * 100 - 50 + 'vw',
    backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
    scale: Math.random() * 1.5 + 0.5
});

const RandomMotionComponent = () => {
    return (
        <motion.div
            className="absolute w-full h-full flex items-center justify-center bg-blend-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ opacity: { duration: 3 } }}
        >
            {[...Array(4)].map((_, index) => (
                <motion.div
                    key={index}
                    className="h-[10vw] w-[10vw] rounded-full blur-3xl"
                    initial={{
                        x: 0,
                        y: 0,
                        backgroundColor: ["#333333", "#666666", "#999999", "#CCCCCC"][index]
                    }}
                    animate={randomMovement()}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                />
            ))}
        </motion.div>
    );
};



const Hero = (props: ComponentPropsWithoutRef<"div">) => {
    const videoId = "C3iHAgwIYtI";
    const startTime = 11; // Start time in seconds

    return (
        <div className="text-black" {...props}>
            <RandomMotionComponent />
            <div className="flex flex-col w-full pt-36 md:pt-32">
                <iframe
                    className="z-10 flex flex-row rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-[90vw] md:w-full h-[70vh] lg:h-[70vh] m-auto bg-white/[0.2]"
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${videoId}&mute=1&iv_load_policy=3&start=${startTime}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
            </div>
        </div>
    );
};

export default Hero