import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ItemList from "./components/ItemList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ItemList" element={<ItemList />} />
      </Routes>
    </div>
  );
}

export default App;
