import React from 'react';
import AvatarBox from './AvatarBox';
import SearchBox from './SearchBox'


function SearchBar({onChange, name, avatarUrl, onClickAvatar}) {
    return (
        <div style={{display: 'flex'}}>
            <SearchBox onChange={onChange}/>
            <AvatarBox name={name} avatarUrl={avatarUrl} onClick={onClickAvatar}/>
        </div>
    );
}

export default SearchBar;