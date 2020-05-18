import React from 'react';
import SearchBar from "./components/SearchBar";
import youtube from "./api/youtube";

class App extends React.Component {

    state = {videos: []};

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
            <div className="search-bar">
                <SearchBar onSubmit={this.onTermSubmit} onClick={this.onTermSubmit}/>
            </div>
        );
    };
}

export default App;
