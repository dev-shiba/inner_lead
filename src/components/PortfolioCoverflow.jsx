import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './PortfolioCoverflow.css';

export default function PortfolioCoverflow() {
    const [ref, isVisible] = useScrollAnimation(0.1);
    const [activeIndex, setActiveIndex] = useState(2);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const containerRef = useRef(null);

    const portfolioItems = [
        {
            id: 'suncheon-jeil',
            category: '기관 교육',
            title: '순천제일대학교 AI역량 강화 특강',
            description: '교직원 대상 AI역량 강화 특강으로 실무가 달라진 순간',
            result: '실무 적용률 85%',
            image: '/src/assets/portfolio/suncheon.png',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        },
        {
            id: 'changwon-convention',
            category: '기업 교육',
            title: '창원컨벤션센터 AI 역량강화 교육',
            description: '임직원 대상 5시간 집중 AI 역량강화 교육',
            result: '업무 효율 40% 향상',
            image: '/src/assets/portfolio/changwon.png',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        },
        {
            id: 'hanyang-erica',
            category: '기관 교육',
            title: '한양대 ERICA 생성형AI 특강',
            description: '200명 규모 생성형AI 특강 - ChatGPT 활용부터 AI 리터러시까지',
            result: '참여자 만족도 98%',
            image: '/src/assets/portfolio/hanyang.png',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
        {
            id: 'savethechildren',
            category: 'NGO 교육',
            title: '세이브더칠드런 본부 업무활용 AI 강의',
            description: '국제 NGO 본부에서 진행한 AI 리터러시와 실무 활용 강의',
            result: '만족도 압도적',
            image: '/src/assets/portfolio/savethechildren.png',
            gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        },
        {
            id: 'cheongju',
            category: '지역 교육',
            title: '청주시 챗GPT 강의 – AI 300% 활용법',
            description: '청주 OSCO 대강당에서 300명 대상 생성형AI 활용 강의',
            result: 'AI 리터러시 실천 출발점',
            image: '/src/assets/portfolio/cheongju.png',
            gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
        },
    ];

    const handlePrev = () => {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : portfolioItems.length - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev < portfolioItems.length - 1 ? prev + 1 : 0));
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX || e.touches?.[0]?.clientX || 0);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const currentX = e.clientX || e.touches?.[0]?.clientX || 0;
        const diff = currentX - startX;
        setTranslateX(diff);
    };

    const handleMouseUp = () => {
        if (!isDragging) return;
        setIsDragging(false);

        if (translateX > 80) {
            handlePrev();
        } else if (translateX < -80) {
            handleNext();
        }
        setTranslateX(0);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'ArrowRight') handleNext();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const getCardStyle = (index) => {
        const diff = index - activeIndex;
        const absD = Math.abs(diff);

        if (absD > 3) {
            return {
                transform: `translateX(${diff * 100}px) scale(0.5) rotateY(${diff > 0 ? -60 : 60}deg)`,
                opacity: 0,
                zIndex: 0,
            };
        }

        const translateXVal = diff * 180 + (isDragging ? translateX * 0.3 : 0);
        const scale = 1 - absD * 0.15;
        const rotateY = diff * -35;
        const zIndex = 10 - absD;
        const opacity = 1 - absD * 0.25;

        return {
            transform: `translateX(${translateXVal}px) scale(${scale}) rotateY(${rotateY}deg)`,
            opacity,
            zIndex,
        };
    };

    return (
        <div className="portfolio-coverflow-wrapper" ref={ref}>
            <div
                className={`portfolio-cf-container ${isVisible ? 'visible' : ''}`}
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleMouseDown}
                onTouchMove={handleMouseMove}
                onTouchEnd={handleMouseUp}
            >
                <div className="portfolio-cf-track">
                    {portfolioItems.map((item, index) => (
                        <div
                            key={index}
                            className={`portfolio-cf-card ${index === activeIndex ? 'active' : ''}`}
                            style={{
                                ...getCardStyle(index),
                                '--card-gradient': item.gradient,
                            }}
                            onClick={() => setActiveIndex(index)}
                        >
                            <div className="portfolio-cf-bg">
                                <img src={item.image} alt={item.title} className="portfolio-cf-image" />
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
                <button className="portfolio-cf-nav portfolio-cf-nav-prev" onClick={handlePrev}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <button className="portfolio-cf-nav portfolio-cf-nav-next" onClick={handleNext}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>

                {/* Dots */}
                <div className="portfolio-cf-dots">
                    {portfolioItems.map((_, index) => (
                        <button
                            key={index}
                            className={`portfolio-cf-dot ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
