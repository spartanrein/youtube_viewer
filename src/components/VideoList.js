import React from "react";
import VideoItem from "./VideoItem";
import List from "@material-ui/core/List";

const VideoList = (props) => {
    const video = props.videos.map((video) => {
        return (
            <VideoItem key={video.id.videoId} video={video}/>
        );
    });

    return (
        <List>
            {video}
        </List>
    );
};

export default VideoList;
