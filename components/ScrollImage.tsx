"use client"
import Image from "next/image"
import dp from "@/assets/dp.png"
import { motion, useScroll, useTransform } from "framer-motion";


const ScrollImage = () => {
    const { scrollYProgress } = useScroll();
    const yPos = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const rotate = useTransform(scrollYProgress, [0, 1], [10, -20]);


    return (
        <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0)" }}
        transition={{ duration: 3 }}
            style={{
                y: yPos,
                rotate: rotate,
                width: 100,
                height: 100,
                background: "blue",
            }}
        >
            <Image className=" scale-[400%]" src={dp} alt="Profile" width={100} height={100} />
        </motion.div>
    )
}

export default ScrollImage