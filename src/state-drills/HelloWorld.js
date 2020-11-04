import React, { Component } from "react";

export default class HelloWorld extends Component{
    state ={
        who: 'World',
    };

    render(){
        return(
            <>
            <div className="HelloWorld">
                <p>Hello, {this.state.who}</p>
                <button onClick={() => this.setState({who: 'world'})}>World</button>
            </div>
            <button onClick ={() => this.setState({who: "friend"})}>
                Friend
            </button>
           
            <button onClick={() => this.setState({who: 'React'})}>React

            </button>
            </>

        )
    }
}