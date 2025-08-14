"use client"
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext()

export const ThemeMode = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarColor, setSidebarColor] = useState("#f5f5f5")

 
  useEffect(() => {
    const savedDark = localStorage.getItem("darkMode")
    const savedSidebar = localStorage.getItem("sidebarColor")

    if (savedDark === "true") setDarkMode(true)
    if (savedSidebar) setSidebarColor(savedSidebar)
  }, [])

  
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#2b2b2b" : "#ffffff"
    document.body.style.color = darkMode ? "#e0e0e0" : "#000000"
    localStorage.setItem("darkMode", darkMode)
  }, [darkMode])

  
  const changeSidebarColor = (color) => {
    setSidebarColor(color);
    localStorage.setItem("sidebarColor", color);
  }

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, sidebarColor, changeSidebarColor }} >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)