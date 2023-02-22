import React from "react"
import "./style.css"
import "tailwindcss/lib/css/preflight.css"
import ServiceLandingPage from "demos/ServiceLandingPage"
import AnimationRevealPage from "helpers/AnimationRevealPage"

function App() {
  return (
    <AnimationRevealPage>
      <ServiceLandingPage />
    </AnimationRevealPage>
  )
}

export default App