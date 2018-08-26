import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Textarea from 'react-textarea-autosize';

import './Note.css';


class Note extends Component {

  constructor(props) {
    super(props);

    //Initial state should not be editable
    this.state = {
      edit: false
    };

    this.handleEditBtn = this.handleEditBtn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
  }


  handleEditBtn() {
    this.setState( {edit: !this.state.edit} );
  }

  handleChange(event) {
    this.props.updateNote(this.props.index, event.target.value);
  }

  handleDeleteNote() {
    this.props.deleteNote(this.props.index);
  }

  //
  //Depending on state render either an editable textara
  //or the markdown it represents.
  //

  render() {
    //If currently edit is true load a check mark, else load a pencil icon.
    let editBtn = this.state.edit ?
      <i onClick={this.handleEditBtn} className="fa fa-check Note-edit-btn green"></i>:
      <i onClick={this.handleEditBtn} className="fa fa-pencil Note-edit-btn"></i>;

    //If edit is true load an editable textarea otherwise load the markdown.
    let textArea = this.state.edit ?
      <Textarea onChange={this.handleChange} value={this.props.markdown} className="Note-textarea"></Textarea>:
      <div onClick={this.handleEditBtn}><ReactMarkdown source={this.props.markdown} /></div>;

    return (
      <div className="Note-container">
        <div className="Note-edit-menu">
          {editBtn}
          <i onClick={this.handleDeleteNote} className="fa fa-times Note-edit-btn"></i>
        </div>
        <div className="Note">
          {textArea}
        </div>
      </div>
    );
  }
}

export default Note;
