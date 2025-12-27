import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCoverflowDrag } from '../hooks/useCoverflowDrag';
import { portfolioItems } from '../data/portfolioData';
import './PortfolioCoverflow.css';

export default function PortfolioCoverflow() {
    const [ref, isVisible] = useScrollAnimation(0.1);
    const containerRef = useRef(null);

    const {
        activeIndex,
        setActiveIndex,
        handlePrev,
        handleNext,
        getCardStyle,
        dragHandlers,
    } = useCoverflowDrag(portfolioItems.length);

    return (
        <div className="portfolio-coverflow-wrapper" ref={ref}>
            <div
                className={`portfolio-cf-container ${isVisible ? 'visible' : ''}`}
                ref={containerRef}
                {...dragHandlers}
            >
                <div className="portfolio-cf-track">
                    {portfolioItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={`portfolio-cf-card ${index === activeIndex ? 'active' : ''}`}
                            style={{
                                ...getCardStyle(index),
                                '--card-gradient': item.gradient,
                            }}
                            onClick={() => setActiveIndex(index)}
                        >
                            <div className="portfolio-cf-bg">
                                <img src={item.image} alt={item.title} className="portfolio-cf-image" loading="lazy" />
                                <div className="portfolio-cf-overlay" style={{ background: item.gradient }}></div>
                            </div>
                            <div className="portfolio-cf-content">
                                <span className="portfolio-cf-category">{item.category}</span>
                                <h3 className="portfolio-cf-title">{item.title}</h3>
                                <p className="portfolio-cf-desc">{item.description}</p>
                                <div className="portfolio-cf-result">
                                    <span className="portfolio-cf-result-label">성과</span>
                                    <span className="portfolio-cf-result-value">{item.result}</span>
                                </div>
                                <Link to={`/portfolio/${item.id}`} className="portfolio-cf-link">
                                    자세히 보기 →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button className="portfolio-cf-nav portfolio-cf-nav-prev" onClick={handlePrev} aria-label="이전 슬라이드">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <button className="portfolio-cf-nav portfolio-cf-nav-next" onClick={handleNext} aria-label="다음 슬라이드">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>

                {/* Dots */}
                <div className="portfolio-cf-dots">
                    {portfolioItems.map((item, index) => (
                        <button
                            key={item.id}
                            className={`portfolio-cf-dot ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`슬라이드 ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
