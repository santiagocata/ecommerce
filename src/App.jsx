// import { setUser } from "./state/user";
// import { useDispatch } from "react-redux";

import Navbar from "./component/Navbar";
import GridGeneral from "./component/Grid";
import Simple from "./component/Simple";
import Carousel from "./component/Carousel";

const App = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div>
        <content>
          <Carousel />

          <GridGeneral />
        </content>
      </div>
      <div>
        <footer></footer>
      </div>
    </div>
  );
};

export default App;
