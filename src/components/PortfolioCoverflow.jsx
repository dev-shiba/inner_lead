import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { portfolioItems } from '../data/portfolioData';
import PortfolioSwiper from './PortfolioSwiper';
import './PortfolioCoverflow.css';

export default function PortfolioCoverflow() {
    const [ref, isVisible] = useScrollAnimation(0.1);

    return (
        <div className="portfolio-coverflow-wrapper" ref={ref}>
            <div className={`portfolio-cf-container ${isVisible ? 'visible' : ''}`}>
                <PortfolioSwiper items={portfolioItems} initialSlide={2} />
            </div>
        </div>
    );
}
