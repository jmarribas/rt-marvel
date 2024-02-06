import { Route, Routes } from 'react-router-dom'
import './App.css'
import NotFound from './pages/404/NotFound'
import Characters from './pages/Characters/Characters'
import Comics from './pages/Comics/Comics'
import Series from './pages/Series/Series'
import Home from './pages/Home/Home'
import CharacterId from './components/CharacterId/CharacterId'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header />
      <main className='main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterId />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/series" element={<Series />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App