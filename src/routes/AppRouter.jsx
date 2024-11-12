import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "../components/AdminPage";
import App from "../App.jsx";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<App/>} />
                <Route path="/admin" element={<AdminPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
