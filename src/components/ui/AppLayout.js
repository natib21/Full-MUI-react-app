import { Outlet } from "react-router-dom";
import Header from "./Header";
const AppLayout = ({ value, setValue, selectedIndex, setSelectedIndex }) => {
  return (
    <div>
      <Header
        value={value}
        setValue={setValue}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <Outlet />
    </div>
  );
};
export default AppLayout;
