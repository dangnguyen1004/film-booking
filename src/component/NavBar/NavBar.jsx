import React, { useEffect } from 'react';
import Logo from './Logo';
import MenuItems from './MenuItems';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { getCurrentUser } from '../../services/authService'


function NavBar({ onClickAllFilms, onClickNowPlaying, onClickUpComing, history }) {
    const [user, setUser] = useState()
    const menuItems = [
        { label: 'All movies', onClick: onClickAllFilms },
        { label: 'Now Playing', onClick: onClickNowPlaying },
        { label: 'Upcoming', onClick: onClickUpComing },
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

    const handleClickAvatar = () => {
        console.log('Click avatar ne')
        if (!user) {
            return history.push('/login')
            
        }
        history.push('/account')
    }

    const getUser = async () => {
        const result = await getCurrentUser()
        if (result)
            setUser(result.data)
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <div style={styles.background}>
            <div style={styles.container}>
                <Link style={{ textDecoration: 'none' }} to='/home'>
                    <Logo></Logo>
                </Link>
                <MenuItems items={menuItems} />
                <SearchBar
                    onClickAvatar={handleClickAvatar}
                    onChange={(value) => console.log(value)}
                    name={user ? user.name : 'Account'}
                    avatarUrl={user ? user.avatar : null}
                />
            </div>
        </div>
    );
}

export default NavBar;