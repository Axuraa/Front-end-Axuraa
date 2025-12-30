// types/Generals/backgroundTypes.ts
export interface BackgroundProps {
    type: 'Hexagon' | 'Ellipse' | 'Alphabet';
    
    className?: string;
    
}


// Hexagon Props Interface  the animation at home page
export interface HexagonProps {
    className?: string;
    width?: number;
    height?: number;
    direction : 'left' | 'right';
    position: 'up' | 'down';
}