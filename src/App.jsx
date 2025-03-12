import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/home/Home";
import LogIn from "./auth/LogIn";
import SignUp from "./auth/SignUp.JSX";
import NavBar from "./components/NavBar";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Dashboard from "./pages/user/dashboard/Dashboard";
import Overview from "./pages/user/overview/Overview";
import Incomes from "./pages/user/Income/Income";
import Expenses from "./pages/user/Expenses/Expenses";
import LayOut from "./pages/user/overview/layout";
import Budget from "./pages/user/budget/Budget";
import Customize from "./pages/user/customize/Customize";
import Faq from "./pages/faq/Faq";
import Contact from "./pages/contact/Contact";


function App() {
  const {loggedIn} = useContext(AuthContext);


  return (
    <>
      {!loggedIn ? <NavBar /> : null}
      {loggedIn ? <LayOut /> : null}
     <Routes>
      <Route path="/" element={ < Home />} /> 
      <Route path="/login" element={ < LogIn />} /> 
      <Route path="/signup" element={ < SignUp />} /> 

      <Route path="/overview" element={ < Overview />} /> 

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/income" element={<Incomes />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="customize" element={<Customize />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/contact" element={<Contact />} />








     </Routes>
    </>
  )
}

export default App
