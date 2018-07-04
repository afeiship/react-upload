import './dev.scss';
import ReactUpload from './main';

/*===example start===*/

// install: npm install afeiship/react-upload --save
// import : import ReactUpload from 'react-upload'

class App extends React.Component{
  state = {
    dataURLs:[]
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = e =>{
    console.log(e.target);
    this.setState({
      dataURLs: e.target.dataURLs
    })
  };

  render(){
    const { dataURLs } = this.state;
    return (
      <div className="hello-react-upload">
        <ReactUpload ref='rc' multiple={false} onChange={this._onChange} />
        <div className="pic-list">
          {
            dataURLs.map((item, index) => {
              return (
                <img key={index} src={item} />
              )
            })
          }
        </div>
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
