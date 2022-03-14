import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Register from "./component/Register";
import Login from "./component/Login";
import Simple from "./component/Simple";
import Grid from "./component/Grid";
import Categories from "./component/Categories";

import Footer from './component/Footer'


import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "./state/user";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();

  useEffect(async () => {
    const userLoged = await axios.get("/wasLogged");
    dispatch(setUser(userLoged.data));
  }, {});

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<Simple />} />
        <Route path="/categories/:id" element={<Categories />} />
        <Route path="/search" element={<Grid products={state}/>} />
      </Routes>

    <div>
      <footer>

      <Footer />
      </footer>
    </div>
  );
};

export default App;
