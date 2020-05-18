import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const VideoItem = ({video}) => {

    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <img alt="Remy Sharp" src={video.snippet.thumbnails.default.url}/>
            </ListItemAvatar>
            <ListItemText
                primary={video.snippet.title}
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            // className={classes.inline}
                            color="textPrimary"
                        >
                            Ali Connors
                        </Typography>
                        {video.snippet.description}
                    </React.Fragment>
                }
            />
        </ListItem>

    );
};

export default VideoItem
