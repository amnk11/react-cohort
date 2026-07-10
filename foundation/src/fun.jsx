const ThemeContext = createContext();

function ThemeDisplay() {
  // Use context here to get theme and toggleTheme
  return (
    <div id="theme-display">
      {/* Display theme and toggle button */}
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      {/* Wrap ThemeDisplay with Provider */}
      <ThemeDisplay />
    </div>
  );
}