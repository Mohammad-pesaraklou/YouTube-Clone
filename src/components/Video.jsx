import { Box, CircularProgress, Stack } from '@mui/material';
import React from 'react';
// components
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Video = ({ videos, direction }) => {

    if (!videos.length) return <CircularProgress color='error'/>

    return (
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="center" alignItems="start" gap={2}>
            {videos.map((item, index) => (
                <Box key={index}>
                    {
                        item?.id.videoId && <VideoCard video={item} />
                    }
                    {
                        item?.id.channelId && <ChannelCard channelDetail={item} />
                    }
                </Box>
            ))}
        </Stack>
    );
};

export default Video;