"use client"

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface MousePosition {
    x: number;
    y: number;
}

const PointerComponent: React.FC = () => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            cursorX.set(e.clientX - 12);
            cursorY.set(e.clientY - 12);
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="hidden 2xl:block w-4 h-4 bg-blue-500 rounded-full fixed pointer-events-none"
            style={{
                x: springX,
                y: springY,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 3, ease: 'easeInOut' }}
        />
    );
};

export default PointerComponent