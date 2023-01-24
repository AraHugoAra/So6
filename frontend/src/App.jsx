import { Route, Routes } from 'react-router'
import Signup from './components/Signup'
import Footer from './components/Footer'
import Landing from './components/Landing'
import './sass/main.scss'
import Login from './components/Login'
import Logout from './components/Logout'
import NavbarTop from './components/Navbar'
import UserProfile from './components/UserProfile'
import PostsGrid from './components/PostsGrid'
import NavbarBottom from './components/NavbarBottom'
import { AuthContext } from "./context/AuthContext";
import { useState } from "react";
import AuthChecker from "./services/AuthChecker";

function App() {
  const [auth, setAuth] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: auth,
        setIsAuthenticated: setAuth,
      }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <AuthChecker>
              <NavbarTop />
              <Landing />
              <NavbarBottom />
            </AuthChecker>
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
          path="/user/:id"
          element={
            <AuthChecker>
              <NavbarTop />
              <UserProfile />
              <PostsGrid />
              <NavbarBottom />
            </AuthChecker>
          }
        />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
