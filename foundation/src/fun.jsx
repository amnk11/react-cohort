function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function Login() {
    return (
      <>
        <p id="status">Please log in</p>
        <button id="login-btn" onClick={() => setIsLoggedIn((prev) => !prev)}>
          Log In
        </button>
      </>
    );
  }

  function Dashboard() {
    return (
      <>
        <p id="status">Welcome back!</p>
        <button id="logout-btn" onClick={() => setIsLoggedIn((prev) => !prev)}>
          Log Out
        </button>
        <span id="badge">Online</span>
      </>
    );
  }

  return <div>{isLoggedIn ? <Dashboard /> : <Login />}</div>;
}
