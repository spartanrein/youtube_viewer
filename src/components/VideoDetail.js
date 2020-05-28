import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    root: {},
    media: {
        width: 640,
        height: 480,
        marginLeft: "auto",
        marginRight: "auto",
    },
    title: {
        display: "flex",
        marginLeft: "auto",
        marginRight: "auto",
        width: 640,
    },
});

export default function VideoDetail({video}) {
    const classes = useStyles();
    if (!video) {
        return <Box>Loading...</Box>
    }
    const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    component="iframe"
                    src={videoSrc}
                >
                </CardMedia>
                <CardContent>
                    <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                        {video.snippet.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {video.snippet.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
