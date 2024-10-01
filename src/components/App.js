import { ThemeProvider } from "@mui/material";
import { useState } from "react";

import theam from "./ui/Theam";
import Services from "../pages/Services";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Estimate from "../pages/Estimate";
import TheRevolution from "../pages/TheRevolution";
import AppLayout from "./ui/AppLayout";
import Footer from "./ui/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="App">
      <ThemeProvider theme={theam}>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <AppLayout
                  value={value}
                  setValue={setValue}
                  selectedIndex={selectedIndex}
                  setSelectedIndex={setSelectedIndex}
                />
              }
            >
              <Route
                index
                element={
                  <AppLayout
                    value={value}
                    setValue={setValue}
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                  />
                }
              />
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
          <Footer
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};
export default App;
