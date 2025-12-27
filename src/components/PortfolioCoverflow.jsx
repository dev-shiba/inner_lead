import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { portfolioItems } from '../data/portfolioData';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './PortfolioCoverflow.css';

export default function PortfolioCoverflow() {
    const [ref, isVisible] = useScrollAnimation(0.1);
    const swiperRef = useRef(null);

    return (
        <div className="portfolio-coverflow-wrapper" ref={ref}>
            <div className={`portfolio-cf-container ${isVisible ? 'visible' : ''}`}>
                <Swiper
                    ref={swiperRef}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    initialSlide={2}
                    loop={false}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 40,
                        depth: 150,
                        modifier: 0.5,
                        slideShadows: false,
                    }}
                    spaceBetween={-100}
                    pagination={{
                        clickable: true,
                        dynamicBullets: false,
                    }}
                    navigation={{
                        prevEl: '.portfolio-cf-nav-prev',
                        nextEl: '.portfolio-cf-nav-next',
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="portfolio-swiper"
                >
                    {portfolioItems.map((item) => (
                        <SwiperSlide key={item.id} className="portfolio-cf-slide">
                            <div
                                className="portfolio-cf-card"
                                style={{ '--card-gradient': item.gradient }}
                            >
                                <div className="portfolio-cf-bg">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="portfolio-cf-image"
                                        loading="lazy"
                                    />
                                    <div
                                        className="portfolio-cf-overlay"
                                        style={{ background: item.gradient }}
                                    ></div>
                                </div>
                                <div className="portfolio-cf-content">
                                    <span className="portfolio-cf-category">{item.category}</span>
                                    <h3 className="portfolio-cf-title">{item.title}</h3>
                                    <p className="portfolio-cf-desc">{item.description}</p>
                                    <div className="portfolio-cf-result">
                                        <span className="portfolio-cf-result-label">성과</span>
                                        <span className="portfolio-cf-result-value">
                                            {item.result}
                                        </span>
                                    </div>
                                    <Link
                                        to={`/portfolio/${item.id}`}
                                        className="portfolio-cf-link"
                                    >
                                        자세히 보기 →
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Arrows */}
                <button
                    className="portfolio-cf-nav portfolio-cf-nav-prev"
                    aria-label="이전 슬라이드"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <button
                    className="portfolio-cf-nav portfolio-cf-nav-next"
                    aria-label="다음 슬라이드"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
