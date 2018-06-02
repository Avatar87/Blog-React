import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class UserPage extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    website:  PropTypes.string
  }

  renderProps = () => {
    const { name, username, email, phone, website } = this.props
    return [name, username, email, phone, website]
      .map((val, key) => <li key={key}>{val}</li>);
  };

  render() {
    return (
      <Fragment>
        <ul className="UserPage">
          {this.renderProps()}
        </ul>
      </Fragment>
    );
  }
}
