
import { useEffect } from "preact/hooks";

/**
 * useOutsideClick
 *
 * Fires the handler when clicking/touching outside of the given ref element.
 *
 * @param ref - Preact ref pointing to an element
 * @param handler - Callback fired on outside click/tap
 */
export default function useOutsideClick<T extends HTMLElement>(
  ref: preact.RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    function listener(event: MouseEvent | TouchEvent) {
      const el = ref.current;
      if (!el || el.contains(event.target as Node)) return;
      handler(event);
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]); // re-run if handler or ref changes
}
