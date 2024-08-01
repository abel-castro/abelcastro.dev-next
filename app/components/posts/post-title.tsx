import Link from 'next/link'

export default function PostTitle({
  title,
  slug,
  hasLink = true,
}: {
  title: string;
  slug: string;
  hasLink?: boolean;
}) {
  return (
    <h2
      className={`text-2xl font-bold mb-2 text-sky-500  ${
        hasLink ? "hover:text-sky-700" : ""
      }`}
    >
      {hasLink ? <Link href={slug}>{title}</Link> : title}
    </h2>
  );
}
