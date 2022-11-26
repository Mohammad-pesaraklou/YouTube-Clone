import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { Typography, Box, Stack } from "@mui/material";
// icon
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// component
import Video from "./Video";
// data
import { fetchData } from "../utils/FetchFromAPI";
const VideoDetails = () => {

    const [videoDetail, setVideoDetail] = useState(null);
    const [videos, setVideos] = useState(null);

    const { id } = useParams();



    // const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

    useEffect(() => {
        fetchData(`videos?part=snippet,statistics&id=${id}`)
            .then(data => setVideoDetail(data.items[0]))

        fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then(data => setVideos(data.items))
    }, [id])



    return (
        <Box minHeight="95vh">
            <Stack direction={{ xs: 'column', md: 'row' }}>
                <Box flex={1}>
                    <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
                        <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                            {videoDetail?.snippet?.title}
                        </Typography>
                        <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
                            <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                                <Typography variant={{ sm: "subtitle1", md: 'h6' }} color="#fff" >
                                    {videoDetail?.snippet?.channelTitle}
                                    <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                                </Typography>
                            </Link>
                            <Stack direction="row" gap="20px" alignItems="center">
                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                    {parseInt(videoDetail?.snippet?.viewCount).toLocaleString()} views
                                </Typography>
                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                    {parseInt(videoDetail?.snippet?.likeCount).toLocaleString()} likes
                                </Typography>
                            </Stack>
                        </Stack>
                        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
                            {videos && <Video videos={videos} direction="column" />}
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </Box>
    );
};

export default VideoDetails;