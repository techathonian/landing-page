import styled from 'styled-components';
import { Footer } from './components/footer/Footer';
import { AboutPage } from './pages/aboutpage/AboutPage';
import {ErrorPage} from './pages/errorpage/ErrorPage';
import { NavBar } from './components/navbar/NavBar';
import { Home } from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { About } from './pages/aboutpage/About';
const Container = styled.div``;
function App() {
  return (
    <Container>
      <Router>
      <NavBar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="*" element={<ErrorPage />}/>
        </Routes>
        <Footer />
      </Router>
    </Container>
  )
}
export default App
