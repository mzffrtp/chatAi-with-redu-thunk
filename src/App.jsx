import React from "react"
import { useState } from "react";
import { Button, Container } from "react-bootstrap"
import HomePage from "./pages/homePage";
import styles from "./assets/App.css"


export default function App() {
  const [isDark, setIsDark] = useState(false)
  const handleThemeToogle = () => {
    setIsDark(!isDark)
    console.log(isDark);
  }
  return (
    <Container fluid className={
      isDark ? "bg-dark" : "bg-light"
    }>
      <Button><label className="switch">
        <input 
        onClick={handleThemeToogle}
        type="checkbox" />
        <span className="slider"></span>
      </label></Button>
      <HomePage />
    </Container>
  )
}




