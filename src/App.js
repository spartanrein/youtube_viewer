import React from 'react';
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import youtube from "./api/youtube";
import {Box} from "@material-ui/core";
import VideoDetail from "./components/VideoDetail";

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null,
    };

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({videos: response.data.items});
        console.log(this.state.videos);
    };

    onVideoSubmit = (video) => {
        this.setState({selectedVideo: video})
        console.log('From the App!', video)
        console.log('app state is', this.state.selectedVideo)
    };

    render() {
        return (
            <Box>
                <Box className="search-bar">
                    <SearchBar onSubmit={this.onTermSubmit} onClick={this.onTermSubmit}/>
                </Box>
                <Box>
                    <VideoDetail video={this.state.selectedVideo}/>
                    <VideoList className="video-list" videos={this.state.videos} onVideoSelect={this.onVideoSubmit}/>
                </Box>
            </Box>

        );
    };
}

export default App;
