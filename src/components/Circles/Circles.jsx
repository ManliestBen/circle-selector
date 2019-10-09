import React from 'react';
import './Circles.css';

const Circles = (props) => (
    <div className='Circles'>
        {props.circleNo.map((circle,idx) => 
            <div
                className={props.circleIdx === idx ? 'selected' : 'color'}
                key={circle}
                onClick={() => props.handleCircleSelection(idx)}
                >
                {props.circleIdx === idx ? `${idx+1}` : `${idx+1}`}
                </div>)}
    </div>
);

export default Circles;