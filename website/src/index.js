import React from "react"
import "./style.css"
import "tailwindcss/lib/css/preflight.css"
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from 'Pages/LandingPage';
import ContactUs from 'Pages/ContactUs';
import SignInPage from 'Pages/SignInPage';
import SignUpPage from 'Pages/SignUpPage';
import CalendarPage from 'Pages/CalendarPage';
import AdminDash from "Pages/AdminDash";
import { NavLink } from 'Treact/components/headers/light';
import { Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom';
import AccountPage from 'Pages/AccountPage';
import ServicesPage from 'Pages/ServicesPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <NavLink>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='ContactUs' element={<ContactUs/>} />
          <Route path='SignInPage' element={<SignInPage/>} />
          <Route path='SignUpPage' element={<SignUpPage/>} />
          <Route path='CalendarPage' element={<CalendarPage/>} />
          <Route path="AdminPage" element={<AdminDash/>} />
          <Route path="AccountPage" element={<AccountPage/>} />
          <Route path="ServicesPage" element={<ServicesPage/>} />
        </Routes>
      </NavLink>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
