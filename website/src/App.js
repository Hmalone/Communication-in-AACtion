import React from "react"
import "./style.css"
import "tailwindcss/lib/css/preflight.css"
import LandingPage from "Pages/LandingPage"
import ContactUs from "Treact/pages/ContactUs"
import AnimationRevealPage from "Treact/helpers/AnimationRevealPage"

function App() {
  return (
    <AnimationRevealPage>
      <LandingPage />
      {/* <ContactUs /> */}
    </AnimationRevealPage>
  )
}

export default App