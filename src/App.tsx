import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@/layout/Header.tsx";
import Main from "@/layout/Main.tsx";
import Footer from "@/layout/Footer";
import NotFound from "@/views/NotFound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
