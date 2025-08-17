import { useState, useEffect, useRef } from "preact/hooks";
import { SCRAMBLE_CHARS } from "../../../constants/scrambleChars";

/**
 * Returns a random character from the scramble set.
 */
function randomChar(): string {
  return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
}

/**
 * Hook that animates a string with a scramble effect.
 * Gradually transitions to the target string, adding or removing characters as needed.
 *
 * @param target - The target string to animate to.
 * @param speed - Interval in milliseconds between scramble updates. Default is 50ms.
 * @returns The scrambled, animated string.
 */
export default function useScrambledText(target: string, speed: number = 20): string {
  const [displayedText, setDisplayedText] = useState(target);
  const currentRef = useRef(target);

  useEffect(() => {
    let interval: number;
    let current = currentRef.current;
    let progress = 0; // how many characters have locked in

    interval = window.setInterval(() => {
      const maxLength = Math.max(current.length, target.length);
      let newText = "";
      let done = true;

      for (let i = 0; i < maxLength; i++) {
        const fromChar = current[i] || "";
        const toChar = target[i] || "";

        if (i < progress) {
          // Characters before progress are locked in
          newText += toChar;
        } else if (!fromChar && toChar) {
          // Gradually add new characters
          newText += Math.random() < 0.3 ? toChar : randomChar();
          done = false;
        } else if (fromChar && !toChar) {
          // Gradually remove characters
          if (Math.random() < 0.3) {
            // skip adding to remove
          } else {
            newText += randomChar();
            done = false;
          }
        } else if (fromChar !== toChar) {
          // Scramble characters that differ
          newText += randomChar();
          done = false;
        } else {
          // Matching character — lock in sometimes
          if (Math.random() < 0.2) {
            newText += toChar;
            progress++;
          } else {
            newText += randomChar();
            done = false;
          }
        }
      }

      current = newText;
      setDisplayedText(newText);

      if (done) {
        clearInterval(interval);
        currentRef.current = target;
      } else {
        // Increment progress occasionally for smooth lock-in
        if (progress < target.length && Math.random() < 0.3) progress++;
      }
    }, speed);

    return () => clearInterval(interval);
  }, [target, speed]);

  return displayedText;
}
