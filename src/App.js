import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ExamList from './components/ExamList';
import ExamMap from './components/ExamMap';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sessions" element={<ExamList />} />
          <Route path="/exam-map" element={<ExamMap />} />
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
