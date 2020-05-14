import React from 'react';
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import SearchIcon from '@material-ui/icons/Search';
import OutlinedInput from "@material-ui/core/OutlinedInput";

class SearchBar extends React.Component {
    state = {term: ""};

    SearchButton = <Button
        onClick={(event => this.handleClick(event))}
        variant="contained"
        color="primary"
        startIcon={<SearchIcon/>}>
        Save
    </Button>;

    OutlinedInput = <OutlinedInput
        fullWidth
        id="outlined-basic"
        placeholder="Search for youtube videos..."
        variant="outlined"
        endAdornment={<InputAdornment position="end">{this.SearchButton}</InputAdornment>}
        onChange={(event => this.setState({term: event.target.value}))}
    />;


    handleClick = () => {
        this.props.onClick(this.state.term);
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <form className="search-form" onSubmit={this.onFormSubmit}>
                {this.OutlinedInput}
            </form>

        );
    }
}

export default SearchBar;

