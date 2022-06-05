import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar";
import Home from "./Pages/Home";



function App() {
  return (

    <div className="container mx-auto">
      <Navbar >
        <Routes>
          <Route path="/" element={<Home></Home>} />
        </Routes>
      </Navbar>
    </div>


  );
}

export default App;
