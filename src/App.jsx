
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Personajes from "./views/Personajes";
import Personaje from "./views/Personaje";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
return (
<div className="App">
<BrowserRouter>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/personajes" element={<Personajes />} />
<Route path="/personajes/:id" element={<Personaje />} />
</Routes>
</BrowserRouter>
</div>
);
}
