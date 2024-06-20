import { Tag } from "../../lib/definitions";

export default async function PostTags({ tags }: { tags: Tag[] }) {
  return (
    <div className="flex space-x-2 mb-2">
      {tags.map((tag, idx) => (
        <span
          key={idx}
          className="text-xs bg-sky-100 text-gray-800 py-1 px-2 rounded"
        >
          {tag.name}
        </span>
      ))}
    </div>
  );
}
