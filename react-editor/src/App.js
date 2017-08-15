import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const largeHeader = <h1>Welcome to React Editor</h1>;
const smallHeader = <h3>React is pretty sweet</h3>;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Brah',
            message: props.initialMessage
        };
    }

    handleChange(value) {
        this.setState({
            name: value,
        });
    }

    render() {

        const header = this.state.message.length > 15 ? largeHeader : smallHeader;
        return (
            <div>
              {header}
                <div className="App">
          Hey {this.state.name}
                </div>
                <div>
                    <input value={this.state.name} onChange={({target}) => this.handleChange(target.value)}/>
                </div>
            </div>
        );
    }
}

export default App;
