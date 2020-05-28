import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    root: {
        // display: "flex",
        // alignItems: "flex-start",
    },
    img: {
        // maxWidth: "180px",
    },
    listItemText: {}
});

export default function VideoItem({video, onVideoSelect}) {
    const classes = useStyles(video);
    return (
        <Box>
            <ListItem className={classes.root} onClick={() => onVideoSelect(video)}>
                <ListItemAvatar className={classes.img}>
                    <img alt="Remy Sharp" src={video.snippet.thumbnails.default.url}/>
                </ListItemAvatar>
                <ListItemText
                    primary={video.snippet.title}
                    // secondary={video.snippet.description}
                />
            </ListItem>
            <Divider/>
        </Box>
    );
};


