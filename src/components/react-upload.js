import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import 'next-file-to-base64';
import waterMark from 'watermarkjs';

const DEFAULT_ACCEPT = 'image/jpg,image/jpeg,image/png,image/gif';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    watermark: PropTypes.object,
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

  addWatermark(inFile) {
    const { watermark } = this.props;
    return new Promise((resolve) => {
      waterMark([inFile, watermark.src]).dataUrl(watermark.callback).then(response => {
        resolve(response);
      });
    });
  }

  _onChange = inEvent => {
    const { onChange, watermark } = this.props;
    const value = inEvent.target.files;
    const files = nx.slice(value);
    if (watermark) {
      const apis = files.map(file => this.addWatermark(file));
      return Promise.all(apis).then(response => {
        onChange({
          target: {
            value,
            dataURLs: response
          }
        });
      })
    } else {
      nx.filesToBase64(value).then(response => {
        onChange({
          target: {
            value,
            dataURLs: response
          }
        });
      })
    }
  };

  render() {
    const { className, onChange, ...props } = this.props;
    return (
      <input type="file" onChange={this._onChange} {...props} />
    );
  }
}
