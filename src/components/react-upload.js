import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import 'next-file-to-base64';

const DEFAULT_ACCEPT = 'image/jpg,image/jpeg,image/png,image/gif';

export default class extends Component{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    multiple: PropTypes.bool,
    onChange: PropTypes.func,
    accept: PropTypes.string
  };

  static defaultProps = {
    name: 'file',
    multiple: true,
    onChange: noop,
    accept: DEFAULT_ACCEPT
  };
  /*===properties end===*/

  _onChange = inEvent => {
    const { onChange } = this.props;
    const value = inEvent.target.files;
    nx.filesToBase64(value).then(response=>{
      onChange({
        target: {
          value,
          dataURLs: response
        }
      });
    })
  };

  render(){
    const { className, onChange, ...props } = this.props;
    return (
      <input type="file" accept="" onChange={this._onChange} {...props}/>
    );
  }
}
