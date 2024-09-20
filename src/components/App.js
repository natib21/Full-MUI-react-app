import { ThemeProvider } from "@mui/material";
import Header from "./ui/Header";
import theam from "./ui/Theam";
const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theam}>
        <Header />
        Hello
      </ThemeProvider>
    </div>
  );
};
export default App;
