import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { StateProvider } from "./context/StateContext";
import Home from "./pages/Home/Home";

function App() {
  return (
    <StateProvider>
      <Navbar />
      <Home />
      <Outlet />
    </StateProvider>
  );
}

export default App;
