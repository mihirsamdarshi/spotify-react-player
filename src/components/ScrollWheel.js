import React, { useEffect, useState } from 'react';
import '../stylesheets/ScrollWheel.scss';

const ScrollWheel = props => {

    const [dragImage, setDragImage] = useState(null);

    const handleDrag = (event) => {
        event.dataTransfer.setDragImage(new Image(), 0, 0);
        console.log(event);
    };

    useEffect(() => {
        document.addEventListener('dragstart', handleDrag);

        return () => {
            document.removeEventListener('dragend', handleDrag);
        }
    });

    return (
        <div className="container">
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
