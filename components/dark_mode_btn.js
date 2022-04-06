import { useTheme } from 'next-themes'

export default function DarkModeBtn() {
  const { theme, setTheme } = useTheme()

  return <button
          aria-label="Toggle Dark Mode"
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          {theme === "dark" ? "light" : "dark"}
        </button>
}
