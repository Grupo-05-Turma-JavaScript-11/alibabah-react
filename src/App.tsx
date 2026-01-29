import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Home from "./pages/home/Home";
import Navbar from "./components/layout/navbar/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>

                <Route path="/" element={<Home />} />

            </Routes>

            <Footer />

        </BrowserRouter>
    );
}

export default App;
