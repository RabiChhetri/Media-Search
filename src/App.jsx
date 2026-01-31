import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionPages from "./pages/CollectionPages";
import Navbar from "./components/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="min-h-screen text-white w-full bg-gray-950">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPages />} />
      </Routes>
      <ToastContainer/>
    </div>
  );
};

export default App;
