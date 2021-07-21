import React from 'react';
import AvatarBox from './AvatarBox';
import SearchBox from './SearchBox'


function SearchBar({onChange, name}) {
    return (
        <div style={{display: 'flex'}}>
            <SearchBox onChange={onChange}/>
            <AvatarBox name={name}/>
        </div>
    );
}

export default SearchBar;