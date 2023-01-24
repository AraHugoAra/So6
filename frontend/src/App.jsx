import { Route, Routes } from 'react-router'
import Signup from './components/Signup'
import Footer from './components/Footer'
import Landing from './components/Landing'
import './sass/main.scss'
import Login from './components/Login'
import Logout from './components/Logout'
import NavbarTop from './components/NavbarTop'
import UserProfile from './components/UserProfile'
import PostsGrid from './components/PostsGrid'
import NavbarBottom from './components/NavbarBottom'

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavbarTop />
              <Landing />
              <NavbarBottom />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Signup />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
              <Footer />
            </>
          }
        />
        <Route
          path="/users/:id"
          element={
            <>
              <NavbarTop />
              <UserProfile />
              <PostsGrid />
              <NavbarBottom />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App
