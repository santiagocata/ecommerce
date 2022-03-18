import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Register from "./component/Register";
import Login from "./component/Login";
import Simple from "./component/Simple";
import Grid from "./component/Grid";
import Categories from "./component/Categories";
import Agregar from "./component/Agregar";
import Footer from "./component/Footer";
import Eliminar from "./component/Eliminar";
import Editar from "./component/Editar";
import Configuracion from "./component/Configuracion";
import OrdersAdmin from "./component/OrdersAdmin";

import CrearCategoria from "./component/CrearCategoria";

import AddAdmins from "./component/AddAdmins";
import DeleteAdmins from "./component/DeleteAdmins";

import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./state/user";
import { useEffect, useState } from "react";

import Admin from "./component/Admin";
import Error from "./component/Error";
import ConfigUser from "./component/Configuracion";
import store from "./state/store";

const App = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const userRol = useSelector((state) => state.user.rol);

  useEffect(() => {
    axios.get("/wasLogged").then((userLoged) => {
      dispatch(setUser(userLoged.data));
    });
  }, []);

  /// Al refrescar la página, App.js renderiza 2 veces. La primera userRol toma valor "undefined" por más que el usuario este logeado y sea superadmin

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
        <Route path="/search" element={<Grid products={state} />} />
        <Route path="/configuracion" element={<Configuracion />} />
        {userRol?.includes("admin") && (
          <>
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/crearcategoria" element={<CrearCategoria />} />
            <Route path="/admin/agregar" element={<Agregar />} />
            <Route path="/admin/eliminar" element={<Eliminar />} />
            <Route path="/admin/editar" element={<Editar />} />
            <Route path="/admin/orders" element={<OrdersAdmin />} />
            {userRol === "superadmin" && (
              <>
                <Route path="/admin/agregaradmin" element={<AddAdmins />} />
                <Route path="/admin/deleteadmin" element={<DeleteAdmins />} />
              </>
            )}
          </>
        )}
        <Route path="404" element={<Error />} />
        {/* <Route path="*" element={<Navigate to="404" />} /> */}
      </Routes>
      <div>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default App;
