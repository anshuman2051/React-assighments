//todo: fix two way binding bw onclick delete and input field
import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './components/ValidationComponent' ;
import CharComponent from './components/CharComponent';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {val: "anshuman"};
  }

  handleTextChange = (evt)=>{
    this.setState({val: evt.target.value});
  }

  deleteComp = (evt, v)=>{
    evt.target.style.display = "none";
  }

  render() {
    
    return (
      <div className="App">
        <input type="text" onChange={this.handleTextChange} value={this.state.val}/>
        <p>
          {this.state.val.length}
        </p>
        <ValidationComponent txt={this.state.val}/>

        <ul style={{listStyleType:"none",display:"inline-flex"}}>
          {
            this.state.val.split('').map(
              (v, index)=> {
                return (
                  <li key={index} onClick={(evt, v)=>this.deleteComp(evt, v)}><CharComponent txt={v}/></li>
                  );
              }
            )  
          }
        </ul>
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
