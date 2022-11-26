import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
// data
import { fetchData } from "../utils/FetchFromAPI";
// components
import ChannelCard from './ChannelCard';
import Video from './Video';

const ChannelDetails = () => {

    const [channelDetail, setChannelDetail] = useState();
    const [videos, setVideos] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const fetchResults = async () => {
            const data = await fetchData(`channels?part=snippet&id=${id}`);

            setChannelDetail(data?.items[0]);

            const videosData = await fetchData(`search?channelId=${id}&part=snippet%2Cid&order=date`);

            setVideos(videosData?.items);
        };

        fetchResults();
    }, [id]);

    return (
        <Box minHeight="95vh">
            <Box>
                <div style={{
                    height: '300px',
                    background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
                    zIndex: 10,
                }} />
                <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
            </Box>
            <Box p={2} display="flex">
                <Box />
                {
                    videos && <Video videos={videos} />
                }
            </Box>
        </Box>
    );
};


export default ChannelDetails;