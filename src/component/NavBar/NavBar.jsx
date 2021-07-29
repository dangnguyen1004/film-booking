import React from 'react';
import Logo from './Logo';
import MenuItems from './MenuItems';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom'


function NavBar(props) {
    const menuItems = [
        { label: 'All movies', onClick: () => console.log('All Movies') },
        { label: 'Trending now', onClick: () => console.log('Trending now') },
        { label: 'Upcoming', onClick: () => console.log('Upcoming') },
    ]

    const styles = {
        background: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 35,
            position: 'fixed',
            width: '100%',
            zIndex: 10,
        },
        container: {
            display: "flex",
            justifyContent: "space-between",
            width: '100%',
            maxWidth: 1216
        }
    }

    return (
        <div style={styles.background}>
            <div style={styles.container}>
                <Link style={{textDecoration: 'none'}} to='/home'>
                    <Logo></Logo>
                </Link>
                <MenuItems items={menuItems} />
                <SearchBar
                    onChange={(value) => console.log(value)}
                    name="Dang nguyen"
                />
            </div>
        </div>
    );
}

export default NavBar;