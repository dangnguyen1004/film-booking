import React from 'react';
import ReactPlayer from 'react-player';
import color from '../config/color';

function Trailers({...otherProps}) {
    return (
        <div {...otherProps}>
            <div style={{ color: color.white, fontSize: 24, fontWeight: 600, fontStyle: 'normal', marginBottom: 25 }}>Trailers</div>
            <ReactPlayer style={{borderRadius: 50}} controls width={200} height={130} url="https://youtu.be/SrpgXe_mbFE"></ReactPlayer>
        </div>
    );
}

export default Trailers;