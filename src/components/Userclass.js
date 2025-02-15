import React  from "react";
class UserClass extends React.Component{
  constructor (props){
    super (props); 
    this.state ={
        count : 0
    }
    console.log(this.props.name+"Child Constructor");

  }

  componentDidMount(){
    console.log(this.props.name+"Child Components Did Mount");
  }
  render (){
    
    const{name ,location} = this.props;
    const {count} = this.state;
    console.log(name+"render");
    return (
        <div className="user-card">
            <h1>Count:{count}</h1>
            <button onClick={()=>{
                this.setState({
                    count : this.state.count +1,
                })
            }}>Count Increase
            </button>
            <h2>Name:{name}</h2>
            <h2>Location:{location}</h2>
        </div>
    )
  }
}

export default UserClass;