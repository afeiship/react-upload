# react-upload
> Upload component for react

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
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
  
```

## install && import:
```bash
npm install --save afeiship/react-upload --registry=https://registry.npm.taobao.org
```

```js
import ReactUpload from 'react-upload';
```

```scss
// customize your styles:
$react-upload-options:(
);

@import 'node_modules/react-upload/dist/style.scss';
```


## usage:
```jsx

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
        <ReactUpload ref='rc' onChange={this._onChange} />
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

```
