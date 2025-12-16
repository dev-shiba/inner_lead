import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Process.css';

export default function Process() {
    const [ref, isVisible] = useScrollAnimation(0.2);

    const steps = [
        {
            step: '01',
            title: '상담 신청',
            description: '카카오톡 또는 이메일로 간편하게 문의',
            icon: '💬',
        },
        {
            step: '02',
            title: '목표 & 일정 협의',
            description: '1:1 미팅으로 맞춤 방향 설정',
            icon: '🎯',
        },
        {
            step: '03',
            title: '커리큘럼 확정',
            description: '내용·일정·예산 최종 조율',
            icon: '📋',
        },
        {
            step: '04',
            title: '강의 진행',
            description: '실전 중심 AI 교육 진행',
            icon: '🚀',
        },
        {
            step: '05',
            title: '사후 관리',
            description: '블로그·유튜브·카톡으로 후속 지원',
            icon: '🔄',
        },
    ];

    return (
        <section className="process-section" ref={ref}>
            <div className="process-bg">
                <div className="process-gradient"></div>
            </div>

            <div className="container">
                <div className={`process-header ${isVisible ? 'visible' : ''}`}>
                    <span className="process-badge">📌 프로세스</span>
                    <h2 className="section-title">
                        강의 신청 <span className="gradient-text">5단계</span>
                    </h2>
                    <p className="section-subtitle">
                        간편한 프로세스로 빠르게 시작하세요
                    </p>
                </div>

                <div className="process-timeline">
                    <div className="timeline-line"></div>
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`process-step ${isVisible ? 'visible' : ''}`}
                            style={{ '--delay': `${index * 200 + 300}ms` }}
                        >
                            <div className="step-icon">{step.icon}</div>
                            <div className="step-content">
                                <div className="step-number">{step.step}</div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
