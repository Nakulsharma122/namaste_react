
import UserClass from "./Userclass";
import React  from "react";

class About extends React.Component{
    constructor (prop){
    super(prop);
    console.log("Parent constructor");
    }

    componentDidMount(){
        console.log("Parent Component Did Mount");
    }
    render() {
        console.log("Parent render");
        return (
        <div>
            <h1>About</h1>
            <h3>This is Namaste React written by Nakul Sharma</h3>
            <UserClass name={"First"} location={"Mathura"}/>
            <UserClass name={"Second"} location={"Agra"}/>
        </div>
        );
    }
}

export default About ;