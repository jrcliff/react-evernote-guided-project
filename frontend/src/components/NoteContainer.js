import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';
import Adapter from '../Adapter'

class NoteContainer extends Component {
  state = {
    notes: [],
    selectedNote: {},
    search: ''
  }
  componentDidMount(){
    this.loadNotes();
  }
  loadNotes = () => {
    Adapter.getNotes()
      .then(res => this.setState({ notes: [...res] }))
  }

  handleSelectNote = (id) => {
    const selectedNote = this.state.notes.find(note => note.id === id);
    this.setState({ selectedNote });
  }

  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar 
            notes={this.state.notes}  
            onSelect={this.handleSelectNote}
          />
          <Content 
            note={this.state.selectedNote}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
