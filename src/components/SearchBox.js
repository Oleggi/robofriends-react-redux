import React from 'react';

const SearchBox = ({ searchChange }) => {
    return(
        <div className="pa2">
            <input
            className="pa3 ba b--blue bg-lightest-blue"
             type="search" 
             placeholder="sarch robots"
             onChange= {searchChange}
             />
        </div>
            
    );
}

export default SearchBox;