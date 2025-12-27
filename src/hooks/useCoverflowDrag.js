import { useState, useCallback, useEffect } from 'react';

export function useCoverflowDrag(itemsLength, options = {}) {
    const { initialIndex = 2, threshold = 80, enableKeyboard = true } = options;

    const [activeIndex, setActiveIndex] = useState(initialIndex);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);

    const handlePrev = useCallback(() => {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : itemsLength - 1));
    }, [itemsLength]);

    const handleNext = useCallback(() => {
        setActiveIndex((prev) => (prev < itemsLength - 1 ? prev + 1 : 0));
    }, [itemsLength]);

    const handleMouseDown = useCallback((e) => {
        setIsDragging(true);
        setStartX(e.clientX || e.touches?.[0]?.clientX || 0);
    }, []);

    const handleMouseMove = useCallback((e) => {
        if (!isDragging) return;
        const currentX = e.clientX || e.touches?.[0]?.clientX || 0;
        const diff = currentX - startX;
        setTranslateX(diff);
    }, [isDragging, startX]);

    const handleMouseUp = useCallback(() => {
        if (!isDragging) return;
        setIsDragging(false);

        if (translateX > threshold) {
            handlePrev();
        } else if (translateX < -threshold) {
            handleNext();
        }
        setTranslateX(0);
    }, [isDragging, translateX, threshold, handlePrev, handleNext]);

    const getCardStyle = useCallback((index) => {
        const diff = index - activeIndex;
        const absD = Math.abs(diff);

        if (absD > 3) {
            return {
                transform: `translateX(${diff * 100}px) scale(0.5) rotateY(${diff > 0 ? -60 : 60}deg)`,
                opacity: 0,
                zIndex: 0,
            };
        }

        const translateXVal = diff * 180 + (isDragging ? translateX * 0.3 : 0);
        const scale = 1 - absD * 0.15;
        const rotateY = diff * -35;
        const zIndex = 10 - absD;
        const opacity = 1 - absD * 0.25;

        return {
            transform: `translateX(${translateXVal}px) scale(${scale}) rotateY(${rotateY}deg)`,
            opacity,
            zIndex,
        };
    }, [activeIndex, isDragging, translateX]);

    useEffect(() => {
        if (!enableKeyboard) return;

        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'ArrowRight') handleNext();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [enableKeyboard, handlePrev, handleNext]);

    return {
        activeIndex,
        setActiveIndex,
        isDragging,
        translateX,
        handlePrev,
        handleNext,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        getCardStyle,
        dragHandlers: {
            onMouseDown: handleMouseDown,
            onMouseMove: handleMouseMove,
            onMouseUp: handleMouseUp,
            onMouseLeave: handleMouseUp,
            onTouchStart: handleMouseDown,
            onTouchMove: handleMouseMove,
            onTouchEnd: handleMouseUp,
        },
    };
}
