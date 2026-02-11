import React, { useRef, useState, ReactNode, CSSProperties, useEffect } from 'react';
import styles from './ScrollComponents.module.css';

import { ScrollComponentProps } from '@/types/Generals/scrollTypes';

export const HorizontalScroll: React.FC<ScrollComponentProps> = ({ 
  children, 
  className = '',
  style
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startPos = useRef(0);
  const scrollPos = useRef(0);
  const [items, setItems] = useState<ReactNode[]>([]);
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); 
  const scrollInterval = useRef<NodeJS.Timeout | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Duplicate the items to create a seamless loop
  useEffect(() => {
    const childrenArray = React.Children.toArray(children);
    setItems([...childrenArray, ...childrenArray, ...childrenArray]);
    cardRefs.current = cardRefs.current.slice(0, childrenArray.length * 3);
  }, [children]);

  // Auto-scroll logic
  useEffect(() => {
    const scroller = scrollRef.current;
    if (!scroller || items.length === 0) return;

    const scrollToCard = (index: number) => {
      const card = cardRefs.current[index];
      if (!card) return;

      scroller.scrollTo({
        left: card.offsetLeft - scroller.offsetLeft,
        behavior: 'smooth'
      });
    };

    // Auto-scroll to next card every 3 seconds
    scrollInterval.current = setInterval(() => {
      // UPDATED: Check both dragging and hover state
      if (isDragging.current || isHovered) return;

      setCurrentIndex(prev => {
        const nextIndex = (prev + 1) % (items.length / 3);
        scrollToCard(nextIndex);
        return nextIndex;
      });
    }, 3000);

    return () => {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
      }
    };
  }, [items.length, isHovered]); // UPDATED: Added isHovered to dependencies

  const handleMouseDown = (e: React.MouseEvent) => {
    const scroller = scrollRef.current;
    if (!scroller) return;
    
    isDragging.current = true;
    startPos.current = e.pageX;
    scrollPos.current = scroller.scrollLeft;
    scroller.style.cursor = 'grabbing';
    scroller.style.scrollBehavior = 'auto';
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    
    const scroller = scrollRef.current;
    const x = e.pageX;
    const walk = (startPos.current - x) * 2;
    scroller.scrollLeft = scrollPos.current + walk;
  };
  
  const handleMouseUp = () => {
    isDragging.current = false;
    const scroller = scrollRef.current;
    if (!scroller) return;
    
    scroller.style.cursor = 'grab';
    scroller.style.scrollBehavior = 'smooth';
    snapToNearestCard();
  };

  const handleScroll = () => {
    if (isScrolling) return;
    
    const scroller = scrollRef.current;
    if (!scroller) return;

    const scrollWidth = scroller.scrollWidth / 3;
    const scrollLeft = scroller.scrollLeft;

    // Find the closest card
    const cardWidth = scrollWidth / (items.length / 3);
    const newIndex = Math.round(scrollLeft / cardWidth) % (items.length / 3);
    
    setCurrentIndex(newIndex);
  };

  const snapToNearestCard = () => {
    const scroller = scrollRef.current;
    if (!scroller || items.length === 0) return;

    const scrollWidth = scroller.scrollWidth / 3;
    const cardWidth = scrollWidth / (items.length / 3);
    const newIndex = Math.round(scroller.scrollLeft / cardWidth) % (items.length / 3);
    
    const targetScroll = newIndex * cardWidth;
    scroller.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });

    setCurrentIndex(newIndex);
  };

  //Handle card hover
  const handleCardMouseEnter = () => {
    setIsHovered(true);
  };

  const handleCardMouseLeave = () => {
    setIsHovered(false);
  };

  // Update card refs
  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = el;
  };

  return (
    <div
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onScroll={handleScroll}
      className={`${styles.horizontalScroll} ${className}`}
      style={style}
    >
      <div 
        ref={contentRef}
        style={{
          display: 'flex',
          gap: '22px',
          // minWidth: 'max-content'
        }}
      >
        {items.map((child, index) => (
          <div 
            key={index} 
            ref={el => setCardRef(el, index)}
            className={styles.scrollItem}
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export const VerticalScroll: React.FC<ScrollComponentProps & { height?: string }> = ({ 
  children, 
  className = '',
  height = '500px',
  style
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startPos = useRef(0);
  const scrollPos = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    const scroller = scrollRef.current;
    if (!scroller) return;
    
    isDragging.current = true;
    startPos.current = e.pageY;
    scrollPos.current = scroller.scrollTop;
    scroller.style.cursor = 'grabbing';
    scroller.style.scrollBehavior = 'auto';
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    
    const scroller = scrollRef.current;
    const y = e.pageY;
    const walk = (startPos.current - y) * 2;
    scroller.scrollTop = scrollPos.current + walk;
  };
  
  const handleMouseUp = () => {
    isDragging.current = false;
    const scroller = scrollRef.current;
    if (!scroller) return;
    
    scroller.style.cursor = 'grab';
    scroller.style.scrollBehavior = 'smooth';
  };

  const handleWheel = (e: React.WheelEvent) => {
    const scroller = scrollRef.current;
    if (!scroller) return;
    
    e.preventDefault();
    scroller.scrollTop += e.deltaY;
  };

  return (
    <div
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
      className={`${styles.verticalScroll} ${className}`}
      style={{ ...style, height }}
    >
      {React.Children.map(children, (child, index) => (
        <div key={index} className={styles.scrollItem}>
          {child}
        </div>
      ))}
    </div>
  );
};