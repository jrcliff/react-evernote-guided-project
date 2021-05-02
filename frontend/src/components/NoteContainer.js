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

  saveNotes = note => {
    Adapter.patchNote(note)
      .then(res => {
        this.loadNotes();
        this.setState({ selectedNote: res });
      })
  }

  handleSearchChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  filteredNotes = () => {
    return this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.search.toLowerCase()));
  }

  createNote = () => {
    Adapter.postNote('New Note', '')
      .then(res => {
        const notes = [...this.state.notes, res];
        this.setState({ notes });
      })
  }


  render() {
    return (
      <Fragment>
        <Search 
          value={this.state.search}
          onChange={this.handleSearchChange}
        />
        <div className='container'>
          <Sidebar 
            notes={this.filteredNotes()}  
            onSelect={this.handleSelectNote}
            onNew={this.createNote}
          />
          <Content 
            note={this.state.selectedNote}
            onSave={this.saveNotes }
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
