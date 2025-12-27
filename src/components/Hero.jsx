import { useState, useEffect } from 'react';
import './Hero.css';

export default function Hero() {
    const [displayText, setDisplayText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const fullText = 'AI로 리드하는 당신의 미래';

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, []);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);
        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <section className="hero">
            {/* Background */}
            <div className="hero-bg">
                <div className="hero-grid"></div>
                <div className="hero-glow hero-glow-1"></div>
                <div className="hero-glow hero-glow-2"></div>
            </div>

            <div className="hero-content container">
                {/* Top: Badge */}
                <div className="hero-top">
                    <div className="hero-badge animate-fade-in">
                        <img src="/assets/images/hero-icon.png" alt="" className="badge-icon-img" />
                        <span>2025 생성형 AI 교육의 새로운 기준</span>
                    </div>
                </div>

                {/* Main Content Row - 2 Columns */}
                <div className="hero-main">
                    {/* Left: Text Content */}
                    <div className="hero-text">
                        <h1 className="hero-title">
                            <span className="hero-title-line">챗GPT 강사</span>
                            <span className="hero-title-highlight gradient-text">이너리드</span>
                        </h1>

                        <div className="hero-typing">
                            <span className="typing-text">
                                {displayText}
                                <span className={`typing-cursor ${showCursor ? 'visible' : ''}`}>|</span>
                            </span>
                        </div>

                        <p className="hero-description">
                            17년 기업 실무 경험 + <br />생성형 AI 활용으로
                            <strong>선택권</strong>을 <br />만드는 AI 교육 전문가
                        </p>
                    </div>

                    {/* Right: Profile Image */}
                    <div className="hero-profile-wrap">
                        <img
                            src="/assets/innerlead_profile_v2.png"
                            alt="이너리드 프로필"
                            className="profile-image"
                        />
                    </div>
                </div>

            </div>

            {/* Bottom: Stats Overlay */}
            <div className="hero-stats-bar">
                <div className="stat-item">
                    <span className="stat-number">17+</span>
                    <span className="stat-label">년 실무 경력</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                    <span className="stat-number stat-shimmer">28,000+</span>
                    <span className="stat-label">수강생</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                    <span className="stat-number">98%</span>
                    <span className="stat-label">만족도</span>
                </div>
            </div>
        </section>
    );
}
