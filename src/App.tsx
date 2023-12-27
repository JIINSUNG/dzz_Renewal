import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@/layout/Header.tsx";
import Main from "@/layout/Main.tsx";
import Footer from "@/layout/Footer";
import NotFound from "@/views/NotFound";
import "@/App.css";
import Guide from "@/views/Guide";
import GuideList from "@/views/Guide/GuideList";
import Notice from "@/views/Notice";
import Advertise from "./views/Advertise";
import Terms from "./views/Terms";

function App() {
  return (
    <div className="App flex flex-1 flex-col w-full h-screen">
      <div className="flex flex-col flex-1">
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/guide" element={<Guide />}></Route>
            <Route path="/guidelist" element={<GuideList />}></Route>
            {/* <Rote path="/guidelist/:id" element={<GuideList />}></Rote> */}
            <Route path="/notice" element={<Notice />}></Route>
            {/* <Route path="/noticelist" element={<NoticeList />}></Route>
            <Route path="/noticedetail" element={<NoticeDetail />}></Route> */}
            <Route path="/advertise" element={<Advertise />}></Route>
            <Route path="/terms" element={<Terms />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
