import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import Compare from "./pages/Compare/Compare";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import { StateProvider } from "./context/StateContext";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <StateProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="compare" element={<Compare />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </StateProvider>
  );
}

export default App;
