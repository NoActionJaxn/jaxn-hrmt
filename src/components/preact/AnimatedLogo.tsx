import { useState } from "preact/hooks";
import classNames from "classnames";
import useScrambledText from "./hooks/useScrambleTransition";
import { ROUTES } from "../../constants/routes";

const INITIAL_TEXT = "jaxnhrmt";
const HOVERED_TEXT = "jackson hermitt";

type AnimatedLogoProps = {
  className?: string;
};

export default function AnimatedLogo({
  className
}: AnimatedLogoProps) {
  const [text, setText] = useState(INITIAL_TEXT);

  const title = useScrambledText(text);

  return (
    <div class="inline-block w-min">
      <a
        href={ROUTES.index.path()}
        className={classNames("uppercase font-black whitespace-nowrap", className)}
        onMouseEnter={() => setText(HOVERED_TEXT)}
        onMouseLeave={() => setText(INITIAL_TEXT)}
      >
        {title}
      </a>
    </div>
  );
}
