import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './ProblemSection.css';

export default function ProblemSection() {
    const [ref, isVisible] = useScrollAnimation(0.2);

    const problems = [
        {
            icon: '⚠️',
            title: 'AI 모르면 도태된다',
            description: '2025년, AI를 활용하지 못하는 직장인은 점점 설 자리를 잃고 있습니다. 경쟁자는 이미 AI로 10배 생산성을 내고 있습니다.',
            stat: '73%',
            statLabel: '기업이 AI 역량을 채용 기준으로 고려',
        },
        {
            icon: '🔥',
            title: '퇴사 후 막막한 미래',
            description: '퇴사를 꿈꾸지만, 무엇을 해야 할지 모르겠나요? 블로그, 유튜브 시작했지만 수익은 0원. AI 없이는 콘텐츠 생산조차 버겁습니다.',
            stat: '89%',
            statLabel: '퇴사 준비자가 수익화에 실패',
        },
        {
            icon: '💀',
            title: '경쟁사는 이미 AI 도입 완료',
            description: '당신의 회사만 아직도 수작업입니까? 경쟁사는 AI로 업무를 자동화하고, 당신 회사의 고객을 빼앗고 있습니다.',
            stat: '5배',
            statLabel: 'AI 도입 기업의 생산성 향상',
        },
    ];

    return (
        <section className="problem-section" ref={ref}>
            <div className="problem-bg">
                <div className="problem-gradient"></div>
            </div>

            <div className="container">
                <div className={`problem-header ${isVisible ? 'visible' : ''}`}>
                    <span className="problem-badge">🚨 위기 인식</span>
                    <h2 className="problem-title">
                        지금 <span className="danger-text">행동하지 않으면</span><br />
                        1년 뒤 후회합니다
                    </h2>
                    <p className="problem-subtitle">
                        AI 시대, 더 이상 미룰 수 없는 선택의 순간입니다
                    </p>
                </div>

                <div className="problem-grid">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className={`problem-card ${isVisible ? 'visible' : ''}`}
                            style={{ '--delay': `${index * 150}ms` }}
                        >
                            <div className="problem-card-glow"></div>
                            <div className="problem-icon">{problem.icon}</div>
                            <h3 className="problem-card-title">{problem.title}</h3>
                            <p className="problem-card-desc">{problem.description}</p>
                            <div className="problem-stat">
                                <span className="problem-stat-number">{problem.stat}</span>
                                <span className="problem-stat-label">{problem.statLabel}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`problem-cta ${isVisible ? 'visible' : ''}`}>
                    <p className="problem-cta-text">
                        더 늦기 전에, <strong>지금 바로</strong> 시작하세요
                    </p>
                </div>
            </div>
        </section>
    );
}
