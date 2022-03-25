import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./views/components/Navbar";
import Leads from "./views/pages/Leads";
import Usuario from "./views/pages/Usuario";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/leads" element={<Leads />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
