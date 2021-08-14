import React from 'react';
import { VscAccount } from 'react-icons/vsc'
import color from '../../config/color'

function AvatarBox({ name, avatarUrl, ...otherProps }) {
    return (
        <div {...otherProps} className="avatar-box-container" style={{cursor: 'pointer'}}>
            <div style={{color: color.white, fontSize: 15, fontFamily: 'Barlow', width: 110, overflow: 'hidden', height: 20}}>{name}</div>
            {avatarUrl ? (
                <img style={{width: 25, height: 25, borderRadius: 14}} src={avatarUrl} alt="Avatar" className="avatar-image" />
            ) : (
                <VscAccount color={color.white} size={25}></VscAccount>
            )}
        </div>
    );
}

export default AvatarBox;