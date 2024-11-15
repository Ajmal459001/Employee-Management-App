import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      {/* header */}
      <Header/>
      {/* paths for different pages */}
      <Routes>
        <Route path='/' element={ <Home/> } />
      </Routes>
      {/* footer */}
      <Footer/>
    </>
  )
}

export default App
