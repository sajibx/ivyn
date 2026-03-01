import React from "react";

interface ProjectCardProps {
    title: string;
    description: string;
    imagePath: string;
    tags: string[];
}

export const ProjectCard = ({
    title,
    description,
    imagePath,
    tags,
}: ProjectCardProps) => {
    return (
        <div className="project-card glass-panel hover-lift">
            <div className="project-image-container">
                {/* We use a div with background image for simple responsive sizing */}
                <div
                    className="project-image"
                    style={{ backgroundImage: `url(${imagePath})` }}
                ></div>
            </div>
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-desc">{description}</p>

                <div className="project-tags">
                    {tags.map((tag) => (
                        <span key={tag} className="project-tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
