import React, { Component } from 'react';
import Items from './Items';

function searchingFor(search) {
    return function (x) {
        return x.title.toLowerCase().includes(search.toLowerCase()) || !search;
    }
}

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: " "
        }

        this.searchItem = this.searchItem.bind(this)
    }

    searchItem(event) {
        this.setState({ search: event.target.value })
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text"
                        placeholder="Search an Item"
                        onChange={this.searchItem} />
                </form>
                {this.state.itemData.filter(searchingFor(this.state.search)).map(item =>
                    <Items />
                )}
            </div>
        );
    }
}

export default Filter;