import './CommentsForm.scss';

import React, { PureComponent } from 'react';

import { Form, FormGroup, Label, FormText } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

export default class Comments extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      text: '',
    }
  }

  handlePropertyChange = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value
    });
  }

  handleSendClick = (event) => {
    const { onSend } = this.props;

    if(typeof onSend === 'function') {
      onSend(this.state);

      this.setState({ name: '', text: '' });
    }
    event.preventDefault();
  }

  render () {
    const { name, text } = this.state;

    return (
      
        <div className = {'card my-4'}>
          <h5 className={'card-header'}>Leave a Comment:</h5>
          <div className = {'card-body'}>
            <form>
              <div className = {'form-group'}>
                <Input placeholder="name" id = "name" onChange={this.handlePropertyChange('name')} value={name}/><br/>
                <textarea placeholder="commentary" id = "text" className={'form-control'} rows="3" onChange={this.handlePropertyChange('text', 'style')} value={text} /><br/>
                <button type="submit" className={'btn btn-primary'} onClick={this.handleSendClick}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      

        
      
    );
  } 
}