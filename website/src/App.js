import React from "react"
import "./style.css"
import "tailwindcss/lib/css/preflight.css"
import LandingPage from "Pages/LandingPage"
import AnimationRevealPage from "Treact/helpers/AnimationRevealPage"

function App() {
  return (
    <AnimationRevealPage>
      <LandingPage />
    </AnimationRevealPage>
  )
}

export default App