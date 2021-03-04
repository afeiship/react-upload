# react-upload
> Upload component for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-upload
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| name      | string | false    | 'file'  | Name for upload.                      |
| multiple  | bool   | false    | false   | If is multiple.                       |
| limit     | number | false    | 10      | Max size files.                       |
| onChange  | func   | false    | noop    | The change handler.                   |
| accept    | string | false    | -       | Accept types.                         |


## usage
1. import css
  ```scss
  @import "~@jswork/react-upload/dist/style.css";

  // or use sass
  @import "~@jswork/react-upload/dist/style.scss";

  // customize your styles:
  $react-upload-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactUpload from '@jswork/react-upload';
  import './assets/style.scss';

  class App extends React.Component {
    state = {
      blobs: [
        'https://randomuser.me/api/portraits/lego/1.jpg',
        'https://randomuser.me/api/portraits/lego/2.jpg',
        'https://randomuser.me/api/portraits/lego/3.jpg',
        'https://randomuser.me/api/portraits/lego/4.jpg',
        'https://randomuser.me/api/portraits/lego/5.jpg',
        'https://randomuser.me/api/portraits/lego/6.jpg',
        'https://randomuser.me/api/portraits/lego/7.jpg'
      ]
    };

    handleChange = (e) => {
      this.setState({
        blobs: e.target.value.blobs
      });
    };

    render() {
      const { blobs } = this.state;
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-upload">
          <ReactUpload limit={7} multiple={true} onChange={this.handleChange} />
          <div className="pic-list">
            {blobs.map((item, index) => {
              return <img key={index} src={item} />;
            })}
          </div>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-upload/


## license
Code released under [the MIT license](https://github.com/afeiship/react-upload/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-upload
[version-url]: https://npmjs.org/package/@jswork/react-upload

[license-image]: https://img.shields.io/npm/l/@jswork/react-upload
[license-url]: https://github.com/afeiship/react-upload/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-upload
[size-url]: https://github.com/afeiship/react-upload/blob/master/dist/react-upload.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-upload
[download-url]: https://www.npmjs.com/package/@jswork/react-upload
