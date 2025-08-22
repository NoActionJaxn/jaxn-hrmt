import { useMemo, useState } from "preact/hooks";
import classnames from "classnames";
import type { Tag } from "../../types/strapi";

export interface TagFilterProps {
  tags?: Tag[];
  onChange?: (tag: Tag[]) => void;
}

export default function TagFilter ({tags, onChange}: TagFilterProps) {
  const [search, setSearch] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const handleSearchChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setSearch(target.value);
  };

  const handleSelectTag = (slug: string) => {
    const tag = tags?.find(t => t.slug === slug);
    if (!tag) return;

    setSelectedTags(prev => {
      const exists = prev.some(t => t.slug === slug);
      const newTags = exists
        ? prev.filter(t => t.slug !== slug)
        : [...prev, tag];

      onChange?.(newTags);
      return newTags;
    });
  };

  const visibleTags = useMemo(() => {
    if (!tags) return [];
    return tags
      .filter(tag => tag.name.toLowerCase().includes(search.toLowerCase()))
      .slice(0, 20);
  }, [tags, search]);

  const isSelected = (tag: Tag) => {
    return selectedTags.some(t => t.slug === tag.slug);
  };

  return (
    <div className="space-y-2">
      <div>
        <input
          type="text"
          value={search}
          onInput={handleSearchChange}
          placeholder="Search tags..."
          class="h-8.5 px-2 w-full font-proximanova rounded-sm border outline-none focus:ring-4 border-gruvbox-bg5 bg-gruvbox-bg2 ring-gruvbox-blue placeholder:text-gruvbox-bg5 text-gruvbox-fg2"
        />
      </div>
      <div className="space-x-2 p-0 m-0">
        {visibleTags.map(tag => (
          <button
            type="button"
            key={tag.slug}
            onClick={() => handleSelectTag(tag.slug)}
            className={classnames(
              'inline-block text-gruvbox-bg0 text-xs font-semibold cursor-pointer px-2.5 py-0.5 rounded',
              isSelected(tag)
                ? 'bg-gruvbox-blue hover:bg-gruvbox-blue-alt'
                : 'bg-gruvbox-fg3 hover:bg-gruvbox-fg4'
            )}
          >
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
}
