import { Route, Routes } from "react-router-dom";
import AdmissionForm from "./Components/Home/AdmissionForm";
import AllBooks from "./Components/Book/AllBooks";
import Commerce from "./Components/Book/Commerce";
import General from "./Components/Book/General";
import Science from "./Components/Book/Science";
import CoursePreview from "./Assets/Preview";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import About from "./Pages/About";
import Community from "./Pages/Community/Community";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home";



function App() {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route index element={<Science></Science>}></Route>
          <Route path="science" element={<Science></Science>}></Route>
          <Route path="commerce" element={<Commerce></Commerce>}></Route>
          <Route path="general" element={<General></General>}></Route>
        </Route>
        <Route path="preview/:id" element={<CoursePreview></CoursePreview>}></Route>
        <Route path="admissionForm" element={<AdmissionForm></AdmissionForm>}></Route>
        <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="allBooks" element={<AllBooks></AllBooks>}>
          <Route index element={<Science></Science>}></Route>
          <Route path="science" element={<Science></Science>}></Route>
          <Route path="commerce" element={<Commerce></Commerce>}></Route>
          <Route path="general" element={<General></General>}></Route>
        </Route>
        <Route path="community" element={<Community></Community>}></Route>
        <Route path="community" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>


  );
}

export default App;
