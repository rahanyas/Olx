import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './components/pages/HomePage'
import CarPage from './components/pages/CarPage'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
               <Route index element={<HomePage/>}/>
               <Route path='/car' element={<CarPage/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
