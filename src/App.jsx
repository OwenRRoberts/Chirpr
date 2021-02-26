import React, { Component } from 'react';
import Submit from './Submit';
import Timeline from './Timeline';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newUser: "",
            newMessage: "",
            chirps: [
                {
                    name: "Shelby",
                    message: "Gimme all the books"
                },
                {
                    name: "Kristen",
                    message: "Gozer!  No, bad kitty."
                },
                {
                    name: "David",
                    message: "LET'S GOOOOOOO!"
                }
            ]
        }

        this.newUser = this.newUser.bind(this);
        this.newMessage = this.newMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    newUser(e) {
        this.setState({ newUser: e.target.value });
    }
    newMessage(e) {
        this.setState({ newMessage: e.target.value });
    }

    //console.log('test');  react breaks if i uncomment this.  why?

    handleSubmit() {
        console.log('test');
        let newChirp = {
            name: this.state.newUser,
            message: this.state.newMessage
        }
        this.setState({ chirps: [...this.state.chirps, newChirp] })
        //i can get submit to create new chirps, but cannot get it to input the text box input into the chirps 
        //also, would like to have the chirps in order of newest on top, how to?
    }

    render() {
        return (
            <>
                <div className='jumbotron m-4 bg-success text-white text-center'>
                    <h1 className='display-4'>Chirpr</h1>
                </div>
                <div>
                    <Submit NewUser={this.newUser} newMessage={this.newMessage} handleSubmit={this.handleSubmit} />
                </div>
                <div className="card">
                    <Timeline chirps={this.state.chirps} />
                </div>
            </>
        );
    };
};


export default App;