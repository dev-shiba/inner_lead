import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Curriculum.css';

export default function Curriculum() {
    const [ref, isVisible] = useScrollAnimation(0.2);
    const [activeLevel, setActiveLevel] = useState(0);

    const levels = [
        {
            level: 'Level 1',
            title: 'AI 리터러시 기초',
            duration: '4시간',
            description: 'ChatGPT의 기본부터 실무 활용까지',
            modules: [
                'ChatGPT 이해와 활용법',
                '프롬프트 엔지니어링 기초',
                '실무 예제로 배우는 ChatGPT 활용',
                '업무 자동화 기초',
            ],
            color: 'var(--accent-cyan)',
        },
        {
            level: 'Level 2',
            title: '콘텐츠 자동화 심화',
            duration: '6시간',
            description: '블로그, 유튜브 수익화 실전 전략',
            modules: [
                'AI 블로그 글쓰기 마스터',
                '유튜브 스크립트 자동 생성',
                'AI 이미지 생성 도구 활용',
                '수익화 전략 및 실습',
            ],
            color: 'var(--accent-purple)',
        },
        {
            level: 'Level 3',
            title: 'GPTs 제작 & 맞춤 AI',
            duration: '8시간',
            description: '나만의 AI 어시스턴트 구축',
            modules: [
                '나만의 GPT 만드는 방법',
                '업무별 맞춤 챗봇 구성',
                '고급 자동화 워크플로우',
                'API 연동 기초',
            ],
            color: 'var(--accent-pink)',
        },
        {
            level: 'Enterprise',
            title: '기업/기관 맞춤 프로그램',
            duration: '맞춤 설계',
            description: '조직 전체의 AI 트랜스포메이션',
            modules: [
                '2시간~1일 임직원 교육',
                '부서별 AI 활용 전략',
                '도입 후 지속 컨설팅',
                'ROI 측정 및 개선',
            ],
            color: 'var(--accent-green)',
        },
    ];

    return (
        <section className="curriculum-section" ref={ref}>
            <div className="curriculum-bg">
                <div className="curriculum-glow"></div>
            </div>

            <div className="container">
                <div className={`curriculum-header ${isVisible ? 'visible' : ''}`}>
                    <span className="curriculum-badge">📚 커리큘럼</span>
                    <h2 className="section-title">
                        체계적인 <span className="gradient-text">레벨별 교육</span>
                    </h2>
                    <p className="section-subtitle">
                        목표와 수준에 맞는 단계별 커리큘럼을 선택하세요
                    </p>
                </div>

                <div className={`curriculum-tabs ${isVisible ? 'visible' : ''}`}>
                    {levels.map((level, index) => (
                        <button
                            key={index}
                            className={`curriculum-tab ${activeLevel === index ? 'active' : ''}`}
                            onClick={() => setActiveLevel(index)}
                            style={{ '--tab-color': level.color }}
                        >
                            <span className="tab-level">{level.level}</span>
                            <span className="tab-title">{level.title}</span>
                        </button>
                    ))}
                </div>

                <div className={`curriculum-content ${isVisible ? 'visible' : ''}`}>
                    {levels.map((level, index) => (
                        <div
                            key={index}
                            className={`curriculum-panel ${activeLevel === index ? 'active' : ''}`}
                            style={{ '--panel-color': level.color }}
                        >
                            <div className="panel-header">
                                <div className="panel-info">
                                    <span className="panel-level">{level.level}</span>
                                    <h3 className="panel-title">{level.title}</h3>
                                    <p className="panel-description">{level.description}</p>
                                </div>
                                <div className="panel-duration">
                                    <span className="duration-label">소요 시간</span>
                                    <span className="duration-value">{level.duration}</span>
                                </div>
                            </div>

                            <div className="panel-modules">
                                {level.modules.map((module, i) => (
                                    <div key={i} className="module-item">
                                        <span className="module-number">{String(i + 1).padStart(2, '0')}</span>
                                        <span className="module-text">{module}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
