import { Layout } from "./components/Layout";
import "./reset.css";
import { Login } from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Card } from "./components/Card";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} /> <Route path="/conta" element={<Card/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
