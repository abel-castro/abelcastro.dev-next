type LinkAsButtonProps = {
    href: string;
    text: string;
    extraClasses?: string;
};
export default function LinkAsButton({
    href,
    text,
    extraClasses = '',
}: LinkAsButtonProps) {
    return (
        <a
            className={`btn text-white bg-sky-500 hover:bg-sky-700 border-sky-700 hover:border-sky-700 ${extraClasses}`}
            href={href}
        >
            {text}
        </a>
    );
}
