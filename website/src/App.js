import React from "react"
import "./style.css"
import "tailwindcss/lib/css/preflight.css"
import LandingPage from "Pages/LandingPage"
import ContactUs from "Treact/pages/ContactUs"
import SignUpPage from "Pages/SignUpPage"
import SignInPage from "Pages/SignInPage"
import AnimationRevealPage from "Treact/helpers/AnimationRevealPage"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
      <LandingPage /> 
  )
}

export default App