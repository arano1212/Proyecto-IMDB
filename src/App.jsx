import './App.css'
import Header from '@/components/Header/'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from '@/routes'
import Footer from '@/components/Footer'

function App () {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutesIndex />
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
