import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// import Layout from "./components/Layout.jsx";
import LoginPage from "./pages/login/LoginPage.jsx";

import SinglPage from "./pages/singl-teachers/SinglPage.jsx";
import Student from "./pages/students/Students.jsx";
import Teachers from "./pages/teachers/Teachers.jsx";
import Layout from './pages/components/Layout.jsx';

export default function App() {
  const [ , setIsLogin] = React.useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage setIsLogin={setIsLogin} />} />
        <Route element={(localStorage.getItem("isLogin")) ? <Layout /> : <Navigate to="/" />}>
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/students" element={<Student/>} />
          <Route path="/singl-teachers/:id" element={<SinglPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
