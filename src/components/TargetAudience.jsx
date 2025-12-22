import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './TargetAudience.css';

export default function TargetAudience() {
    const [ref, isVisible] = useScrollAnimation(0.2);

    const targets = [
        {
            id: 'employee',
            title: '직장인',
            subtitle: '퇴사 & 커리어 전환 준비자',
            features: [
                '퇴사 후 안정적인 수익 구조 만들기',
                '직무 효율화로 야근 줄이기',
                'AI로 실무 즉시 적용하기',
            ],
            image: '/assets/images/target_office.png',
        },
        {
            id: 'creator',
            title: '콘텐츠 크리에이터',
            subtitle: '블로거 & 유튜버',
            features: [
                '블로그/유튜브 수익화 전략',
                'AI 콘텐츠 자동화 시스템',
                '작업 시간 1/5로 단축',
            ],
            image: '/assets/images/target_creator.png',
        },
        {
            id: 'corporate',
            title: '기업/기관',
            subtitle: '교육 담당자 & 경영진',
            features: [
                '임직원 AI 교육 프로그램',
                '부서별 맞춤 생산성 향상',
                '디지털 전환 컨설팅',
            ],
            image: '/assets/images/target_corporate.png',
        },
    ];

    return (
        <section className="target-section" ref={ref}>
            <div className="container">
                <div className={`target-header ${isVisible ? 'visible' : ''}`}>
                    <span className="target-badge">🎯 맞춤 교육</span>
                    <h2 className="target-title">
                        이런 분들을 위한 강의
                    </h2>
                    <p className="target-subtitle">
                        각자의 목표에 맞는 맞춤형 커리큘럼을 제공합니다
                    </p>
                </div>

                <div className="target-grid">
                    {targets.map((target, index) => (
                        <div
                            key={target.id}
                            className={`target-card ${isVisible ? 'visible' : ''}`}
                            style={{ '--delay': `${index * 150}ms` }}
                        >
                            <div className="target-card-bg">
                                <img src={target.image} alt={target.title} className="target-bg-img" />
                                <div className="target-overlay"></div>
                            </div>

                            <div className="target-content">
                                <h3 className="target-card-title">{target.title}</h3>
                                <p className="target-card-subtitle">{target.subtitle}</p>

                                <ul className="target-features">
                                    {target.features.map((feature, i) => (
                                        <li key={i}>
                                            <span className="check-icon">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
