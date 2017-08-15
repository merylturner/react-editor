import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const largeHeader = <h1>Welcome to React Editor</h1>;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Lewis the Pup',
            message: props.initialMessage,
            color: '#7109AA',
            margin: '100px',
            selectedFont: 'option1',
            selectedMargin: 'option1'
        };
    }

    handleChange({ name, value }) {
        this.setState({
            [name]: value,
        });
    }

    handleOptionChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
    }

    render() {

        return (
            <div className="App">
                {largeHeader}
                <div>
                    <div>
            Hey {this.state.name}
                    </div>
                    <div>
                        <label>
                            <h3>Message </h3>
                            <input name="message" value={this.state.message} onChange={({ target }) => this.handleChange(target)} />
                        </label>
                        <label>
                            <h3>Color</h3>
                            <input name="color" type="color" value={this.state.color} onChange={({ target }) => this.handleChange(target)} />
                        </label>
                    </div>
                    <div>
                        <label>
                            <h3>Margin</h3>
                            <input type="radio" name="selectedMargin" value="300px" checked={this.state.selectedMargin === '300px'} onChange={({ target }) => this.handleChange(target)} />
                        Large
                        </label>
                        <label>
                            <input type="radio" name="selectedMargin" value="100px" checked={this.state.selectedMargin === '100px'} onChange={({ target }) => this.handleChange(target)} />
                        Small
                        </label>
                    </div>
                    <div className="radioButtons">
                        <label>
                            <h3>Font Family </h3>
                            <input type="radio" name="selectedFont" value="Arial" checked={this.state.selectedFont === 'Arial'} onChange={({ target }) => this.handleChange(target)} />
                        Sans Serif
                        </label>
                        <label>
                            <input type="radio" name="selectedFont" value="Times" checked={this.state.selectedFont === 'Times'} onChange={({ target }) => this.handleChange(target)} />
                        Serif
                        </label>
                    </div>
                </div>
                <div className="display" style={{ color: this.state.color, fontFamily: this.state.selectedFont, margin: this.state.selectedMargin }}>
                    {this.state.message}
                </div>
            </div>
        );
    }
}

export default App;
