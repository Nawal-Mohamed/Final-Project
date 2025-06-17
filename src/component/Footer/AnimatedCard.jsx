// src/components/AnimatedCard.jsx
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function AnimatedCard({
    children,
    index = 0,
    delayBase = 0.2,
    duration = 0.6,
    from = "bottom",
}) {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                    delay: index * delayBase,
                    duration,
                    ease: "easeOut",
                },
            });
        }
    }, [inView, controls, index, delayBase, duration]);

    // اتجاه البداية
    let initial = { opacity: 0 };
    switch (from) {
        case "top":
            initial.y = -60;
            break;
        case "bottom":
            initial.y = 60;
            break;
        case "left":
            initial.x = -60;
            break;
        case "right":
            initial.x = 60;
            break;
        default:
            initial.y = 60;
    }

    return (
        <motion.div ref={ref} initial={initial} animate={controls}>
            {children}
        </motion.div>
    );
}
