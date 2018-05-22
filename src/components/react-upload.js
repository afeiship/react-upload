import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends Component{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    multiple: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    name: 'file',
    multiple: true,
    onChange: noop
  };
  /*===properties end===*/

  _onChange = inEvent => {
    const { onChange } = this.props;
    const value = inEvent.target.files;
    onChange({ target: { value } });
  };

  render(){
    const { className, onChange, ...props } = this.props;
    return (
      <input type="file" onChange={this._onChange} {...props}/>
    );
  }
}
