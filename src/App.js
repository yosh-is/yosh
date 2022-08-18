import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div
      className="App"
      data-color-mode={darkMode ? "dark" : "light"}
    >
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
