import React from 'react';
import Title from '../title/title'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        }
    }

    handleChange (e) {
        this.setState({name: e.target.value})
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.name}
                />
                <br/>
                <Title title={this.state.name}/>
            </div>
        )
    }
}

export default Search;