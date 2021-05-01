import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {
  state = {
    edit: false,
    note: {}
  }

  static getDerivedStateFromProps(props, state) {
    if (state.note.id !== props.note.id) {
      return {
        edit: false,
        note: props.note,
      }
    }
    return state;
  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  }

  renderContent = () => {
    if (this.state.edit) {
      return <NoteEditor
        note={this.props.note}
        onCancel={this.toggleEdit}
       />;
    } else if (this.state.note.id) {
      return <NoteViewer 
        note={this.props.note}
        onEdit={this.toggleEdit}
      />;
    } else {
      return <Instructions />;
    }
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
