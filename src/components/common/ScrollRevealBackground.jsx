import React from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const ScrollRevealBackground = () => {
    const scrollPos = useScrollPosition();

    const START_SCROLL = 1600; 
    const END_SCROLL = 2200; 
    const MIN_SCALE = 0.01;
    const MAX_SCALE = 30; 

    let scale;
    if (scrollPos < START_SCROLL) {
        scale = MIN_SCALE;
    } else if (scrollPos > END_SCROLL) {
        scale = MAX_SCALE;
    } else {
        const progress = (scrollPos - START_SCROLL) / (END_SCROLL - START_SCROLL);
        scale = MIN_SCALE + (MAX_SCALE - MIN_SCALE) * progress;
    }

    return (
        <div 
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
            style={{
                width: '100vw',
                height: '100vw',
                borderRadius: '50%',
                backgroundColor: '#fffff',
                transform: `scale(${scale})`,
            }}
        ></div>
    );
};

export default ScrollRevealBackground;