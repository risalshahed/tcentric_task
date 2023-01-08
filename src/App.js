// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;