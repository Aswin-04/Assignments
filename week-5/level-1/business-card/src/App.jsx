import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BusinessCard } from "./components/BusinessCard";

function App() {
  const user = {
    name: "Lokeshwar",
    description: "A TA in the 100xDevs Cohort 2.0",
    interests: ["Ionic", "Open Source", "App Dev"],
    linkedIn: "www.google.com",
    twitter: "www.google.com"
  }

  return (
    <div>
      <BusinessCard prop={user}> 
      </BusinessCard>
    </div>

  )
}

export default App
