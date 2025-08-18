import { useCallback } from "preact/hooks";
import { ROUTES } from "../../constants/routes";
import { toggleContact } from "../../nanostores/contact";

export default function Menu () {
  const handleToggleContact = useCallback((e: Event) => {
    e.preventDefault();
    toggleContact();
  }, []);
  
  return (
    <nav class="px-2 py-1 inline-block space-x-4 font-gnuolane font-bold tracking-wider text-sm">
      <ul class="inline space-x-4">
        {Object.entries(ROUTES).map(([_, route]) => (
          <li class="inline">
            <a href={route.path()} class="hover:underline">
              {route.label}
            </a>
          </li>
        ))}        
      </ul>
      <button type="button" onClick={handleToggleContact} class="inline-block hover:underline bg-transparent border-0 p-0 font-inherit cursor-pointer">
        Business Inquiries
      </button>
    </nav>
  );
}
