import { Component } from "react";
class AppClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Vinay",
            age: 28,
        }
    }

    componentDidMount() {
        console.log("I Mounted!!");
    }

    render() {
        return(
            <div>
                <h1>I am {this.state.name}, my age is {this.state.age}, CLASS</h1>
                {/*USE SETSTATE FUNCTION in the Place for SETTERS(setAge, setName) */}
                <button onClick={(e) => {
                    //Use prevState as Parameter to get the most UP-TO-DATE Value in CLASS COMPONENTS
                    this.setState((prevState) => ({
                        name: prevState.name= "VC",
                        age: prevState.age + 100,
                    }))
                }}>Make me 100 Years Older</button>
            </div>
        )
    };
};

export default AppClass;