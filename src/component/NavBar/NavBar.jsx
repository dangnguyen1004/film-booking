import React from 'react';
import Logo from './Logo';
import MenuItems from './MenuItems';
import SearchBar from './SearchBar';


function NavBar(props) {
    const menuItems = [
        { label: 'All movies', onClick: () => console.log('All Movies') },
        { label: 'Trending now', onClick: () => console.log('Trending now') },
        { label: 'Upcoming', onClick: () => console.log('Upcoming') },
    ]

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 35 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: 1216 }}>
                <Logo onClick={() => console.log('Home')}></Logo>
                <MenuItems items={menuItems} />
                <SearchBar onChange={value => console.log(value)} name="Dang nguyen" />
            </div>
        </div>
    );
}

export default NavBar;