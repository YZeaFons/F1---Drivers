import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './landingPage/LandingPage'
import Cards from './cards/Cards'
import NotFound from './notFound/NotFound'

const URL = 'http://localhost:3001/F1/drivers'

function App() {
  // -------------------- States ----------------------------
  const [drivers, setDrivers] = useState([])

  // --------------------- Functions ------------------------
  const onSearch = async (name) => {
    try {
      if (name === '') { window.alert('Debes ingresar un nombre') }
      else {
        const { data } = await axios.get(`${URL}/name?name=${name}`)
        if (data.length) {
          console.log(data);
          setDrivers(data)
        } else {
          window.alert('No existen coincidencias con el nombre proporcionado')
        }
      }
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<LandingPage />}
        />
        <Route
          path='/home'
          element={<Cards onSearch={onSearch} drivers={drivers} />}
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
