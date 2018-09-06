import React, { Component } from 'react';
import Item from './Item';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
   
    }
  }
  render() {
    return (
      <div className="container">
      <h1>to-do-list(0)</h1>
        <Item />
        <Item />
        <Item />
        <Item />
     
     </div>
    );
  }
}

export default App;
