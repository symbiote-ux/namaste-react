import React from 'react';

export class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
      userInfo: {
        name: '',
        avatar_url: '',
        location: '',
      },
    };
    console.log('child constructor');
  }

  async componentDidMount() {
    console.log(this.props.name + ' child component did mount');
    //Order of Components Lifecycle -> constructor -> render -> componentDidMount
    //Make API call after intial rendering
    const data = await fetch('https://api.github.com/users/symbiote-ux');
    const json = await data.json();

    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    console.log('component did update');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    console.log('child render');
    // const { name, location } = this.props;
    const { count2 } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h1>From Class Component</h1>
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            })
          }
        >
          Increase count
        </button>
        <h1>Count2 : {count2}</h1>
        <img src={avatar_url} alt="avatar" />
        <h1>Name: {name}</h1>
        <h2>{location}</h2>
      </div>
    );
  }
}
