import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
    }
    this.remove = this.remove.bind(this)
    this.edit = this.edit.bind(this)
    this.save = this.save.bind(this)
    this.renderEdit = this.renderEdit.bind(this)
   



  }

  remove() {
    alert('removing to-do')

  }

  edit() {
    this.setState({
      editing: true
    })
  }

  save() {
    alert('is saving')
  }

  renderEdit(){
    return (
      <div className="to-do">
        <input></input>
        <div className="btn-div">
          <button className="save-btn"onClick={this.save}>Save</button>

        </div>
      </div>
    );
  }

  renderDisplay() {
    return (
      <div className="to-do">
        <p>Detta är en Item</p>
        <div className="btn-div">
          <button onClick={this.remove}>Remove</button>
          <button onClick={this.edit}>Edit</button>
        </div>
      </div>
    );
  }


 
  render() {
    if (this.state.editing) {
      return this.renderEdit()
    } else {
      return this.renderDisplay()

    }

    
  }
}




export default Item;