import React from "react";

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            userInfo: {
                name: "Dummy Name",
                location: "Dummy Location",
                avatar_url: null,
                contact: "<contact>"
            }
        };
    }
    componentDidMount() {
        fetch("https://api.github.com/users/" + 'Rohitsaini0444')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    userInfo: {
                        name: data.name,
                        location: data.location,
                        avatar_url: data.avatar_url,
                        contact: data.email
                    }
                });
            })
    }
    componentDidUpdate() {
        //  Uncomment below line to see how componentDidUpdate works
        //  alert("Component Did Update - " + this.state.count);
        console.log("Component Did Update");
    }
    componentWillUnmount() {
        console.log("Component Will Unmount");
    }
    render() {
        return (<div>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment Count {this.state.count}</button>
            <img src={this.state.userInfo.avatar_url} alt="User Avatar" width="100" className="profile-img"/>
            <h2>Name : {this.state.userInfo.name}</h2>
            <h3>Location : {this.state.userInfo.location}</h3>
            <h4>Contact : {this.state.userInfo.contact}</h4>
        </div>);
    }
}