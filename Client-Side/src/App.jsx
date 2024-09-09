import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/LoginSignup/Login";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Signup from "./Components/LoginSignup/Signup";
import CustomerMainPage from "./Components/Customer/CustomerPages/CustomerMainPage";
import AddComplaint from "./Components/Customer/CustomerPages/AddComplaint";
import ViewComplaint from "./Components/Customer/CustomerPages/ViewComplaint";
import ViewSingleDetail from "./Components/Customer/CustomerPages/ViewSingleDetail";
import ElectricianDashboard from "./Components/Electrician/ElectricianDashboard";
import ElectricianSidebar from "./Components/ElectricianManagement/Sidebar/ElectricianSidebar";
import ComplaintPage from "./Components/ElectricianManagement/ElectricianPage/Complaint/ComplaintPage";
import ElectricianPage from "./Components/ElectricianManagement/ElectricianPage/Electrician/ElectricianPage";
import AddElectrician from "./Components/ElectricianManagement/ElectricianPage/Electrician/AddElectrician";
import ViewElectrician from "./Components/ElectricianManagement/ElectricianPage/Electrician/ViewElectrician";
import RegisteredElectrician from "./Components/ElectricianManagement/ElectricianPage/Electrician/RegisteredElectrician";
import ViewRegisterUser from "./Components/ElectricianManagement/ElectricianPage/Electrician/ViewRegisterUser";
import LoginAuth from "./ProtectedRoutes/LoginAuth";
import CustomerServices from "./Components/Customer/CustomerServices";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<LoginAuth />}>
          <Route path="/customer/complaint/page" element={<CustomerServices />}>
            {/* <Route
              path="page"
              element={<CustomerMainPage />}
            /> */}
            <Route path="addComplaint" element={<AddComplaint />} />
            <Route path="viewComplaints" element={<ViewComplaint />} />
            {/* <Route
              path="viewSingle/complaint/:id"
              element={<ViewSingleDetail />}
            /> */}
          </Route>

          <Route
            path="/Electrician/dashboard"
            element={<ElectricianDashboard />}
          />
          <Route
            path="viewSingle/complaint/:id"
            element={<ViewSingleDetail />}
          />

          <Route path="/Admin/Dashboard" element={<ElectricianSidebar />}>
            <Route path="adminCustomers" element={<ComplaintPage />} />
            <Route path="AdminElectricians" element={<ElectricianPage />} />
            <Route
              path="adminAddElectrician/:id"
              element={<AddElectrician />}
            />
            <Route
              path="adminRegisteruser"
              element={<RegisteredElectrician />}
            />
            <Route
              path="viewElectricianDetail/:id"
              element={<ViewElectrician />}
            />
            <Route
              path="viewRegisterSingleUser/:id"
              element={<ViewRegisterUser />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
