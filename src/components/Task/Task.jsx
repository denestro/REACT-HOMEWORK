import React, { useState, useEffect } from "react";
import "./Task.module.scss";

const titles = ["Привет, мир!", "React — крутой!", "Учусь хукам", "Измени заголовок!"];

function TitleChanger({ theme }) {
  useEffect(() => {
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    document.title = randomTitle;
  }, [theme]);

  return null;
}

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    console.log("Текущая тема:", theme); 
    document.documentElement.setAttribute("data-theme", theme); 
  }, [theme]);

  return (
    <div className="container">
      <TitleChanger theme={theme} />
      <h1>Текущая тема: {theme === "light" ? "Светлая" : "Тёмная"}</h1>
      <button onClick={toggleTheme}>Переключить тему</button>
    </div>
  );
}

export default ThemeSwitcher;
