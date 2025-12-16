import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollReset from './components/ScrollReset'
import HomePage from './pages/HomePage'
import Portfolio from './pages/Portfolio'
import PortfolioDetail from './pages/PortfolioDetail'

function App() {
    return (
        <Router>
            <ScrollReset />
            <Navbar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/:id" element={<PortfolioDetail />} />
            </Routes>
            <ScrollToTop />
            <Footer />
        </Router>
    )
}

export default App

