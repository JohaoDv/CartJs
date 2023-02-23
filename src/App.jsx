import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Purchases from "./Components/Purchases";
import { DataProvider } from "./Context/DataContext";
const App = () => {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="*" element={<h1>This page doesn't exist</h1>} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
};

export default App;
