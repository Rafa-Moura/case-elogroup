import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./views/components/Navbar";
import Usuario from "./views/pages/Usuario";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/usuario" element={<Usuario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
