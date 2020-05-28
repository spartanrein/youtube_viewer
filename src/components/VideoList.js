import React from "react";
import VideoItem from "./VideoItem";
import List from "@material-ui/core/List";

const VideoList = ({videos, onVideoSelect}) => {
    const renderedList = videos.map((video) => {
        return (
            <VideoItem
                key={video.id.videoId}
                video={video}
                onVideoSelect={onVideoSelect}/>
        );
    });

    return (
        <List>
            {renderedList}
        </List>
    );
};

export default VideoList;
