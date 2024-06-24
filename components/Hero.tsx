"use client"

import { useEffect, useState, type ComponentPropsWithoutRef } from "react"
import { Playfair_Display } from "next/font/google"
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion"
import AnimatedText from "./AnimateText"


const playfair = Playfair_Display({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-playfair",
})


const SpinningComponent = () => {
    return (
        <motion.div
            className="relative w-[30vw] h-[30vw] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{
                opacity: { duration: 3 },
                rotate: { duration: 15, repeat: Infinity, ease: "linear" }
            }}
        >
            <motion.div
                className="h-[10vw] w-[10vw] rounded-full bg-blue-500 blur-3xl ml-[-5vw] mt-[5vw]"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.6 }}
            ></motion.div>
            <motion.div
                className="h-[10vw] w-[10vw] rounded-full bg-green-500 blur-3xl ml-[-5vw] mt-[-5vw]"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
            ></motion.div>
            <motion.div
                className="h-[10vw] w-[10vw] rounded-full bg-yellow-500 blur-3xl"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
             <motion.div
                className="h-[10vw] w-[10vw] rounded-full bg-violet-500 blur-3xl"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
        </motion.div>
    );
};


const Hero = async (props: ComponentPropsWithoutRef<"div">) => {
    return (
        <div className={"h-lvh text-black"} {...props}>
            <div className="absolute translate-x-1/2 translate-y-1/2 left-[20%]">
                <SpinningComponent />
            </div>
            <div className="grid place-items-center h-full">
                <div className="flex flex-col items-center justify-center gap-6">
                    <AnimatedText
                        text="Ankan Roy"
                        className={`${playfair.className} text-9xl tracking-widest`}
                    />
                    <AnimatedText
                        text="A Digital neerd based in Asia India Kolkata"
                        className="text-3xl font-light uppercase"
                    />
                </div>
            </div>
        </div>
    )
}


export default Hero