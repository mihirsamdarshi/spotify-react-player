import React, { useRef, useState } from 'react';
import '../stylesheets/ScrollWheel.scss';

const ScrollWheel = props => {
    const [angle, setAngle] = useState(0);
    const elementPosition = useRef(null);

    const handleRotate = (event) => {
        if (event.type === "mousedown") {
            document.addEventListener('mousemove', handleRotate);
            elementPosition.current.focus();
            const elementData = elementPosition.current.getBoundingClientRect();
            const xPos = event.clientX;
            const yPos = event.clientY;

            const angle = getAngle(xPos, yPos, getCenter(elementData));
            setAngle(angle);
        } else {
            document.removeEventListener('mousemove', handleRotate);
        }
    };

    const getAngle = (xPos, yPos, center) => {

        const mouse = {
            x: xPos,
            y: yPos,
        };

        return (Math.atan2(mouse.y - center.y, mouse.x - center.x) * (180 / Math.PI)) % 360;
    };

    const getCenter = (element) => {
        return {
            x: element.left + (element.width / 2),
            y: element.top + (element.height / 2),
        };
    };

    return (
        <div className="container" onMouseDown={handleRotate} onMouseUp={handleRotate}>
            <div className="circle" ref={elementPosition}>
                <div className="circleContainer" style={{transform: [`rotate(${angle}deg)`]}}>
                    <div className="grabbableCircle" />
                </div>
                <div className="middleButton" />
            </div>
        </div>
    );
};

export default ScrollWheel;
