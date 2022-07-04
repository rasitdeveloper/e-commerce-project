import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavigationBar />
        <div id="content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Home</h2>
}

export default App;
