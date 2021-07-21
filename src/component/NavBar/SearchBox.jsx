import React from 'react';
import './NavBar.css'
import { FiSearch } from 'react-icons/fi'
import color from '../../config/color';

function searchBox({onChange}) {
    return (
        <div className='search-box-container'>
            <input className="search-box" placeholder='Search....' onChange={e => onChange(e.currentTarget.value)}></input>
            <FiSearch color={color.white} size={20}></FiSearch>
        </div>
    );
}

export default searchBox;