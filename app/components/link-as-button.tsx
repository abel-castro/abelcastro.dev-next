type LinkAsButtonProps = {
    href: string;
    text: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
};

export default function LinkAsButton({
    href,
    text,
    variant = 'primary',
    size = 'md',
    className = '',
}: LinkAsButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variants = {
        primary: 'bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
        outline: 'border-2 border-teal-600 text-teal-600 hover:bg-teal-50 focus:ring-teal-500',
        ghost: 'bg-transparent text-foreground hover:bg-accent/10 focus:ring-accent',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    return (
        <a
            href={href}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        >
            {text}
        </a>
    );
}
