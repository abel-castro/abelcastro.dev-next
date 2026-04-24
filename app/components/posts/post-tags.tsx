'use client';

import { useMemo, useState } from 'react';

import { Tag } from '../../lib/definitions';

const VISIBLE_TAGS_COUNT = 3;

export default function PostTags({ tags }: { tags: Tag[] }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const hasHiddenTags = tags.length > VISIBLE_TAGS_COUNT;
    const hiddenTagsCount = Math.max(tags.length - VISIBLE_TAGS_COUNT, 0);

    const displayedTags = useMemo(() => {
        if (isExpanded || !hasHiddenTags) {
            return tags;
        }

        return tags.slice(0, VISIBLE_TAGS_COUNT);
    }, [hasHiddenTags, isExpanded, tags]);

    return (
        <div className="mb-2 flex max-w-full flex-wrap gap-2">
            {displayedTags.map((tag, index) => (
                <span
                    key={`tag-${index}`}
                    className="max-w-full break-words rounded bg-sky-100 px-2 py-1 text-xs text-gray-800"
                >
                    {tag.name}
                </span>
            ))}

            {hasHiddenTags && !isExpanded && (
                <button
                    aria-label="Show all tags"
                    className="rounded bg-sky-100 px-2 py-1 text-xs text-gray-800"
                    onClick={() => setIsExpanded(true)}
                    type="button"
                >
                    + {hiddenTagsCount}
                </button>
            )}
        </div>
    );
}
