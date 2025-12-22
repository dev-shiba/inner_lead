import { Helmet } from 'react-helmet-async';
import './Services.css';

export default function Services() {
    const services = [
        {
            id: 'consulting',
            icon: '💼',
            title: '컨설팅',
            subtitle: 'AI 전략 & 역량 강화',
            description: 'AI를 활용한 업무 효율화와 비즈니스 성장 전략',
            image: '/assets/images/service_consulting.png',
            features: [
                '1:1 맞춤형 AI 활용 컨설팅',
                '기업/개인 맞춤 역량 진단',
                '업무 프로세스 개선 설계',
                '수익화 전략 수립'
            ],
            cta: '문의하기',
            link: 'https://open.kakao.com/o/simoMRPf'
        },
        {
            id: 'ebook',
            icon: '📚',
            title: '전자책',
            subtitle: '하루 10분 챗GPT 블로그 수익화',
            description: '블로그 초보자도 AI로 하루 10분 수익화',
            image: '/assets/images/service_ebook.png',
            features: [
                '총 125페이지 실전 가이드',
                'ChatGPT 활용 꿀팁 자료',
                '블로그 노출 & 효율화 비법',
                '누적 60건 리뷰, 평점 5.0'
            ],
            cta: '구매하기',
            link: 'https://kmong.com/gig/628331',
            // Highlight effect removed per user request
        },
        {
            id: 'content',
            icon: '🎨',
            title: '콘텐츠 제작',
            subtitle: 'AI 기반 이미지 & 영상 제작',
            description: 'AI를 활용한 고품질 콘텐츠 제작 대행',
            image: '/assets/images/service_content.png',
            features: [
                'AI 이미지 생성 (미드저니)',
                '영상 콘텐츠 제작 (숏폼)',
                '블로그/SNS 썸네일 디자인',
                '합리적인 가격, 고퀄리티'
            ],
            cta: '문의하기',
            link: 'https://open.kakao.com/o/simoMRPf'
        }
    ];

    return (
        <main className="services-page">
            <Helmet>
                <title>서비스 소개 | 이너리드 - AI 교육 전문가</title>
                <meta name="description" content="이너리드의 AI 컨설팅, 전자책, 콘텐츠 제작 대행 서비스를 소개합니다." />
            </Helmet>

            {/* Hero Section */}
            <section className="services-hero">
                <div className="services-hero-bg">
                    <div className="services-grid-bg"></div>
                    <div className="services-glow services-glow-1"></div>
                    <div className="services-glow services-glow-2"></div>
                </div>
                <div className="container">
                    <span className="services-badge">🚀 AI 시대, 새로운 가능성</span>
                    <h1 className="services-title">
                        서비스 소개
                    </h1>
                    <p className="services-subtitle">
                        당신의 성장을 위한 맞춤형 AI 솔루션
                    </p>
                </div>
            </section>

            {/* Services Card Grid */}
            <section className="services-grid-section">
                <div className="container">
                    <div className="services-card-wrapper">
                        {services.map((service, index) => (
                            <div key={service.id} className="service-saas-card">
                                <div className="card-image-wrapper">
                                    <img src={service.image} alt={service.title} className="card-image" />
                                    <div className="card-image-overlay"></div>
                                </div>

                                <div className="card-content">
                                    <div className="card-header">
                                        <h2 className="card-title">{service.title}</h2>
                                        <p className="card-subtitle">{service.subtitle}</p>
                                    </div>

                                    <p className="card-description">{service.description}</p>

                                    <div className="card-divider"></div>

                                    <ul className="card-features">
                                        {service.features.map((feature, i) => (
                                            <li key={i}>
                                                <span className="check-icon">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <a href={service.link} target="_blank" rel="noopener noreferrer" className="card-cta primary">
                                        {service.cta}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>




            {/* CTA Section */}
            <section className="services-cta-section">
                <div className="container">
                    <h2>지금 바로 시작하세요</h2>
                    <p>단 5분이면 됩니다. 여러분만의 '진짜' 강점을 발견하세요!</p>
                    <div className="cta-buttons">
                        <a href="https://kmong.com/gig/628331" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            크몽에서 만나기
                        </a>
                        <a href="https://open.kakao.com/o/simoMRPf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            문의하기
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
