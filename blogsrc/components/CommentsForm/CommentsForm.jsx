import './CommentsForm.scss';

import React, { PureComponent } from 'react';

import { Form, FormGroup, Label, FormText } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import classNames from 'classnames';

export default class Comments extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      text: '',
      touched1: false,
      touched2: false
    }
  }

  handlePropertyChange = (propertyName) => (event) => {
  if (propertyName == 'name') {
      this.setState({
      [propertyName]: event.target.value,    
      touched1: true,
    });
    }
  else if (propertyName == 'text') {
      this.setState({
      [propertyName]: event.target.value,    
      touched2: true,
    });
    }
  }

  handleSendClick = (event) => {
    const { onSend } = this.props;
    const state = this.state;

    if(typeof onSend === 'function') {
      onSend(this.state);
      this.setState({ name: '', text: '', touched1: false, touched2: false});
      if (state.name.trim().length === 0) {this.setState({touched1: true});}
      if (state.text.trim().length === 0) {this.setState({touched2: true});}
    }
    event.preventDefault();
  }

  render () {
    const { name, text, touched1, touched2 } = this.state;

    const inputClass = classNames({
      'input--error' : name.trim().length === 0 && touched1,
    });

    const inputClass2 = classNames({
      'input--error' : text.trim().length === 0 && touched2,
      'form-control' : true
    });

    return (  
        <div className = 'card my-4'>
          <h5 className='card-header'>Leave a Comment:</h5>
          <div className = 'card-body'>
            <form>
              <div className = 'form-group'>
                <Input placeholder="name" className = {inputClass} id = "name" onChange={this.handlePropertyChange('name')} value={name}/><br/>
                <textarea placeholder="commentary" className = {inputClass2} id = "text" rows="3" onChange={this.handlePropertyChange('text')} value={text} /><br/>
                <button type="submit" className='btn btn-primary' onClick={this.handleSendClick}>Submit</button>
              </div>
            </form>
          </div>
        </div>
    );
  } 
}