import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contacting from "./pages/Personalize";
import Submit from "./pages/Submit";
import MainLayout from "./components/MainLayout";

const App = () => {
  return (
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route
            path="/product/:productId/Contacting"
            element={<Contacting />}
          />
          <Route
            path="/product/:productId/Contacting/submit"
            element={<Submit />}
          />
        </Route>
      </Routes>
  );
};

export default App;
