// this is the page that shows after items have been submitted
import React, { Component } from 'react';

function submitItems() {

}

class SubmitButton extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({ : event.target.value })
    }

    render() {
        return (
            <div>
                <button className="final_submit" onSubmit={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}