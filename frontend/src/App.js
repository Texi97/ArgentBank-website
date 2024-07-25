import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./components/Base";
import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Base />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
