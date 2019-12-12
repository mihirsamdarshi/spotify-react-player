import React, { useEffect, useRef, useState } from 'react';
import '../stylesheets/ScrollWheel.scss';

const ScrollWheel = props => {
    const [transform, setTransform] = useState('');
    const [angle, setAngle] = useState(0);
    const elementPosition = useRef(null);


    const handleDragStart = (event) => {
        elementPosition.current.focus();
        const elementData = elementPosition.current.getBoundingClientRect();
        const xPos = event.clientX;
        const yPos = event.clientY;

        event.preventDefault();

        console.log(getCenter(elementData));

        const angle = getAngle(xPos, yPos, getCenter(elementData));

        setAngle(angle);
    };

    const getAngle = (xPos, yPos, center) => {
        const mouse = {
            x: xPos,
            y: yPos,
        };
        console.log(mouse);
        return (Math.atan2(mouse.y - center.y, mouse.x - center.x) * (180 / Math.PI)) % 360;
    };

    const getCenter = (element) => {
        return {
            x: element.left + (element.width / 2),
            y: element.top + (element.height / 2),
        };
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleDragStart);
        document.addEventListener('mousemove', handleDragStart);
        document.addEventListener('mouseup', handleDragStart);

        return () => {
            document.removeEventListener('mousedown', handleDragStart);
            document.removeEventListener('mousemove', handleDragStart);
            document.removeEventListener('mouseup', handleDragStart);
        }
    }, );

    return (
        <div className="container" ref={elementPosition}>
            <div className="circle">
                <div className="circleContainer" draggable onDrag={(event) => handleDragStart(event)} style={{transform: [`rotate(${angle}deg)`]}}>
                    <div className="grabbableCircle" />
                </div>
                <div className="middleButton" />
            </div>
        </div>
    );
};

export default ScrollWheel;
