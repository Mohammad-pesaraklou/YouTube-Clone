import React from 'react';
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
// icon
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// demo data
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constant";


const VideoCard = ({ video: { id: videoId, snippet } }) => {


    return (
        <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
            <Link to={videoId ? `/video/${videoId.videoId}` : demoVideoUrl}>
                <CardMedia >
                    <img src={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} />
                </CardMedia>
            </Link>
            <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
                <Link to={videoId ? `/video/${videoId.videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle2' fontWeight="bold" color="#fff">
                        {snippet?.title?.slice(0, 60) || demoChannelTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
                    <Typography variant="subtitle2" color="gray">
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px", mt: 2 }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card >
    );
};

export default VideoCard;