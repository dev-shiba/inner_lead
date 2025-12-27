import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation(threshold = 0.1) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const currentRef = ref.current;
        if (!currentRef) return;

        // 마운트 시 즉시 체크: 이미 뷰포트 안에 있으면 바로 visible
        const rect = currentRef.getBoundingClientRect();
        const isAlreadyVisible =
            rect.top < window.innerHeight && rect.bottom > 0;

        if (isAlreadyVisible) {
            setIsVisible(true);
            return;
        }

        // 뷰포트 밖에 있으면 기존 로직 사용
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        observer.observe(currentRef);

        return () => {
            observer.unobserve(currentRef);
        };
    }, [threshold]);

    return [ref, isVisible];
}

export function useCountUp(end, duration = 2000, isVisible = true) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        let startTime = null;
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration, isVisible]);

    return count;
}
