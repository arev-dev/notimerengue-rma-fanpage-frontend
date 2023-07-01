import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NoticiasPage from "./pages/NoticiasPage";
import NotiViewPage from "./pages/NotiViewPage";
import Navigation from "./components/Navigation";
import NotiCreatePage from "./pages/NotiCreatePage"
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container mx-auto min-w-300">
        <Routes>
          <Route path="/" element={<Navigate to="/Noticias" />} />
          <Route path="/noticias" element={<NoticiasPage />} />
          <Route path="/noticias/:id" element={<NotiViewPage />} />
          <Route path="/noticias/create" element={<NotiCreatePage />} />
        </Routes>
        <Toaster/>
      </div>
    </BrowserRouter>
  );
}

export default App;
