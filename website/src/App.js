import React from "react"
import "./style.css"
import "tailwindcss/lib/css/preflight.css"
import LandingPage from "Pages/LandingPage.js"
import ContactUs from "Pages/ContactUs.js"
import SignUpPage from "Pages/SignUpPage.js"
import SignInPage from "Pages/SignInPage.js"
import AdminDash from "Pages/AdminDash.js"
import CalendarPage from "Pages/CalendarPage.js"
import AnimationRevealPage from "Treact/helpers/AnimationRevealPage"
import { Route, Routes } from "react-router-dom"


function App() {
  return (
      <SignInPage /> 
     )
}

export default App