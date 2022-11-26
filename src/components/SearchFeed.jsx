import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
// icon
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// data
import { fetchData } from "../utils/FetchFromAPI";
// component
import Video from "./Video";

const SearchFeed = () => {
    const [videos, setVideo] = useState(null)
    const { searchTerm } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        fetchData(`search?part=snippet&q=${searchTerm}`)
            .then(data => setVideo(data.items))
    }, [searchTerm])


    return (
        <Box p={2} minHeight="95vh">
            <span>
                <ArrowBackIcon onClick={() => navigate(-1)} sx={{ color: 'white', cursor: 'pointer', fontSize: '30px', mb: 3, ml: { sm: "100px" } }} />
            </span>
            <Typography variant="h4" fontWeight={900} color="white" mb={3} ml={{ sm: "100px" }}>
                Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
            </Typography>
            <Box display="flex">
                <Box>
                    {videos && <Video videos={videos} />}
                </Box>
            </Box>
        </Box>
    );
};

export default SearchFeed;