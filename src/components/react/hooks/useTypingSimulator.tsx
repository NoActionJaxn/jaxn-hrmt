
import { useState, useEffect, useRef } from "preact/hooks";

/**
 * A custom hook that simulates typing and deleting text, optionally looping and displaying a blinking cursor.
 *
 * @param text - The text to simulate typing.
 * @param speed - The speed (in ms) of typing/deleting each character. Defaults to 100ms.
 * @param options - Optional configuration object.
 * @param options.loop - If true, the text will be deleted and re-typed in a loop. Defaults to false.
 * @param options.cursorBlinkSpeed - The speed (in ms) of the cursor blink. Defaults to 500ms.
 *
 * @returns An object containing:
 * - `displayedText`: The currently displayed portion of the text.
 * - `showCursor`: Whether the cursor should be visible.
 * - `isTyping`: Whether the typing animation is currently active.
 *
 * @example
 * ```tsx
 * const { displayedText, showCursor, isTyping } = useTypingSimulator("Hello, world!", 100, { loop: true });
 * ```
 */
function useTypingSimulator(
  text: string,
  speed: number = 100,
  options?: { loop?: boolean; cursorBlinkSpeed?: number }
) {
  const { loop = false, cursorBlinkSpeed = 500 } = options ?? {};

  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  const indexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const intervalRef = useRef<number | null>(null);

  // Typing effect
  useEffect(() => {
    setDisplayedText("");
    indexRef.current = 0;
    isDeletingRef.current = false;
    setIsTyping(true);

    intervalRef.current = window.setInterval(() => {
      if (isDeletingRef.current) {
        if (indexRef.current > 0) {
          indexRef.current -= 1;
          setDisplayedText(text.slice(0, indexRef.current));
        } else {
          isDeletingRef.current = false;
          if (!loop) {
            clearInterval(intervalRef.current!);
            setIsTyping(false);
          }
        }
      } else {
        if (indexRef.current < text.length) {
          indexRef.current += 1;
          setDisplayedText(text.slice(0, indexRef.current));
        } else {
          if (loop) {
            isDeletingRef.current = true;
          } else {
            clearInterval(intervalRef.current!);
            setIsTyping(false);
          }
        }
      }
    }, speed);

    return () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
    };
  }, [text, speed, loop]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = window.setInterval(() => {
      setShowCursor((prev) => !prev);
    }, cursorBlinkSpeed);

    return () => clearInterval(cursorInterval);
  }, [cursorBlinkSpeed]);

  return {
    displayedText,
    showCursor: isTyping || showCursor,
    isTyping,
  };
}

export default useTypingSimulator;
