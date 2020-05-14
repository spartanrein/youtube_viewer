import React from 'react';
import SearchBar from "./components/SearchBar";

class App extends React.Component {

    onSubmit = (term) => {
        console.log(term);
    };

    render() {
        return (
            <div className="search-bar">
                <SearchBar onSubmit={this.onSubmit} onClick={this.onSubmit}/>
            </div>
        );
    };
}

export default App;
