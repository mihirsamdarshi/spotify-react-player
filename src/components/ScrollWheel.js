import React, { useEffect, useRef, useState } from 'react';
import '../stylesheets/ScrollWheel.scss';

const ScrollWheel = props => {

    const [dragImage, setDragImage] = useState(null);
    const elementPosition = useRef(null);

    const getSize = element => {
        if (element) {
            this.props.getSize(element.getBoundingClientRect());
        }
    };

    const handleDrag = (event) => {
        event.dataTransfer.setDragImage(new Image(), 0, 0);

        elementPosition.current.focus();

        const elementData = elementPosition.current.getBoundingClientRect()
        const dragXPos = event.pageX;
        const dragYPos = event.pageY;

        //TODO: use the above logged function to calculate the position of the mouse in the component
        //TODO: terminate dragevent if it leaves the circle
    };

    useEffect(() => {
        document.addEventListener('dragstart', handleDrag);

        return () => {
            document.removeEventListener('dragstart', handleDrag);
        }
    });

    return (
        <div className="container" ref={elementPosition}>
            <div className="circle" draggable onDrag={(event) => handleDrag(event)} >
                <div className="middleButton">
                    <div className="arrowContainer">
                        <i className="arrow up" />
                        <i className="arrow down" />
                        <i className="arrow left" />
                        <i className="arrow right" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollWheel;
