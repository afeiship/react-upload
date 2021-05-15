import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactUpload from '../src/main';
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
    console.log('e.value:', e.target.value);
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
