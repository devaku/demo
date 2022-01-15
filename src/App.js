import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div>
                <p>Number of button presses: {this.state.count}</p>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        );
    }

    handleClick() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1,
            };
        });
    }
}

export default App;
