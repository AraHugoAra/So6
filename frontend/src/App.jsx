import { Route, Routes } from 'react-router'
import Signup from './components/Signup'
import Landing from './components/Landing'
import './sass/main.scss'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
