import React from 'react';
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import youtube from "./api/youtube";

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

    render() {
        return (
            <div>
                <div className="search-bar">
                    <SearchBar onSubmit={this.onTermSubmit} onClick={this.onTermSubmit}/>
                </div>
                <div className="video-list">
                    <VideoList videos={this.state.videos}>Hello</VideoList>
                </div>
            </div>

        );
    };
}

export default App;
