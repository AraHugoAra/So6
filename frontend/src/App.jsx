import { Route, Routes } from 'react-router'
import Signup from './components/Signup'
import Landing from './components/Landing'
import './sass/main.scss'
import Login from './components/Login'
import NavbarTop from './components/NavbarTop'
import UserProfile from './components/UserProfile'
import PostsGrid from './components/PostsGrid'
import NavbarBottom from './components/NavbarBottom'
import { AuthContext } from "./context/AuthContext";
import { UserContext } from './context/UserContext'
import { useEffect, useState } from "react";
import AuthChecker from "./services/AuthChecker";
import AddPost from "./components/AddPost"

function App() {
  const [auth, setAuth] = useState(false);
  const userData = localStorage.getItem('userData');
  const [user, setUser] = useState(userData ? JSON.parse(userData) : null );
  useEffect(() => localStorage.setItem('userData', JSON.stringify(user)), [user])

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: auth,
        setIsAuthenticated: setAuth,
      }}
    >

      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Routes>
          <Route
            exact path="/"
            element={
              <AuthChecker>
                <NavbarTop />
                <Landing />
                <NavbarBottom />
              </AuthChecker>
            }
          />
          <Route exact path="/signup" element={<Signup />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route
            exact path="/users/:id"
            element={
              <AuthChecker>
                <NavbarTop />
                <UserProfile />
                <PostsGrid />
                <NavbarBottom />
              </AuthChecker>
            }
          />
          <Route 
            path="/test"
            element={
              <AuthChecker>
                <NavbarTop />
                <UserProfile />
                <PostsGrid />
                <NavbarBottom />
              </AuthChecker>
            }
          />
          <Route
            exact path = "/posts/add"
            element = {
              <AuthChecker>
                <NavbarTop/>
                <AddPost />
                <NavbarBottom/>
              </AuthChecker>
            }
          />
        </Routes>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
