import React, { useEffect, useRef, useState } from 'react';
import '../stylesheets/ScrollWheel.scss';

const STATE_IDLE = 'idle';
const STATE_DRAGGING = 'dragging';

const ScrollWheel = props => {
    const { handler } = props;

    const [actualAngle, setActualAngle] = useState(0);
    const [displayAngle, setDisplayAngle] = useState(0);
    const [status, setStatus] = useState(STATE_IDLE);

    const elementPosition = useRef(null);

    const handleDragStatus = event => {
        event.type === "mousedown" ? setStatus(STATE_DRAGGING) : setStatus(STATE_IDLE);
    };

    const handleRotate = (event) => {
        if (status === STATE_DRAGGING) {
            elementPosition.current.focus();
            const elementData = elementPosition.current.getBoundingClientRect();

            const mouseXPos = event.clientX;
            const mouseYPos = event.clientY;
            const angle = Math.round(getAngle(mouseXPos, mouseYPos, elementData));

            setActualAngle(angle);

            if (props.snapAngle) {
                const sm = props.snapAngle;
                const delta = Math.abs(angle - (Math.round(angle / sm) * sm));
                if (delta <= 5) {
                    setDisplayAngle(Math.round(angle / sm) * sm);
                }
            } else {
                setDisplayAngle(angle);
                handler(angle);

            }
        }
    };

    const getAngle = (mouseXPos, mouseYPos, centerElem) => {
        const centerElXPos = centerElem.left + (centerElem.width / 2);
        const centerElYPos = centerElem.top + (centerElem.height / 2);
        const yOffset = mouseYPos - centerElYPos;
        const xOffset = mouseXPos - centerElXPos;
        const angleRad = Math.atan2(yOffset, xOffset);
        const angleDeg = (angleRad * (180 / Math.PI));
        return angleDeg % 360;
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleRotate);
        document.addEventListener('mouseup', handleDragStatus);

        return () => {
            document.removeEventListener('mousemove', handleRotate);
            document.removeEventListener('mouseup', handleDragStatus);
        }
    }, );

    return (
        <div className="container" onMouseDown={handleDragStatus}>
            <div className="circle" ref={elementPosition}>
                <div className="circleContainer" style={{transform: [`rotate(${displayAngle}deg)`]}}>
                    <div className="grabbableCircle" />
                </div>
                <div className="middleButton" />
            </div>
        </div>
    );
};

export default ScrollWheel;
