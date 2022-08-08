import React, { Component } from 'react';
import './App.css';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      name: ''
    };
  }

  onInput = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  addItem = () => {
    const { list, name } = this.state;
    this.setState({
      list: [...list, name]
    });
    document.getElementById('textArea').value = '';
  }

  remove = (index) => {
    const { list, name} = this.state;
    this.setState({
      list: [...list.slice(0, index), ...list.slice(index + 1)]
    });
  }

  render() {
    const { list } = this.state;

    return (<div id="content">
      <div id="inputfield">
        <input className='textArea' id="textArea" type="text" onInput={this.onInput}></input>
        <button className='addButton' onClick={this.addItem}>追加</button>
      </div>
      <div id="list">
        {list.map((item, index) =>
          <div key={index} className="itemLine">
            <button className="removeButton"
             onClick={() => {this.remove(index)}}>X</button>
            <div className="item">{item}</div>
          </div>
        )}
      </div>
    </div>)
  }

}

