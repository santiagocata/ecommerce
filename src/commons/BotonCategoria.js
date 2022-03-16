import { Select } from "@chakra-ui/react";
import  Grid  from "../component/Grid";
import { useState,useEffect } from "react";
import axios from "axios";

const BotonCategoria = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("/categories")
      .then((result) => result.data)
      .then((categories) => {
        setCategories(categories);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Select placeholder="Seleccionar el Producto">
        {categories?.map ((categori,i) => {
          return <option key={i} value={categori.id}>{categori.name}</option>
        })}
      </Select>
    </>
  );
};

export default BotonCategoria;