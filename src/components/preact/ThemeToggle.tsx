import useTheme from "./hooks/useTheme";

export default function ThemeSelector() {
  const [theme, toggleTheme] = useTheme();

  return (
    <button
      type="button"
      id="theme-selector"
      onClick={toggleTheme}
      class="p-2 aspect-square rounded inline-block cursor-pointer text-sm"
    >
        {theme === "dark" ? (
            <i class="fa-solid fa-sun" />
        ) : (
            <i class="fa-solid fa-moon" />
        )}
    </button>
  );
}
