import React, { Component } from 'react';

import Note from './Note';

import './Notes.css';

class Notes extends Component {

  //
  //Render all notes in props.notes
  //Render padding at the bottom of
  //the page for floating button
  //

  render() {
    return (
      <div className="Notes">
        {this.props.notes.map( (note, i) => {
          return (
            <Note
              deleteNote={this.props.deleteNote}
              updateNote={this.props.updateNote}
              markdown={note.content}
              index={i} key={i}
                />
          )
        })}

        <div className="Notes-pad-end"></div>
      </div>
    )
  }
}

export default Notes;
