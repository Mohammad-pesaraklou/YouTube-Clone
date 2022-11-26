import React, { useState } from 'react';
import { IconButton, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom'
// icons
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`)
        }
    }

    return (
        <Paper
            onSubmit={submitHandler}
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
                <SearchIcon sx={{ color: '#FC1503' }} />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;