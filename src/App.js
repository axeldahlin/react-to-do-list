import React, { Component } from 'react';
import ListItem from './ListItem.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      currentText: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const toDoArr = this.state.toDoList.slice();
    toDoArr.push(this.state.currentText);
    this.setState({
      toDoList: toDoArr,
      currentText: ''
    });
  }

  submitChangeHandler = (e) => {
    const text = e.target.value;
    this.setState({currentText: text});
  }

  deleteItemHandler = (index) => {
    const toDoList = this.state.toDoList.slice();
    toDoList.splice(index, 1);
    console.log('hey');
    this.setState({
      toDoList: toDoList,
    });
  }

  render() {

    const listItems = this.state.toDoList.map((text, index) => {
      return <ListItem text={text} key={index} clicked={(index) => this.deleteItemHandler()}/>
    });

    return (
      <div className="container">
        <h1>to-do-list({this.state.toDoList.length})</h1>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input 
            type="text"
            onChange={(e) => this.submitChangeHandler(e)}
            value={this.state.currentText}
            />
        </form>
        {listItems}
      </div>
    );
  }
}

export default App;
