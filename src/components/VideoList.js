import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
    const video = props.videos.map((video) => {
        return (
            <VideoItem key={video.id.videoId} video={video}/>
        );
    });

    return (
        <div>{video}</div>
    );
};

export default VideoList;
