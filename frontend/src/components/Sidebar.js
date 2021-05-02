import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    return (
      <div className='master-detail-element sidebar'>
        <NoteList onSelect={this.props.onSelect} notes={this.props.notes} />
        <button onClick={this.props.onNew} >New</button>
      </div>
    );
  }
}

export default Sidebar;
