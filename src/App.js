import './App.css';
import Navbar from './components/Navbar';
import ItemList from './components/ItemList';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Checkout from './pages/Checkout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

const Home = () => {
  return (
    <div className="home-container">
      <ItemList />
      <Footer />
    </div>
  );
};

export default App;
