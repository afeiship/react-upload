import './dev.scss';
import ReactUpload from './main';

/*===example start===*/

// install: npm install afeiship/react-upload --save
// import : import ReactUpload from 'react-upload'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = e =>{
    console.log(e.target.value);
  };

  render(){
    return (
      <div className="hello-react-upload">
        <ReactUpload ref='rc' onChange={this._onChange} />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
