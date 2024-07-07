import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BusinessCard  } from '../BusinessCard'

function App() {

  const [cardDetails, setCardDetails] = useState([{
    name: "Sai Chandu",
    description: "Trying to learn",
    interests: ["React", "Node", "SQL"],
    linkedin : "https://www.linkedin.com/in/sambangi-saichandu/",
    twitter: "https://x.com/schandu629"
  }])

  console.log(cardDetails);

  return (
    <div>
        {cardDetails.map((card) => {
          return <BusinessCard card={card}></BusinessCard>
         })
        }
    </div>
  )
}

export default App
