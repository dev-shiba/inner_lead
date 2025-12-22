import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollReset from './components/ScrollReset'
import FloatingCTA from './components/FloatingCTA'
import HomePage from './pages/HomePage'
import Portfolio from './pages/Portfolio'
import PortfolioDetail from './pages/PortfolioDetail'
import Services from './pages/Services'

function App() {
    return (
        <Router>
            <ScrollReset />
            <Navbar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/:id" element={<PortfolioDetail />} />
                <Route path="/services" element={<Services />} />
            </Routes>
            <ScrollToTop />
            <FloatingCTA />
            <Footer />
        </Router>
    )
}

export default App
