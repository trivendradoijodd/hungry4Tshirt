import React, {Component} from 'react'

class App extends Component{
state = {
  var: "Hello World"
}
render(){
return(<div>{this.state.var}</div>)
}
}

ReactDOM.render(<App/>, document.getElementById("root"))
