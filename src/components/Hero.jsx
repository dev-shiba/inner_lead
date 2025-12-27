import { useState, useEffect, useRef, useMemo } from 'react';
import './Hero.css';

export default function Hero() {
    const [displayText, setDisplayText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const heroRef = useRef(null);
    const fullText = 'AI로 리드하는 당신의 미래';

    // 별 파티클 생성
    const stars = useMemo(() => {
        return Array.from({ length: 50 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            delay: Math.random() * 3,
            duration: Math.random() * 2 + 2,
        }));
    }, []);

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

    // 마우스 움직임 추적
    const handleMouseMove = (e) => {
        if (!heroRef.current) return;
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <section className="hero" ref={heroRef} onMouseMove={handleMouseMove}>
            {/* Background */}
            <div className="hero-bg">
                <div className="hero-grid"></div>
                <div className="hero-glow hero-glow-1"></div>
                <div className="hero-glow hero-glow-2"></div>

                {/* Star Particles */}
                <div className="hero-stars">
                    {stars.map((star) => {
                        const dx = mousePos.x - (star.x / 100) * (heroRef.current?.offsetWidth || 0);
                        const dy = mousePos.y - (star.y / 100) * (heroRef.current?.offsetHeight || 0);
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        const maxDistance = 150;
                        const scale = distance < maxDistance ? 1 + (1 - distance / maxDistance) * 1.5 : 1;
                        const brightness = distance < maxDistance ? 1 + (1 - distance / maxDistance) : 1;

                        return (
                            <div
                                key={star.id}
                                className="star"
                                style={{
                                    left: `${star.x}%`,
                                    top: `${star.y}%`,
                                    width: `${star.size}px`,
                                    height: `${star.size}px`,
                                    '--delay': `${star.delay}s`,
                                    '--duration': `${star.duration}s`,
                                    transform: `scale(${scale})`,
                                    opacity: 0.3 * brightness,
                                }}
                            />
                        );
                    })}
                </div>
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
