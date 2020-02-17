# react-upload
> Upload component for react.

## installation
```shell
npm install -S @feizheng/react-upload
```

## update
```shell
npm update @feizheng/react-upload
```

## properties
| Name      | Type   | Default | Description                           |
| --------- | ------ | ------- | ------------------------------------- |
| className | string | -       | The extended className for component. |
| name      | string | 'file'  | Name for upload.                      |
| multiple  | bool   | false   | If is multiple.                       |
| max       | number | 10      | Max size files.                       |
| onChange  | func   | noop    | The change handler.                   |
| accept    | string | -       | Accept types.                         |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-upload/dist/style.scss";

  // customize your styles:
  $react-upload-options: ()
  ```
2. import js
  ```js
  import ReactUpload from '@feizheng/react-upload';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    state = {
      dataURLs: []
    };

    handleChange = (e) => {
      this.setState({
        dataURLs: e.target.dataURLs
      });
    };

    render() {
      const { dataURLs } = this.state;
      return (
        <div className="app-container">
          <ReactUpload max={3} multiple={true} onChange={this.handleChange} />
          <div className="pic-list">
            {dataURLs.map((item, index) => {
              return <img key={index} src={item} />;
            })}
          </div>
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-upload/
