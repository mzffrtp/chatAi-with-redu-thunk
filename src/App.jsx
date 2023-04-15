import React from "react"
import { useState } from "react";
import { Button, Container } from "react-bootstrap"
import HomePage from "./pages/homePage";
import "../src/assets/App.css";

export default function App() {
  const [isDark, setIsDark] = useState(false)
  
  const handleThemeToogle = () => {
    setIsDark(!isDark)
    console.log(isDark);
  }
  return (
    <Container className={
      isDark ? "bg-light" : "bg-dark"
    }>
      <Button className="mt-1"><label className="switch">
        <input 
        onClick={handleThemeToogle}
        type="checkbox" />
        <span className="slider"></span>
      </label></Button>
      <HomePage />
    </Container>
  )
}




