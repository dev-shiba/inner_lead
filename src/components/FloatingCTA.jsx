import { useState, useEffect } from 'react';
import './FloatingCTA.css';

export default function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 300px
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        window.open('https://open.kakao.com/o/simoMRPf', '_blank');
    };

    return (
        <button
            className={`floating-cta ${isVisible ? 'visible' : ''} ${isHovered ? 'expanded' : ''}`}
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="컨설팅 및 교육문의"
        >
            <span className="floating-cta-icon">💬</span>
            <span className="floating-cta-text">컨설팅 및 교육문의</span>
            <span className="floating-cta-pulse"></span>
        </button>
    );
}
