import type { FC } from "preact/compat";
import { useState } from "preact/hooks";
import classNames from "classnames";
import useScrambledText from "./hooks/useScrambledText";
import { ROUTES } from "../../constants/routes";

const INITIAL_TEXT = "jaxnhrmt";
const HOVERED_TEXT = "jackson hermitt";

type AnimatedLogoProps = {
  className?: string;
};

const AnimatedLogo: FC<AnimatedLogoProps> = ({
  className = ""
}) => {
  const [text, setText] = useState(INITIAL_TEXT);

  const title = useScrambledText(text);

  return (
    <div>
      <a
        href={ROUTES.index.path()}
        className={classNames("text-gruvbox-fg0 uppercase font-black", className)}
        onMouseEnter={() => setText(HOVERED_TEXT)}
        onMouseLeave={() => setText(INITIAL_TEXT)}
      >
        {title}
      </a>
    </div>
  );
}

export default AnimatedLogo;