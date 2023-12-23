import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './landingPage/LandingPage'
import Cards from './cards/Cards'
import NotFound from './notFound/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<LandingPage />}
        />
        <Route
          path='/home'
          element={<Cards />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </div>
  )
}

export default App
