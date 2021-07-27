import React from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import color from '../config/color';

function StarsBar({ rate, size = 25, space = 15, ...otherProps }) {
    const rating = [...Array(rate).keys()]
    const unRating = [...Array(5 - rate).keys()]

    return (
        <div {...otherProps}>
            {rating.map(star => (
                <AiFillStar key={star} size={size} color={color.primary} style={{ marginRight: space }} />
            ))}
            {unRating.map(star => (
                <AiOutlineStar key={star} size={size} color={color.primary} style={{ marginRight: space }} />
            ))}
        </div>
    );
}

export default StarsBar;