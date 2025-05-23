import React, { useState } from "react";
import HeroPage from "./components/HeroPage";
import CategoryPage from "./components/CategoryPage.jsx";
import { Route, Routes } from "react-router";
import QuizPage from "./components/QuizPage.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HeroPage />} />
      <Route path="/Category" element={<CategoryPage />} />
      <Route path="*" element={<p>Not Found</p>} />
    </Routes>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/quiz/:category" element={<QuizPage />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </>
  );
}

export default App;
