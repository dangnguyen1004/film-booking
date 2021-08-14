import React from 'react';
import { BsArrowRight } from 'react-icons/bs'
import color from '../config/color';

function ButtonBuy({ onClick }) {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: color.primary,
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
                padding: "8px 20px",
                border: 'none',
                cursor: 'pointer',
            }}
        >
            <BsArrowRight size={14} color={color.black} />
            <span
                style={{
                    fontSize: 20,
                    fontWeight: 500,
                    marginLeft: 12,
                }}
            >
                Buy tickets
            </span>
        </button>
    );
}

export default ButtonBuy;