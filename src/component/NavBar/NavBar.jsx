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

    const styles = {
        background: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 35,
            position: 'absolute',
            width: '100%'
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
                <Logo onClick={() => console.log("Home")}></Logo>
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