import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import nxFileToBase64 from '@feizheng/next-file-to-base64';

const CLASS_NAME = 'react-upload';
const DEFAULT_ACCEPT = 'image/jpg,image/jpeg,image/png,image/gif';

export default class ReactUpload extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * Name for upload.
     */
    name: PropTypes.string,
    /**
     * If is multiple.
     */
    multiple: PropTypes.bool,
    /**
     * Max size files.
     */
    max: PropTypes.number,
    /**
     * The change handler.
     */
    onChange: PropTypes.func,
    /**
     * Accept types.
     */
    accept: PropTypes.string
  };

  static defaultProps = {
    name: 'file',
    multiple: false,
    max: 10,
    onChange: noop
  };

  handleChange = (inEvent) => {
    const { max, onChange } = this.props;
    const value = inEvent.target.files;
    const files = nx.slice(value, 0, max);
    nxFileToBase64(value).then((response) => {
      onChange({
        target: {
          value: files,
          dataURLs: response
        }
      });
    });
  };

  render() {
    const { className, max, onChange, ...props } = this.props;
    return (
      <input
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        onChange={this.handleChange}
        type="file"
        {...props}
      />
    );
  }
}
