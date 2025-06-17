// GroceryCard.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AnimationCard({ children, index }) {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration: .7, delay: index * 0.5 },
            });
        }
    }, [inView, controls, index]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={controls}
        >
            {children}
        </motion.div>
    );
}
