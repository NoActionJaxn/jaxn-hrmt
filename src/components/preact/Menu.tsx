import { useCallback } from "preact/hooks";
import { ROUTES } from "../../constants/routes";
import { toggleContact } from "../../nanostores/contact";

export default function Menu () {
  const handleToggleContact = useCallback((e: Event) => {
    e.preventDefault();
    toggleContact();
  }, []);
  
  return (
    <nav class="px-2 py-1 inline-block">
      <ul class="space-x-4 text-sm font-bold font-gnuolane tracking-wider">
        {Object.entries(ROUTES).map(([_, route]) => (
          <li class="inline">
            <a href={route.path()} class="hover:underline">
              {route.label}
            </a>
          </li>
        ))}

        {/* Toggle contact form */}
        <li class="inline">
          <a href="#" onClick={handleToggleContact} class="hover:underline">
            Business Inquiries
          </a>
        </li>
      </ul>
    </nav>
  );
}
