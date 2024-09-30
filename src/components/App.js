import { ThemeProvider } from "@mui/material";
import theam from "./ui/Theam";
import Services from "../pages/Services";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Estimate from "../pages/Estimate";
import TheRevolution from "../pages/TheRevolution";
import AppLayout from "./ui/AppLayout";
import Footer from "./ui/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theam}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<AppLayout />} />
              <Route path="services" element={<Services />} />
              <Route
                path="/customSoftware"
                element={<div>Custome Software</div>}
              />
              <Route path="/mobileApp" element={<div>Mobile App</div>} />
              <Route path="/websites" element={<div>Websites</div>} />
              <Route path="theRevolution" element={<TheRevolution />} />
              <Route path="aboutUs" element={<AboutUs />} />
              <Route path="contactUs" element={<ContactUs />} />
              <Route path="estimate" element={<Estimate />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};
export default App;
