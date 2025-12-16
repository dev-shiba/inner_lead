import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './WhyInnerLead.css';

export default function WhyInnerLead() {
    const [ref, isVisible] = useScrollAnimation(0.2);

    const reasons = [
        {
            icon: '⚡',
            title: '17년 실무 경험',
            description: '방송통신·영업·마케팅 분야 20만 고객 경험',
        },
        {
            icon: '🎯',
            title: 'AI 중심 현실적 접근',
            description: 'ChatGPT·이미지 생성·자동화 실습 중심 교육',
        },
        {
            icon: '🔧',
            title: '맞춤형 교육',
            description: '개인/기업/기관별 맞춤 난이도·목표 설정',
        },
        {
            icon: '📡',
            title: '지속적인 지원',
            description: '블로그·유튜브·카톡으로 최신 정보 제공',
        },
        {
            icon: '💰',
            title: '실질적인 수익화',
            description: '블로그/유튜브 수익·기업 생산성 향상 사례',
        },
    ];

    const careers = [
        { company: '엔씨디지넷', role: '관리팀 팀장', duration: '5년' },
        { company: '대성케이디아이', role: '관리팀 팀장', duration: '6년' },
        { company: '딜라이브', role: '강남사업단 영업팀 팀장', duration: '5년' },
    ];

    const certifications = [
        { name: 'AI마케팅 엔지니어 전문가', org: '전자신문인터넷', year: '2023' },
        { name: '스피치지도사1급', org: '한국평생교육원', year: '2023' },
        { name: 'TESAT', org: '한국경제테셋위원회', year: '2021' },
        { name: '사회복지사2급', org: '보건복지부', year: '2020' },
        { name: '정보통신공사기술자', org: '정보통신공사협회', year: '2016' },
        { name: '전산회계1급', org: '한국세무사회', year: '2009' },
        { name: '사무자동화산업기사', org: '한국산업인력공단', year: '2009' },
    ];

    const skills = [
        '블로그 관리', '유튜브 운영', 'Python', 'Photoshop', 'Illustrator',
        '데이터마이닝', '디지털마케팅', '스피치', 'PPT제작', '업무자동화'
    ];

    return (
        <section className="why-section" ref={ref}>
            <div className="container">
                <div className={`why-header ${isVisible ? 'visible' : ''}`}>
                    <span className="why-badge">✨ 차별점</span>
                    <h2 className="section-title">
                        왜 <span className="gradient-text">이너리드</span>인가?
                    </h2>
                </div>

                <div className="why-grid">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className={`why-card ${isVisible ? 'visible' : ''}`}
                            style={{ '--delay': `${index * 100}ms` }}
                        >
                            <div className="why-icon">{reason.icon}</div>
                            <h3 className="why-title">{reason.title}</h3>
                            <p className="why-description">{reason.description}</p>
                        </div>
                    ))}
                </div>

                {/* Credentials Section */}
                <div className={`credentials-section ${isVisible ? 'visible' : ''}`}>
                    <h3 className="credentials-title">
                        <span className="credentials-icon">📜</span>
                        경력 & 자격
                    </h3>

                    <div className="credentials-grid">
                        {/* Career */}
                        <div className="credential-card">
                            <h4 className="credential-label">경력사항</h4>
                            <div className="career-list">
                                {careers.map((career, index) => (
                                    <div key={index} className="career-item">
                                        <span className="career-company">{career.company}</span>
                                        <span className="career-role">{career.role} · {career.duration}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="career-total">
                                <span className="total-label">총 경력</span>
                                <span className="total-value">16년+</span>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="credential-card">
                            <h4 className="credential-label">보유 자격증</h4>
                            <div className="cert-list">
                                {certifications.map((cert, index) => (
                                    <div key={index} className="cert-item">
                                        <span className="cert-name">{cert.name}</span>
                                        <span className="cert-org">{cert.org} · {cert.year}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="credential-card credential-card-skills">
                            <h4 className="credential-label">보유 기술</h4>
                            <div className="skills-tags">
                                {skills.map((skill, index) => (
                                    <span key={index} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                            <div className="credential-highlight">
                                <span className="highlight-icon">🏆</span>
                                <span>크몽 엔터프라이즈 전문가 · 만족도 99%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

