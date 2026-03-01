import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
}

export function Button({ variant = 'primary', children, ...props }: ButtonProps) {
    return (
        <button className={`btn btn-${variant}`} {...props}>
            {children}
        </button>
    );
}
