import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@jswork/noop';
import nxFileToBase64 from '@jswork/next-file-to-base64';
import NxObjectUrl from '@jswork/next-object-url';

const CLASS_NAME = 'react-upload';

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
    limit: PropTypes.number,
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
    limit: 10,
    onChange: noop
  };

  handleChange = (inEvent) => {
    const { max, onChange } = this.props;
    const value = inEvent.target.files;
    const files = nx.slice(value, 0, max);
    const blobs = files.map((file) => NxObjectUrl.create(file).url);
    inEvent.target.value = null;

    nxFileToBase64(value).then((dataURLs) => {
      onChange({
        target: {
          value: { files, blobs, dataURLs }
        }
      });
    });
  };

  render() {
    const { className, max, limit, onChange, ...props } = this.props;
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
