import { Select } from "@chakra-ui/react";
import  Grid  from "../component/Grid";

const Boton = () => {
  return (
    <>
      <Select placeholder="Seleccionar el Producto">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </>
  );
};

export default Boton;