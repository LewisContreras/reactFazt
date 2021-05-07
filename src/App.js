import React from 'react';
import './App.css';

// function Helloworld(props) {
//   return (
//     <div id="hello">{props.myText}</div>
//   )
// }

class Helloworld extends React.Component{

  state ={
    show: true
  }

  toggleShow = ()=>{
    this.setState({show: !this.state.show})
  }

  render(){
    if(this.state.show){
      return (
        <div id="hello">
          <h3>{this.props.myText}</h3>
          <button onClick={this.toggleShow} >Toggle show</button>
        </div>
        
      )
    }else{
      return <h1>
        There are no elements
        <button onClick={this.toggleShow}>Toggle show</button>
        </h1>
    }
    
  }
}

function App() {
  return (
    <div>This is my component: 
      <Helloworld myText="Hello worldcito"/> <Helloworld myText="Holaaaaa"/> 
    </div>
  );
}

export default App;
