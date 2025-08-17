import useTheme from "./hooks/useTheme";

export default function ThemeSelector() {
  const [theme, toggleTheme] = useTheme();

  return (
    <button
      type="button"
      id="theme-selector"
      onClick={toggleTheme}
      className="p-2 aspect-square rounded inline-block cursor-pointer text-sm"
    >
        {theme === "dark" ? (
            <i className="fa-solid fa-sun" />
        ) : (
            <i className="fa-solid fa-moon" />
        )}
    </button>
  );
}
