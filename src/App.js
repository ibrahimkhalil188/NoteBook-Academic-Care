import { Route, Routes } from "react-router-dom";
import Commerce from "./Components/Home/Book/Commerce";
import General from "./Components/Home/Book/General";
import Science from "./Components/Home/Book/Science";
import Home from "./Pages/Home";



function App() {
  return (

    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route index element={<Science></Science>}></Route>
          <Route path="science" element={<Science></Science>}></Route>
          <Route path="commerce" element={<Commerce></Commerce>}></Route>
          <Route path="general" element={<General></General>}></Route>
        </Route>

      </Routes>
    </div>


  );
}

export default App;
