import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories";
import AppLayout from "./components/AppLayout";
import Countries from "./pages/Countries";
import CountryCategories from "./pages/CountryCategories";
import Food from "./pages/Food";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Categories />} />
          <Route path="/countries" element={<Countries />} />
          <Route
            path="/countriesFood/:countrName/foods"
            element={<CountryCategories />}
          />
          <Route path="/recipe/:foodName" element={<Food />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
