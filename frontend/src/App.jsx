import { Route, Routes } from 'react-router'
import Signup from './components/Signup'
import Landing from './components/Landing'
import './sass/main.scss'
import Login from './components/Login'
import Logout from './components/Logout'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  )
}

export default App
