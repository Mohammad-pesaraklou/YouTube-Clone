import React from 'react';
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
// components
import SearchBar from "../components/SearchBar";

// logo
import { logo } from "../utils/constant";
const Navbar = () => {
    return (
        <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
            <Link style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="YT_LOGO" height={45} />
            </Link>
            <SearchBar />
        </Stack>
    );
};

export default Navbar;