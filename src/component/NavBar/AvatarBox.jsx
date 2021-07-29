import React from 'react';
import { VscAccount } from 'react-icons/vsc'
import color from '../../config/color'

function AvatarBox({ name, avatarUrl }) {
    return (
        <div className="avatar-box-container">
            <div style={{color: color.white, fontSize: 15, fontFamily: 'Barlow', width: 110, overflow: 'hidden', height: 20}}>{name}</div>
            {avatarUrl ? (
                <img src={avatarUrl} alt="Avatar" className="avatar-image" />
            ) : (
                <VscAccount color={color.white} size={25}></VscAccount>
            )}
        </div>
    );
}

export default AvatarBox;