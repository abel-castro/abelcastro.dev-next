export default async function PostTitle({
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
      {hasLink ? <a href={slug}>{title}</a> : title}
    </h2>
  );
}
