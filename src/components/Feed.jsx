import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
// components
import Sidebar from '../components/Sidebar';
import Video from '../components/Video';
// data
import { fetchData } from '../utils/FetchFromAPI';

const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState('New')
    const [videos, setVideos] = useState([]);


    useEffect(() => {
        fetchData(`search?part=snippet&q=${selectedCategory}`)
            .then(data => setVideos(data.items))
        console.log(videos);
    }, [selectedCategory])


    return (
        <Stack sx={{ flexDirection: { xs: "column", md: 'row' } }}>
            <Box sx={{ height: { xs: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { xs: 0, md: 2 } }}>
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <Typography className="copyright" variant="body2" sx={{ mt: 2.5, color: "#fff", display: { xs: 'none', md: 'flex' } }}>
                    Project Created In 11/30/2022
                </Typography>
            </Box>
            <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
                    {selectedCategory} <span style={{ color: "#FC1503" }}>Videos</span>
                </Typography>
                <Video videos={videos} />
            </Box>
        </Stack>
    );
};

export default Feed;