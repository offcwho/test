'use client'
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import "./overlay.css";

const Overlay = () => {
    const [isOpen, setIsOpen] = useState(false);

    const overlayAnimation = useSpring({
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
    });

    useEffect(() => {
        const handleKeyDown = (event:any) => {
            if(event.key === 'Escape') {
                setIsOpen(!isOpen);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return() => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    return(
        <animated.div className="overlay" style={overlayAnimation}>
            {isOpen && 
            <div className='overlay__container'>
                overlay
            </div>
            }
        </animated.div>
    );
};

export default Overlay;