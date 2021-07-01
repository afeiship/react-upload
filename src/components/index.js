import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@jswork/noop';
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
     * The max size of the file.
     */
    maxSize: PropTypes.number,
    /**
     * Max size files count.
     */
    maxCount: PropTypes.number,
    /**
     * The change handler.
     */
    onChange: PropTypes.func,
    /**
     * The error handle when validate failed.
     */
    onError: PropTypes.func
  };

  static defaultProps = {
    name: 'file',
    multiple: false,
    maxSize: 1e10,
    maxCount: 1e3,
    onChange: noop,
    onError: noop
  };

  validate = (inValue) => {
    const { maxCount, maxSize, onError } = this.props;
    const len = inValue.length;
    if (len > maxCount) {
      const target = { value: 'count' };
      onError({ target });
      return false;
    }

    for (let i = 0; i < len; i++) {
      const { file } = inValue[i];
      if (file.size > maxSize) {
        const target = { value: 'size' };
        onError({ target });
        return false;
      }
    }

    return true;
  };

  handleChange = (inEvent) => {
    const { onChange } = this.props;
    const files = nx.slice(inEvent.target.files);
    const value = files.map((file) => {
      const { url } = NxObjectUrl.create(file);
      return { file, url };
    });

    this.validate(value) && onChange({ target: { value } });
    // force trigger change every time
    inEvent.target.value = '';
  };

  render() {
    const { type, className, maxCount, maxSize, onChange, onError, ...props } = this.props;
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
