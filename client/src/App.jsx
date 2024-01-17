import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import LandingPage from './landingPage/LandingPage'
import Cards from './cards/Cards'
import NotFound from './notFound/NotFound'
import Detail from './detail/Detail'
import Form from './form/Form'
import { useDispatch } from 'react-redux'
import { addDriver } from './redux/actions'

function App() {
  // ?---------------------- Hooks ----------------------------
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // ?--------------------- SYNC Functions ------------------------
  // ******************* F createDriver *******************
  const createDriver = (newDriver) => {
    dispatch(addDriver(newDriver))
    navigate('/home')
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
          element={<Cards />}
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
