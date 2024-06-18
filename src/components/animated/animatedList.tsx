import { useEffect } from "react";
import { Variants, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    visible: {
        opacity: 1,
        scale: 1,
    },
};

const listVariants: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.5,
        },
    },
};
export default function AnimatedList() {
    const utils: string[] = [
        "Smartphones",
        "Tablettes",
        "Ordinateurs",
        "Parc automobile",
        "Bus",
        "Camions",
        "...",
    ];

    const control = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <motion.ul className="mt-10 text-2xl flex max-lg:flex-col" variants={listVariants} initial="hidden" animate={control} ref={ref}>
            {utils.map((items, index) => (
                <motion.li key={index} className="mr-4 font-semibold" variants={itemVariants}>{items}</motion.li>
            ))}
        </motion.ul>
    );
}
