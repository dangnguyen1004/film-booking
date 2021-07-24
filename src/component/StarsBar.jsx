import React from 'react';
import {AiOutlineStar, AiFillStar} from 'react-icons/ai'
import color from '../config/color';

function StarsBar(props) {
    return (
        <div>
            <AiFillStar size={25} color={color.primary} style={{marginRight: 15}} />
            <AiFillStar size={25} color={color.primary} style={{marginRight: 15}} />
            <AiFillStar size={25} color={color.primary} style={{marginRight: 15}} />
            <AiFillStar size={25} color={color.primary} style={{marginRight: 15}} />
            <AiOutlineStar size={25} color={color.primary} style={{marginRight: 15}} />
        </div>
    );
}

export default StarsBar;