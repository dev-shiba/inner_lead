import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './PortfolioSwiper.css';

export default function PortfolioSwiper({
    items,
    initialSlide = 2,
    showNavigation = true,
    showPagination = true,
    onSlideChange,
    className = '',
}) {
    return (
        <div className={`portfolio-swiper-wrapper ${className}`}>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                initialSlide={initialSlide}
                loop={false}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 40,
                    depth: 150,
                    modifier: 0.5,
                    slideShadows: false,
                }}
                spaceBetween={-100}
                pagination={
                    showPagination
                        ? {
                              clickable: true,
                              dynamicBullets: false,
                          }
                        : false
                }
                navigation={
                    showNavigation
                        ? {
                              prevEl: '.portfolio-swiper-nav-prev',
                              nextEl: '.portfolio-swiper-nav-next',
                          }
                        : false
                }
                onSlideChange={onSlideChange}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="portfolio-swiper-container"
            >
                {items.map((item) => (
                    <SwiperSlide key={item.id} className="portfolio-swiper-slide">
                        <div
                            className="portfolio-swiper-card"
                            style={{ '--card-gradient': item.gradient }}
                        >
                            <div className="portfolio-swiper-bg">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="portfolio-swiper-image"
                                    loading="lazy"
                                />
                                <div
                                    className="portfolio-swiper-overlay"
                                    style={{ background: item.gradient }}
                                ></div>
                            </div>
                            <div className="portfolio-swiper-content">
                                <span className="portfolio-swiper-category">
                                    {item.category}
                                </span>
                                <h3 className="portfolio-swiper-title">{item.title}</h3>
                                <p className="portfolio-swiper-desc">{item.description}</p>
                                <div className="portfolio-swiper-result">
                                    <span className="portfolio-swiper-result-label">성과</span>
                                    <span className="portfolio-swiper-result-value">
                                        {item.result}
                                    </span>
                                </div>
                                <Link
                                    to={`/portfolio/${item.id}`}
                                    className="portfolio-swiper-link"
                                >
                                    자세히 보기 →
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Arrows */}
            {showNavigation && (
                <>
                    <button
                        className="portfolio-swiper-nav portfolio-swiper-nav-prev"
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
                        className="portfolio-swiper-nav portfolio-swiper-nav-next"
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
                </>
            )}
        </div>
    );
}
