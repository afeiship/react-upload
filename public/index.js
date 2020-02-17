import ReactUpload from '../src/main';
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
