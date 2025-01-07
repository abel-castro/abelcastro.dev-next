import Image from 'next/image';

import LinkAsButton from './link-as-button';

type ProjectCardProps = {
    title: string;
    description: string;
    buttonText?: string;
    buttonHref?: string;
    imageSrc?: string;
    imageAlt?: string;
    extraClasses?: string;
};
export default function ProjectCard({
    title,
    description,
    imageSrc,
    imageAlt,
    buttonText,
    buttonHref,
    extraClasses,
}: ProjectCardProps) {
    return (
        <div
            className={`card mb-6 bg-slate-800 shadow-xl w-full aspect-square ${extraClasses}`}
        >
            {imageSrc && imageAlt && (
                <figure>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={400}
                        height={250}
                    />
                </figure>
            )}
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                {buttonText && buttonHref && (
                    <div className="mt-3 card-actions justify-end">
                        <LinkAsButton text={buttonText} href={buttonHref} />
                    </div>
                )}
            </div>
        </div>
    );
}
