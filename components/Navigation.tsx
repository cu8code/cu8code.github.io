'use client'

import { motion } from 'framer-motion';

const Navigation = () => {
    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <motion.nav
            className="absolute w-full p-6 z-10"
            initial="hidden"
            animate="visible"
            variants={navVariants}
        >
            <ul className="flex flex-row gap-4 w-full justify-between">
                <motion.li variants={itemVariants} className="w-full items-start flex">
                    <a>Anka Roy {(new Date()).getFullYear() - 2004}'</a>
                </motion.li>
                <motion.li variants={itemVariants} className="w-full items-start flex">
                    <a href="/about">About</a>
                </motion.li>
                <motion.li variants={itemVariants} className="w-full items-end flex justify-end">
                    <a href="/contact">Contact</a>
                </motion.li>
            </ul>
        </motion.nav>
    );
}

export default Navigation;