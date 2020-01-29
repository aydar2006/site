import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

class Groups extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value:'',
      disabled:false,
    }
  }
  save = (event)=>{
    this.setState({value: event.target.value })
  }
  saved = () =>{
    this.setState({disabled:true})
  }
  stop = ( )=>{
    this.setState({disabled:false})
  }
  delete = ( )=>{
    this.setState({disabled:false,value:''})
  }
  render(){
    return(
      <div>
      <h1>{this.props.group}</h1>
      <Table variant="dark">
        <tr>
            <td>
            Surname
            </td>
            <td>
            Save
            </td>
            <td>
            Write
            </td>
            <td>
            Delete
            </td>
        </tr>
        <tr>
            <td>
          <input disabled={this.state.disabled} type="text" value={this.state.value}  onChange={this.save}  placeholder = "Surname"/>
            </td>
            <td>
          <Button  variant="success" onClick={this.saved}>Save</Button>
            </td>
            <td>
            <Button  variant="success" onClick={this.stop}>Write</Button>
            </td>
            <td>
            <Button  variant="success" onClick={this.delete}>Delete</Button>
            </td>
        </tr>
        </Table >
        </div>
    )
  }
}
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      students:[],
    }
  };
  add = () => {
    const group = prompt('name');
    this.setState(prevState => {
      prevState.students.push(group);
      return prevState
    })
  };
  render(){
    return(
      <div>
      <h1>
      Students
      </h1>
      <Button variant="warning" onClick={this.add}>Add student</Button>
      {this.state.students.map((v)=><Groups group={v} add={this.add}/>)}
      </div>
    );
  }
}
export default App;
