import { useMemo, useState } from "preact/hooks";
import classnames from "classnames";
import type { Tag } from "../../types/strapi";

export interface TagFilterProps {
  tags?: Tag[];
  selectedTagSlugs?: Tag["slug"][];
  onChange?: (tag: Tag) => void;
}

export default function TagFilter ({
  tags = [],
  selectedTagSlugs = [],
  onChange = () => {}
}: TagFilterProps) {
  const [search, setSearch] = useState<string>('');

  const visibleTags = useMemo(() => {
    return tags
      .filter(tag => tag?.name?.toLowerCase().includes(search.toLowerCase()))
      .slice(0, 20);
  }, [tags, search]);

  const handleSearchChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setSearch(target.value);
  };

  const handleClear = () => {
    setSearch("");
  };

  const isSelected = (tag: Tag) => {
    return selectedTagSlugs.some(t => t === tag.slug);
  };

  return (
    <div class="space-y-2">
    <div class="flex gap-2">
      <div class="flex h-8.5 w-full font-proximanova rounded-sm border shadow-sm outline-none focus-within:ring-4 border-gruvbox-bg5 bg-gruvbox-bg2 ring-gruvbox-blue placeholder:text-gruvbox-bg5 text-gruvbox-fg2">
          <input
            type="text"
            value={search}
            onInput={handleSearchChange}
            placeholder="Search tags..."
            class="class h-full grow px-3 tracking-wider bg-transparent outline-none"
          />
          <button type="button" class="uppercase tracking-wider text-xs px-3 h-full cursor-pointer text-gruvbox-bg5 hover:text-gruvbox-fg5" onClick={handleClear}>Clear</button>
        </div>
        
      </div>
      <div class="space-x-2 p-0 m-0">
        {visibleTags.map(tag => (
          <button
            type="button"
            key={tag?.slug}
            onClick={() => onChange(tag)}
            class={classnames(
              'inline-block text-gruvbox-bg0 text-xs font-semibold cursor-pointer px-2.5 py-0.5 rounded',
              isSelected(tag)
                ? 'bg-gruvbox-blue hover:bg-gruvbox-blue-alt'
                : 'bg-gruvbox-fg3 hover:bg-gruvbox-fg4'
            )}
          >
            {tag?.name}
          </button>
        ))}
      </div>
    </div>
  );
}
