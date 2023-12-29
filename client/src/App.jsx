import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './landingPage/LandingPage'
import Cards from './cards/Cards'
import NotFound from './notFound/NotFound'
import Detail from './detail/Detail'
import Form from './form/Form'

const URL = 'http://localhost:3001/F1/drivers/name'
const URL2 = 'http://localhost:3001/F1/driver'

function App() {
  // ?---------------------- States ----------------------------
  const [drivers, setDrivers] = useState([])

  // ?--------------------- Functions ------------------------
  // ********************* F onSearch ************************
  const onSearch = async (name) => {
    try {
      if (name === '') { window.alert('Debes ingresar un nombre') }
      else {
        const { data } = await axios.get(`${URL}?name=${name}`)
        if (data.length) {
          setDrivers(data)

        } else {
          window.alert('No existen coincidencias con el nombre proporcionado')
        }
      }
    } catch (error) {
      alert(error.message)
    }
  }
  // ******************* F Get All Drivers **********************
  const getAllDrivers = async () => {
    try {
      const { data } = await axios.get(URL2)
      setDrivers(data)
    } catch (error) {
      alert(error.message)
    }
  }
  // ******************* F createDriver *******************
  const createDriver = () => {

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
          element={<Cards onSearch={onSearch} drivers={drivers} getAllDrivers={getAllDrivers} />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
        <Route
          path='/driver/:id'
          element={<Detail />}
        />
        <Route
          path='/create'
          element={<Form createDriver={createDriver} />}
        />
      </Routes>
    </div>
  )
}

export default App
