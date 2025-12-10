
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import CustomRouter from './Router/CustomRouter'
import Navbar from './components/Navbar'

function App() {
 

  return (
  <div>
    <BrowserRouter>
    <div className='h-[100vh]'>
      {/* <Navbar/> */}
    <CustomRouter/>
    </div>
    
    </BrowserRouter>
  </div>
  )
}

export default App
