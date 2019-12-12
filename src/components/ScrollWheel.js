import React, { useEffect, useRef, useState } from 'react';
import '../stylesheets/ScrollWheel.scss';

const STATE_IDLE = 'idle';
const STATE_DRAGGING = 'dragging';
const STATE_RIGHT = 'right';
const STATE_LEFT = 'left';
const STATE_TOP = 'top';
const STATE_BOTTOM = 'bottom';

const ScrollWheel = props => {
    const { dragHandler, startPos=STATE_RIGHT, snapAngle=0 } = props;

    const [status, setStatus] = useState(STATE_IDLE);
    const [offset, setOffset] = useState(0);
    const [actualAngle, setActualAngle] = useState(0);
    const [displayAngle, setDisplayAngle] = useState(0);

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

            if (snapAngle !== 0) {
                const sm = props.snapAngle;
                const delta = Math.abs(angle - (Math.round(angle / sm) * sm));
                if (delta <= 5) {
                    setDisplayAngle(Math.round(angle / sm) * sm);
                    dragHandler(angle, Math.round(angle / sm) * sm);
                }
            } else {
                setDisplayAngle(angle);
                dragHandler(angle, angle);
            }
        }
    };


    const getAngle = (mouseXPos, mouseYPos, centerElem) => {
        const centerElXPos = centerElem.left + (centerElem.width / 2);
        const centerElYPos = centerElem.top + (centerElem.height / 2);
        const yOffset = mouseYPos - centerElYPos;
        const xOffset = mouseXPos - centerElXPos;
        const angleRad = Math.atan2(yOffset, xOffset);
        const angleDeg = (angleRad * (180 / Math.PI)) + offset;
        return angleDeg % 360;
    };

    useEffect(() => {
        switch (startPos) {
        case STATE_TOP:
            setOffset(-90);
            break;
        case STATE_LEFT:
            setOffset(180);
            break;
        case STATE_BOTTOM:
            setOffset(90);
            break;
        default:
            break;
        }
    });

    useEffect(() => {
        document.addEventListener('mousemove', handleRotate);
        document.addEventListener('mouseup', handleDragStatus);

        return () => {
            document.removeEventListener('mousemove', handleRotate);
            document.removeEventListener('mouseup', handleDragStatus);
        }
    });

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
