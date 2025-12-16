import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation';
import PortfolioCoverflow from './PortfolioCoverflow';
import './AnimatedSection.css';

export default function AnimatedSection() {
    const [ref, isVisible] = useScrollAnimation(0.3);

    const yearsExp = useCountUp(17, 2000, isVisible);
    const students = useCountUp(500, 2500, isVisible);
    const satisfaction = useCountUp(98, 2000, isVisible);
    const companies = useCountUp(50, 2000, isVisible);

    const stats = [
        { value: yearsExp, suffix: '+', label: '년', subLabel: '실무 경력', icon: '⚡' },
        { value: students, suffix: '+', label: '명', subLabel: '수강생', icon: '👥' },
        { value: satisfaction, suffix: '%', label: '', subLabel: '만족도', icon: '⭐' },
        { value: companies, suffix: '+', label: '개', subLabel: '기업 교육', icon: '🏢' },
    ];

    return (
        <section className="animated-section" ref={ref}>
            <div className="animated-bg">
                <div className="animated-grid-3d"></div>
                <div className="animated-orb animated-orb-1"></div>
                <div className="animated-orb animated-orb-2"></div>
            </div>

            <div className="container">
                <div className={`animated-content ${isVisible ? 'visible' : ''}`}>
                    <span className="portfolio-cf-badge">📂 실제 성과 증명</span>
                    <h2 className="animated-title">
                        <span className="glitch-wrapper" style={{ whiteSpace: 'nowrap' }}>
                            <span className="glitch-text">실제 성과</span><span>로</span>
                        </span>
                        <span className="neon-text">증명합니다</span>
                    </h2>
                    <p className="animated-subtitle">
                        다양한 기업과 기관에 실질적인 변화를 만들어왔습니다
                    </p>
                </div>
            </div>

            {/* Portfolio Coverflow */}
            <PortfolioCoverflow />

            {/* Stats Grid - Below Portfolio */}
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`stat-card ${isVisible ? 'visible' : ''}`}
                            style={{ '--delay': `${index * 150}ms` }}
                        >
                            <div className="stat-card-bg"></div>
                            <span className="stat-icon">{stat.icon}</span>
                            <div className="stat-value">
                                <span className="stat-number">{stat.value}</span>
                                <span className="stat-suffix">{stat.suffix}</span>
                                <span className="stat-unit">{stat.label}</span>
                            </div>
                            <span className="stat-sub-label">{stat.subLabel}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
