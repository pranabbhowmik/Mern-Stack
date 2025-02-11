import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import { Contact } from "./pages/Contact";
import { Register } from "./pages/Register";
import { Service } from "./pages/Service";
import { Error } from "./pages/Error";
import "./App.css";
import { Navbar } from "./components/Navber";
import { Footer } from "./components/Footer/Footer";
import { Adminlayout } from "./components/layout/Admin-layout";
import { AdminUser } from "./pages/AdminUser";
import { AdminContact } from "./pages/AdminContact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/*" element={<Error />} />
          <Route path="/admin" element={<Adminlayout />}>
            <Route path="users" element={<AdminUser />} />
            <Route path="contacts" element={<AdminContact />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
