import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Portfolio.css';

export default function Portfolio() {
    const [ref, isVisible] = useScrollAnimation(0.1);
    const [viewMode, setViewMode] = useState('coverflow'); // 'coverflow' or 'grid'
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
            tags: ['교직원 교육', 'AI 역량 강화', '디지털 전환'],
            result: '실무 적용률 85%',
            image: '/assets/portfolio/suncheon.png',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        },
        {
            id: 'changwon-convention',
            category: '기업 교육',
            title: '창원컨벤션센터 AI 역량강화 교육',
            description: '임직원 대상 5시간 집중 AI 역량강화 교육',
            tags: ['AI 역량강화', '업무 자동화', 'PPT 자동화'],
            result: '업무 효율 40% 향상',
            image: '/assets/portfolio/changwon.png',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        },
        {
            id: 'hanyang-erica',
            category: '기관 교육',
            title: '한양대 ERICA 생성형AI 특강',
            description: '200명 규모 생성형AI 특강 - ChatGPT 활용부터 AI 리터러시까지',
            tags: ['ChatGPT', 'AI 리터러시', '대규모 강연'],
            result: '참여자 만족도 98%',
            image: '/assets/portfolio/hanyang.png',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
        {
            id: 'savethechildren',
            category: 'NGO 교육',
            title: '세이브더칠드런 본부 업무활용 AI 강의',
            description: '국제 NGO 본부에서 진행한 AI 리터러시와 실무 활용 강의',
            tags: ['NGO 특화', 'AI 리터러시', '사업계획서'],
            result: '만족도 압도적',
            image: '/assets/portfolio/savethechildren.png',
            gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        },
        {
            id: 'cheongju',
            category: '지역 교육',
            title: '청주시 챗GPT 강의 – AI 300% 활용법',
            description: '청주 OSCO 대강당에서 300명 대상 생성형AI 활용 강의',
            tags: ['대규모 강연', 'AI 리터러시', '세대 통합'],
            result: 'AI 리터러시 실천 출발점',
            image: '/assets/portfolio/cheongju.png',
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
        if (viewMode !== 'coverflow') return;
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
            if (viewMode === 'coverflow') {
                if (e.key === 'ArrowLeft') handlePrev();
                if (e.key === 'ArrowRight') handleNext();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [viewMode]);

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
        <main className="portfolio-page">
            <section className="portfolio-hero">
                <div className="container">
                    <span className="portfolio-badge">📂 포트폴리오</span>
                    <h1 className="portfolio-title">
                        실제 <span className="gradient-text">성과</span>로 증명합니다
                    </h1>
                    <p className="portfolio-subtitle">
                        다양한 기업과 개인에게 실질적인 변화를 만들어왔습니다
                    </p>

                    {/* View Toggle */}
                    <div className="view-toggle">
                        <button
                            className={`toggle-btn ${viewMode === 'coverflow' ? 'active' : ''}`}
                            onClick={() => setViewMode('coverflow')}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="6" width="6" height="12" rx="1" />
                                <rect x="9" y="4" width="6" height="16" rx="1" />
                                <rect x="16" y="6" width="6" height="12" rx="1" />
                            </svg>
                            Cover Flow
                        </button>
                        <button
                            className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                            onClick={() => setViewMode('grid')}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="7" height="7" />
                                <rect x="14" y="3" width="7" height="7" />
                                <rect x="3" y="14" width="7" height="7" />
                                <rect x="14" y="14" width="7" height="7" />
                            </svg>
                            Grid
                        </button>
                    </div>
                </div>
            </section>

            {/* Cover Flow View */}
            {viewMode === 'coverflow' && (
                <section className="coverflow-section">
                    <div
                        className="coverflow-container"
                        ref={containerRef}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        onTouchStart={handleMouseDown}
                        onTouchMove={handleMouseMove}
                        onTouchEnd={handleMouseUp}
                    >
                        <div className="coverflow-track">
                            {portfolioItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={`coverflow-card ${index === activeIndex ? 'active' : ''}`}
                                    style={{
                                        ...getCardStyle(index),
                                        '--card-gradient': item.gradient,
                                    }}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <div className="cf-card-bg">
                                        <img src={item.image} alt={item.title} className="cf-card-image" />
                                        <div className="cf-card-overlay" style={{ background: item.gradient }}></div>
                                    </div>
                                    <div className="cf-card-content">
                                        <span className="cf-category">{item.category}</span>
                                        <h3 className="cf-title">{item.title}</h3>
                                        <p className="cf-desc">{item.description}</p>
                                        <div className="cf-result">
                                            <span className="cf-result-label">성과</span>
                                            <span className="cf-result-value">{item.result}</span>
                                        </div>
                                        <Link to={`/portfolio/${item.id}`} className="cf-detail-link">
                                            자세히 보기 →
                                        </Link>
                                    </div>
                                    <div className="cf-reflection"></div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        <button className="cf-nav cf-nav-prev" onClick={handlePrev}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>
                        <button className="cf-nav cf-nav-next" onClick={handleNext}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>

                        {/* Dots */}
                        <div className="cf-dots">
                            {portfolioItems.map((_, index) => (
                                <button
                                    key={index}
                                    className={`cf-dot ${index === activeIndex ? 'active' : ''}`}
                                    onClick={() => setActiveIndex(index)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Detail Panel */}
                    <div className="coverflow-detail container">
                        <div className="detail-tags">
                            {portfolioItems[activeIndex].tags.map((tag, i) => (
                                <span key={i} className="detail-tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Grid View */}
            {viewMode === 'grid' && (
                <section className="portfolio-grid-section" ref={ref}>
                    <div className="container">
                        <div className="portfolio-grid">
                            {portfolioItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={`portfolio-card ${isVisible ? 'visible' : ''}`}
                                    style={{ '--delay': `${index * 100}ms` }}
                                >
                                    <span className="portfolio-category">{item.category}</span>
                                    <h3 className="portfolio-card-title">{item.title}</h3>
                                    <p className="portfolio-card-desc">{item.description}</p>
                                    <div className="portfolio-tags">
                                        {item.tags.map((tag, i) => (
                                            <span key={i} className="portfolio-tag">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="portfolio-result">
                                        <span className="result-label">성과</span>
                                        <span className="result-value">{item.result}</span>
                                    </div>
                                    <Link to={`/portfolio/${item.id}`} className="portfolio-detail-link">
                                        자세히 보기 →
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Reviews Section */}
            <section className={`reviews-section ${isVisible ? 'visible' : ''}`} ref={ref}>
                <div className="container">
                    <div className="reviews-header">
                        <span className="reviews-badge">⭐ 고객 후기</span>
                        <h2 className="reviews-title">
                            수강생들의 <span className="gradient-text">진짜 이야기</span>
                        </h2>
                        <p className="reviews-subtitle">실제 크몽 수강생분들의 생생한 후기를 확인하세요</p>
                    </div>

                    <div className="reviews-grid">
                        <div className="review-card">
                            <div className="review-quote">"</div>
                            <div className="review-content">
                                <p>완전히 만족했습니다! 스크립트 퀄리티는 말할 것도 없고, 금쪽같은 시간을 아껴주는 정교한 구성 덕분에 영상 제작 속도가 훨씬 빨라졌습니다.</p>
                            </div>
                            <div className="review-footer">
                                <div className="review-rating">⭐⭐⭐⭐⭐</div>
                                <span className="review-author">그냥공부 님</span>
                                <span className="review-service">ChatGPT 활용 · 컨설팅</span>
                            </div>
                        </div>

                        <div className="review-card featured">
                            <div className="review-quote">"</div>
                            <div className="review-content">
                                <p>진짜 막막했던 GPTs 속 시원하게 다 알려주셨어요! 제가 원하는 GPTs 바로 만들 수 있게 도와주셨습니다. 설명도 쉽고 이해가 잘 되어서 따라가기 수월했어요!!</p>
                            </div>
                            <div className="review-footer">
                                <div className="review-rating">⭐⭐⭐⭐⭐</div>
                                <span className="review-author">녹색희망 님</span>
                                <span className="review-service">GPTs 제작 · 컨설팅</span>
                            </div>
                        </div>

                        <div className="review-card">
                            <div className="review-quote">"</div>
                            <div className="review-content">
                                <p>후기 잘 안쓰는데 설명도 편하게 잘해주시고 친절하십니다. 진심 강추합니다!</p>
                            </div>
                            <div className="review-footer">
                                <div className="review-rating">⭐⭐⭐⭐⭐</div>
                                <span className="review-author">멋진하루 님</span>
                                <span className="review-service">ChatGPT 활용</span>
                            </div>
                        </div>

                        <div className="review-card">
                            <div className="review-quote">"</div>
                            <div className="review-content">
                                <p>원고 만드는데 도움이 되었고, 정말 10분만에 원고 완성됩니다! 초보자분들도 이해하기 쉽게 엄청 친절하게 설명해주십니다.</p>
                            </div>
                            <div className="review-footer">
                                <div className="review-rating">⭐⭐⭐⭐⭐</div>
                                <span className="review-author">내일을향해 님</span>
                                <span className="review-service">블로그 포스팅</span>
                            </div>
                        </div>

                        <div className="review-card">
                            <div className="review-quote">"</div>
                            <div className="review-content">
                                <p>자료의 퀄리티와 실무에 접목하는 사항 모두 만족합니다. 빠른 수익화를 원하신다면 무조건 추천드립니다!</p>
                            </div>
                            <div className="review-footer">
                                <div className="review-rating">⭐⭐⭐⭐⭐</div>
                                <span className="review-author">마케터현 님</span>
                                <span className="review-service">블로그 수익화</span>
                            </div>
                        </div>

                        <div className="review-card">
                            <div className="review-quote">"</div>
                            <div className="review-content">
                                <p>급하게 스케줄 요청드렸는데 빠르게 약속 잡아주시고 컨설팅 시간동안 최선을 다해서 알려주시려는 모습이 너무 좋았습니다.</p>
                            </div>
                            <div className="review-footer">
                                <div className="review-rating">⭐⭐⭐⭐⭐</div>
                                <span className="review-author">단비솔솔 님</span>
                                <span className="review-service">1:1 컨설팅</span>
                            </div>
                        </div>
                    </div>

                    <div className="reviews-stats">
                        <div className="stat-box">
                            <span className="stat-number gradient-text">4.9</span>
                            <span className="stat-label">평균 평점</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-box">
                            <span className="stat-number gradient-text">81+</span>
                            <span className="stat-label">리뷰 수</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-box">
                            <span className="stat-number gradient-text">99%</span>
                            <span className="stat-label">만족도</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
