import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Contact.css';

export default function Contact() {
    const [ref, isVisible] = useScrollAnimation(0.2);

    const channels = [
        {
            name: '카카오톡 채널',
            icon: '/assets/icon/icon-kakao.svg',
            url: 'http://pf.kakao.com/_mHxldG',
            color: '#FEE500',
        },
        {
            name: '네이버 블로그',
            icon: '/assets/icon/icon-blog.svg',
            url: 'https://blog.naver.com/aibro',
            color: '#03C75A',
        },
        {
            name: '유튜브',
            icon: '/assets/icon/icon-youtube.svg',
            url: 'https://youtube.com/@innerlead',
            color: '#FF0000',
        },
        {
            name: 'Threads',
            icon: '/assets/icon/icon-threads.svg',
            url: 'https://threads.net/@inner_lead',
            color: '#000000',
        },
    ];

    return (
        <section className="contact-section" id="contact" ref={ref}>
            <div className="contact-bg">
                <div className="contact-glow contact-glow-1"></div>
                <div className="contact-glow contact-glow-2"></div>
            </div>

            <div className="container">
                <div className={`contact-content ${isVisible ? 'visible' : ''}`}>
                    <div className="contact-main">
                        <span className="contact-badge">🚀 시작하기</span>
                        <h2 className="contact-title">
                            지금 바로<br />
                            <span className="gradient-text">AI 교육</span>을 시작하세요
                        </h2>
                        <p className="contact-description">
                            AI는 더 이상 선택이 아닌 필수입니다.<br />
                            실행 가능한 방법을 알려드립니다.
                        </p>

                        <div className="contact-cta-group">
                            <a href="https://open.kakao.com/o/simoMRPf" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-.59 0-1.17-.05-1.73-.13L5.59 21.75A.75.75 0 0 1 4.5 21.13v-4.46C2.46 15.06 2 13.14 2 11c0-4.42 4.5-8 10-8z" />
                                </svg>
                                1:1 상담 신청하기
                            </a>
                            <a href="https://notion.so" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
                                기업/기관 강의 의뢰서 작성
                            </a>
                        </div>
                    </div>

                    <div className="contact-channels">
                        <h3 className="channels-title">채널 바로가기</h3>
                        <div className="channels-grid">
                            {channels.map((channel, index) => (
                                <a
                                    key={index}
                                    href={channel.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="channel-card"
                                    style={{ '--channel-color': channel.color }}
                                >
                                    <img src={channel.icon} alt={channel.name} className="channel-icon" />
                                    <span className="channel-name">{channel.name}</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={`contact-quote ${isVisible ? 'visible' : ''}`}>
                    <blockquote>
                        "블로그 퇴사, 유튜브 수익화, 기업 생산성 향상 —<br />
                        <span className="highlight">당신의 목표를 함께 이루겠습니다.</span>"
                    </blockquote>
                </div>
            </div>
        </section>
    );
}
