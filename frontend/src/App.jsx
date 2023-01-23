import { Route, Routes } from 'react-router'
import Signup from './components/Signup'
import Footer from './components/Footer'
import Landing from './components/Landing'
import './sass/main.scss'
import Login from './components/Login'
import Logout from './components/Logout'
import Navbar from './components/Navbar'
import UserProfile from './components/UserProfile'

function App() {
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<><Navbar /><Landing /></>} />
        <Route path="/signup" element={<><Signup /><Footer /></>} />
        <Route path="/login" element={<><Login /><Footer /></>} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
        {/* <UserProfile /> */}
    </div>
  )
}

export default App
