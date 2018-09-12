import React, { Component } from 'react';
import ListItem from './ListItem.js';
import PlayComp from './PlayComp/PlayComp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      currentText: '',
    }
  }

  componentDidMount() {
    const MyObj = JSON.parse(localStorage.getItem('MyObj'));
    this.setState({
      toDoList: MyObj,

    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const toDoArr = this.state.toDoList.slice();
    toDoArr.push(this.state.currentText);
    this.setState({
      toDoList: toDoArr,
      currentText: ''
    });
    const stringArray = JSON.stringify(toDoArr);
    localStorage.setItem('MyObj', stringArray);
    console.log(stringArray);
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
    const stringArray = JSON.stringify(toDoList);
    localStorage.setItem('MyObj', stringArray);
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
        <PlayComp />
      </div>
    );
  }
}

export default App;
