import { ReactNode } from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: ReactNode;
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
    return (
        <div className="glass-panel service-card hover-lift">
            <div className="service-icon">{icon}</div>
            <h3 className="service-title">{title}</h3>
            <p className="service-desc">{description}</p>
        </div>
    );
}
