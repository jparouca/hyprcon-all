import logo from "./assets/images/logo-universal.png";
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div id="App" className="bg-white">
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
