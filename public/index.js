import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactUpload from '../src/main';
import './assets/style.scss';

const urls = [
  'https://randomuser.me/api/portraits/lego/1.jpg',
  'https://randomuser.me/api/portraits/lego/2.jpg',
  'https://randomuser.me/api/portraits/lego/3.jpg',
  'https://randomuser.me/api/portraits/lego/4.jpg',
  'https://randomuser.me/api/portraits/lego/5.jpg',
  'https://randomuser.me/api/portraits/lego/6.jpg',
  'https://randomuser.me/api/portraits/lego/7.jpg'
];

class App extends React.Component {
  state = {
    blobs: []
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ blobs: urls });
    }, 1200);
  }

  handleChange = (e) => {
    const blobs = e.target.value.map((item) => item.url);
    this.setState({ blobs });
  };

  handleError = (e) => {
    console.log('err:', e.target.value);
  };

  render() {
    const { blobs } = this.state;
    return (
      <ReactDemokit className="p-3 app-container" url="https://github.com/afeiship/react-upload">
        <ReactUpload
          maxCount={10}
          maxSize={1000000}
          multiple={true}
          onChange={this.handleChange}
          onError={this.handleError}
        />
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
