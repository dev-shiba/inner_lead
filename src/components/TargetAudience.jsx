import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './TargetAudience.css';

export default function TargetAudience() {
    const [ref, isVisible] = useScrollAnimation(0.2);

    const targets = [
        {
            icon: '💼',
            title: '직장인',
            subtitle: '퇴사 & 커리어 전환 준비자',
            features: [
                '퇴사 후 안정적인 수익 구조 만들기',
                '직무 효율화로 야근 줄이기',
                'AI로 실무 즉시 적용하기',
            ],
            gradient: 'var(--gradient-primary)',
            color: 'var(--accent-purple)',
        },
        {
            icon: '🎬',
            title: '콘텐츠 크리에이터',
            subtitle: '블로거 & 유튜버',
            features: [
                '블로그/유튜브 수익화 전략',
                'AI 콘텐츠 자동화 시스템',
                '작업 시간 1/5로 단축',
            ],
            gradient: 'var(--gradient-secondary)',
            color: 'var(--accent-cyan)',
        },
        {
            icon: '🏢',
            title: '기업/기관',
            subtitle: '교육 담당자 & 경영진',
            features: [
                '임직원 AI 교육 프로그램',
                '부서별 맞춤 생산성 향상',
                '디지털 전환 컨설팅',
            ],
            gradient: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
            color: 'var(--accent-green)',
        },
    ];

    return (
        <section className="target-section" ref={ref}>
            <div className="container">
                <div className={`target-header ${isVisible ? 'visible' : ''}`}>
                    <span className="target-badge">🎯 맞춤 교육</span>
                    <h2 className="section-title">
                        <span className="gradient-text">이런 분</span>들을 위한 강의
                    </h2>
                    <p className="section-subtitle">
                        각자의 목표에 맞는 맞춤형 커리큘럼을 제공합니다
                    </p>
                </div>

                <div className="target-grid">
                    {targets.map((target, index) => (
                        <div
                            key={index}
                            className={`target-card ${isVisible ? 'visible' : ''}`}
                            style={{ '--delay': `${index * 150}ms`, '--card-gradient': target.gradient, '--card-color': target.color }}
                        >
                            <div className="target-card-glow"></div>
                            <div className="target-icon">{target.icon}</div>
                            <h3 className="target-title">{target.title}</h3>
                            <p className="target-subtitle">{target.subtitle}</p>
                            <ul className="target-features">
                                {target.features.map((feature, i) => (
                                    <li key={i}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
