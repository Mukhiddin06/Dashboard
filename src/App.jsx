
import './App.css'
import Navbar from './components/Navbar'
import Routers from './Routes'


function App() {

  return (
    <div className='flex w-[1440px] mx-auto'>
      <Navbar/>
      <Routers/>
    </div>
  )
}

export default App
