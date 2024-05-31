import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            userInfo : {
                name: 'Besal',
                location: 'Default'
            }
        }
        console.log(props);
    }

    async componentDidMount() {
        //API call
        const data = await fetch("https://api.github.com/users/akshaymarch7")
        const json = await data.json();
        this.setState({
            userInfo: json
        })

        console.log(json);
    }

    componentDidUpdate() {
        console.log("component did update");
    }

    componentWillUnmount() {
        console.log("component will unmount");
    }

    render() {
        console.log(this.state.userInfo)
        return (
            <div className="user-card">
                <button onClick={() => {
                    //  NEVER UPDATE STATE VARIABLES DIRECTLY
                    this.setState({count: this.state.count + 1})
                }}>Count increment</button>
                <h1>Count : {this.state.count}</h1>
                <h2>Name : {this.state.userInfo.name}</h2>
                <h3>Location : {this.state.userInfo.location}</h3>
                <h4>Github : besalraj30</h4>
            </div>
        )
    }
}

export default UserClass;