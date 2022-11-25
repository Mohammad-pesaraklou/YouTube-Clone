import React, { useState } from 'react';
import { IconButton, Paper } from '@mui/material';
// icons
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <Paper
            component="form"
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 }
            }}
        >
            <input
                className='search-bar'
                placeholder='Search...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} />
            <IconButton>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;