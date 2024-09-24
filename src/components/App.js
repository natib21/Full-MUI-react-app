import { ThemeProvider } from "@mui/material";
import Header from "./ui/Header";
import theam from "./ui/Theam";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theam}>
        <BrowserRouter>
          <Routes>
            <Route element={<Header />}>
              <Route index element={<Navigate replace to="Header" />} />
              <Route path="/services" element={<Services />} />
              <Route path="/customSoftware" element={<Services />} />
              <Route path="/mobileApp" element={<MobileApp />} />
              <Route path="/websites" element={<Websites />} />
              <Route path="/theRevolution" element={<TheRevolution />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/contactUs" element={<ContactUs />} />
              <Route path="/estimate" element={<Estimate />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};
export default App;
