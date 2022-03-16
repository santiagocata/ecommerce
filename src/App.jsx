import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Register from "./component/Register";
import Login from "./component/Login";
import Simple from "./component/Simple";
import Grid from "./component/Grid";
import Categories from "./component/Categories";
import Agregar from "./component/Agregar"
import Footer from './component/Footer'
import Eliminar from './component/Eliminar'
import Editar from './component/Editar'
import Configuracion from "./component/Configuracion";

import CrearCategoria from "./component/CrearCategoria";

import AddAdmins from "./component/AddAdmins";
import DeleteAdmins from "./component/DeleteAdmins";




import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./state/user";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Admin from './component/Admin'
import Error from "./component/Error";
import ConfigUser from "./component/Configuracion";
import store from "./state/store";

const App = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const useRol = useSelector((state) => state.user.rol);

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
        <Route path="/search" element={<Grid products={state} />} />
        <Route path="/configuracion" element={<Configuracion />} />
        <Route path="/admin" element={useRol === "superadmin" || useRol === "admin" ? <Admin /> : <Error />} />
        <Route path="/admin/crearcategoria" element={useRol === "superadmin" || useRol === "admin" ? <CrearCategoria /> : <Error />} />
        <Route path="/admin/agregar" element={useRol === "superadmin" || useRol === "admin" ? <Agregar /> : <Error />} />
        <Route path="/admin/eliminar" element={useRol === "superadmin" || useRol === "admin" ? <Eliminar /> : <Error />}/>
        <Route path="/admin/editar" element={useRol === "superadmin" || useRol === "admin" ? <Editar /> : <Error />}/>
        <Route path="/admin/agregaradmin" element={useRol === "superadmin" || useRol === "admin" ? <AddAdmins /> : <Error />}/>
        <Route path="/admin/deleteadmin" element={useRol === "superadmin" || useRol === "admin" ? <DeleteAdmins /> : <Error />}/>
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
