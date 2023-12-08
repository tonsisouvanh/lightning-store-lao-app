import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        {/* 
        {!loading && (!isAuthenticated || user.role !== 'admin') && (
          <Footer />
        )} */}
        <Footer />
      </div>
    </>
  );
}

export default App;
