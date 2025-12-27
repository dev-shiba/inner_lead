import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { portfolioItems } from '../data/portfolioData';
import PortfolioSwiper from '../components/PortfolioSwiper';
import './Portfolio.css';

export default function Portfolio() {
    const [ref, isVisible] = useScrollAnimation(0.1);
    const [viewMode, setViewMode] = useState('coverflow');
    const [activeIndex, setActiveIndex] = useState(2);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
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
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
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
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
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
                    <PortfolioSwiper
                        items={portfolioItems}
                        initialSlide={2}
                        onSlideChange={handleSlideChange}
                    />

                    {/* Detail Panel */}
                    <div className="coverflow-detail container">
                        <div className="detail-tags">
                            {portfolioItems[activeIndex]?.tags.map((tag) => (
                                <span key={tag} className="detail-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Grid View */}
            {viewMode === 'grid' && (
                <section className="portfolio-grid-section">
                    <div className="container">
                        <div className="portfolio-grid">
                            {portfolioItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="portfolio-card animate-in"
                                    style={{ '--delay': `${index * 100}ms` }}
                                >
                                    <span className="portfolio-category">{item.category}</span>
                                    <h3 className="portfolio-card-title">{item.title}</h3>
                                    <p className="portfolio-card-desc">{item.description}</p>
                                    <div className="portfolio-tags">
                                        {item.tags.map((tag) => (
                                            <span key={tag} className="portfolio-tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="portfolio-result">
                                        <span className="result-label">성과</span>
                                        <span className="result-value">{item.result}</span>
                                    </div>
                                    <Link
                                        to={`/portfolio/${item.id}`}
                                        className="portfolio-detail-link"
                                    >
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
                        <p className="reviews-subtitle">
                            실제 크몽 수강생분들의 생생한 후기를 확인하세요
                        </p>
                    </div>

                    <div className="reviews-grid">
                        <div className="review-card">
                            <div className="review-quote">"</div>
                            <div className="review-content">
                                <p>
                                    완전히 만족했습니다! 스크립트 퀄리티는 말할 것도 없고, 금쪽같은
                                    시간을 아껴주는 정교한 구성 덕분에 영상 제작 속도가 훨씬
                                    빨라졌습니다.
                                </p>
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
                                <p>
                                    진짜 막막했던 GPTs 속 시원하게 다 알려주셨어요! 제가 원하는
                                    GPTs 바로 만들 수 있게 도와주셨습니다. 설명도 쉽고 이해가 잘
                                    되어서 따라가기 수월했어요!!
                                </p>
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
                                <p>
                                    후기 잘 안쓰는데 설명도 편하게 잘해주시고 친절하십니다. 진심
                                    강추합니다!
                                </p>
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
                                <p>
                                    원고 만드는데 도움이 되었고, 정말 10분만에 원고 완성됩니다!
                                    초보자분들도 이해하기 쉽게 엄청 친절하게 설명해주십니다.
                                </p>
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
                                <p>
                                    자료의 퀄리티와 실무에 접목하는 사항 모두 만족합니다. 빠른
                                    수익화를 원하신다면 무조건 추천드립니다!
                                </p>
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
                                <p>
                                    급하게 스케줄 요청드렸는데 빠르게 약속 잡아주시고 컨설팅
                                    시간동안 최선을 다해서 알려주시려는 모습이 너무 좋았습니다.
                                </p>
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
