import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bloglist" element={<BlogPage />} />
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
