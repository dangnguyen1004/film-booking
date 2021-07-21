import React from 'react';
import NavButton from './NavButton';

function MenuItems({ items }) {
    return (
        <div style={{ display: 'flex', width: 336, justifyContent: 'space-between' }}>
            {items.map(item => (
                <NavButton key={item.label} label={item.label} onClick={item.onClick} />
            ))}
            {/* <NavButton label="All movies" />
            <NavButton label="Trending now" />
            <NavButton label="Upcoming" /> */}
        </div>
    );
}

export default MenuItems;