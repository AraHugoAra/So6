import { Route, Routes } from 'react-router'
import Signup from './components/Signup'
import Landing from './components/Landing'
import './sass/main.scss'
import Login from './components/Login'

function App() {
  return (
    <div>
      <Routes>
        <p>app ici</p>
        <Route path="/" element={<Landing />} />
        {/* <Login /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </div>
  )
}

export default App
