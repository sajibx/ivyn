"use client";

import React, { useEffect, useState } from 'react';

interface AnimatedOrbProps {
    color: string;
    size: number;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    animationDuration?: string;
    delay?: string;
}

export const AnimatedOrb = ({
    color,
    size,
    top,
    left,
    right,
    bottom,
    animationDuration = "20s",
    delay = "0s"
}: AnimatedOrbProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div
            className="animated-orb"
            style={{
                backgroundColor: color,
                width: `${size}px`,
                height: `${size}px`,
                top,
                left,
                right,
                bottom,
                animationDuration,
                animationDelay: delay,
            }}
        />
    );
};
