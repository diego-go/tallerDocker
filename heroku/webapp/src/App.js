import React, { Component } from 'react';

import Notes from './Components/Notes';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      notes:  JSON.parse(window.localStorage.getItem('notes'))
    };

    this.deleteNote = this.deleteNote.bind(this);
    this.addNote = this.addNote.bind(this);
    this.updateNote = this.updateNote.bind(this);

  }

  //Remove the note at index and update state and browser local storage
  deleteNote(index) {
    let notesNew = this.state.notes.filter((_, i) => i !== index)
    this.setState({ notes: notesNew })
    window.localStorage.setItem('notes', JSON.stringify(notesNew) );
  }

  //Update the note at index with the value of input
  //then update the state and local storage.
  updateNote(index, input) {
    let notesNew = this.state.notes.slice(0);
    notesNew[index] = {content: input};
    this.setState({ notes: notesNew })
    window.localStorage.setItem('notes', JSON.stringify(notesNew) );
  }

  //Add a new note to the note state array and update.
  addNote() {
    let notesNew = [{content:"# New Note! \n Click to edit"}].concat(this.state.notes);
    this.setState({ notes: notesNew })
    window.localStorage.setItem('notes', JSON.stringify(notesNew) );
  }


  render() {
    return (
      <div className="App">
        <Notes notes={this.state.notes} deleteNote={this.deleteNote} updateNote={this.updateNote} />
        <a href="#" onClick={this.addNote} className="App-new-note" >+</a>
      </div>
    )
  }
}

export default App;
