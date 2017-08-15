import React, { Component } from 'react';
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
            selectedMargin: 'option1',
            userName: props.userName,
            selectedFontSize: 'option1',
            selectedFontStyle: 'option1',
            selectedBorder: 'option1',
            selectedPadding: 'option1'
        };
    }

    handleChange({ name, value }) {
        this.setState({
            [name]: value,
        });
    }


    render() {

        return (
            <div className="App">
                {largeHeader}
                <div className="editor">
                    <div>
            Hey there, {this.state.userName}
                    </div>

                    <div>
                        <h3>What's your name?</h3>
                        <label>
                            <input name="userName" value={this.state.userName} onChange={({ target }) => this.handleChange(target)} />
                        </label>
                        Let's play with some text below.
                        <h3>Message</h3>
                        <label>
                            <input name="message" value={this.state.message} onChange={({ target }) => this.handleChange(target)} />
                        </label>
                        <h3>Color</h3>
                        <label>
                            <input name="color" type="color" value={this.state.color} onChange={({ target }) => this.handleChange(target)} />
                        </label>
                    </div>


                    <div className="radioButtons">
                        <h3>Font Family </h3>
                        <label>
                            <input type="radio" name="selectedFont" value="Helvetica" checked={this.state.selectedFont === 'Helvetica'} onChange={({ target }) => this.handleChange(target)} />
                        Helvetica
                        </label>
                        <label>
                            <input type="radio" name="selectedFont" value="Papyrus" checked={this.state.selectedFont === 'Papyrus'} onChange={({ target }) => this.handleChange(target)} />
                        Papyrus
                        </label>
                    </div>
                    
                    <div className="radioButtons">
                        <h3>Font Size </h3>
                        <label>
                            <input type="radio" name="selectedFontSize" value="72px" checked={this.state.selectedFont === '72px'} onChange={({ target }) => this.handleChange(target)} />
                        Large
                        </label>
                        <label>
                            <input type="radio" name="selectedFontSize" value="12px" checked={this.state.selectedFont === '12px'} onChange={({ target }) => this.handleChange(target)} />
                        Small
                        </label>
                    </div>
                    
                    <div className="radioButtons">
                        <h3>Font Style</h3>
                        <label>
                            <input type="radio" name="selectedFontStyle" value="italic" checked={this.state.selectedFontStyle === 'italic'} onChange={({ target }) => this.handleChange(target)} />
                            Italic
                        </label>
                        <label>
                            <input type="radio" name="selectedFontStyle" value="normal" checked={this.state.selectedFontStyle === 'normal'} onChange={({ target }) => this.handleChange(target)} />
                            None
                        </label>
                    </div>

                    <div className="radioButtons">
                        <h3>Border</h3>
                        <label>
                            <input type="radio" name="selectedBorder" value="1px solid black" checked={this.state.selectedBorder === '1px solid black'} onChange={({ target }) => this.handleChange(target)} />
                            Thin
                        
                            <input type="radio" name="selectedBorder" value="5px dashed blue" checked={this.state.selectedBorder === '5px dashed blue'} onChange={({ target }) => this.handleChange(target)} />
                            Thick
                        
                            <input type="radio" name="selectedBorder" value="none" checked={this.state.selectedBorder === 'none'} onChange={({ target }) => this.handleChange(target)} />
                            None
                        </label>
                    </div>
                    
                    <div className="radioButtons">
                        <h3>Padding</h3>
                        <label>
                            <input type="radio" name="selectedPadding" value="200px" checked={this.state.selectedPadding === '200px'} onChange={({ target }) => this.handleChange(target)} />
                            Large
                        
                            <input type="radio" name="selectedPadding" value="20px" checked={this.state.selectedPadding === '20px'} onChange={({ target }) => this.handleChange(target)} />
                            Small
                        </label>
                    </div>

                    <div className="radioButtons">
                        <h3>Margin</h3>
                        <label>
                            <input type="radio" name="selectedMargin" value="300px" checked={this.state.selectedMargin === '300px'} onChange={({ target }) => this.handleChange(target)} />
                        Large
                        </label>
                        <label>
                            <input type="radio" name="selectedMargin" value="50px" checked={this.state.selectedMargin === '50px'} onChange={({ target }) => this.handleChange(target)} />
                        Small
                        </label>
                    </div>
                </div>

                <div className="display" style={{ 
                    color: this.state.color, 
                    fontFamily: this.state.selectedFont, 
                    margin: this.state.selectedMargin, 
                    fontSize: this.state.selectedFontSize, 
                    fontStyle:this.state.selectedFontStyle,
                    border: this.state.selectedBorder,
                    padding: this.state.selectedPadding }}>
                    {this.state.message}
                </div>
            </div>
        );
    }
}

export default App;
