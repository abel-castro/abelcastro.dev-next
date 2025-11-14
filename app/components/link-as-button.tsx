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
            className={`btn text-white bg-teal-500 hover:bg-teal-700 border-teal-700 hover:border-teal-700 ${extraClasses}`}
            href={href}
        >
            {text}
        </a>
    );
}
