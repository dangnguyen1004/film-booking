import React from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import color from '../config/color';

function StarsBar({ rate, ...otherProps }) {
    const rating = [...Array(rate).keys()]
    const unRating = [...Array(5 - rate).keys()]

    return (
        <div {...otherProps}>
            {rating.map(star => (
                <AiFillStar key={star} size={25} color={color.primary} style={{ marginRight: 15 }} />
            ))}
            {unRating.map(star => (
                <AiOutlineStar key={star} size={25} color={color.primary} style={{ marginRight: 15 }} />
            ))}
        </div>
    );
}

export default StarsBar;