import { User } from './User';
import { UserClass } from './UserClass';
import { Component } from 'react';

// Mounting Phase
/*
LifeCycle phases: 
1. Render Phase : -> constructor , render
2.Commit Phase: -> actual dom changes, componentDidMount
*/

// Updating phase -> due to setState with new API data
/*
LifeCycle phases: 
1. Render Phase : ->  render with new updated data
2.Commit Phase: -> actual dom changes, componentDidUpdate
*/

//Unmounting phase -> when
// ComponentWillUnMount -> this will be called when we change the page
// component is removed from screen

/*
order of lifeCycle method in parent child component in case of single children
- parent constructor
- parent render
- child1 constructor
- child1 Render
- child1 ComponentDidMount
-parent componentDidMount
- child render
- child component did update
*/

/*
order of lifeCycle method in parent child component in case of mutliple children
- parent constructor
- parent render
- child1 constructor
- child1 Render
-child2 contructor
-child2 render
- child1 ComponentDidMount
-child2 componentDidMount
-parent componentDidMount
- child render
- child component did update
*/
export class About extends Component {
  constructor(props) {
    super(props);
    console.log('parent constructor');
  }

  componentDidMount() {
    console.log('parent component did mount');
  }
  render() {
    console.log('parent render');
    return (
      <div>
        <h1>About class Component</h1>
        <User name={'Saurabh Chauhan (function)'} />
        <UserClass
          name={'Saurabh Chauhan (class)'}
          location={'Dehradun (class)'}
        />
        <UserClass
          name={'Risav Chauhan (class)'}
          location={'Dehradun (class)'}
        />
      </div>
    );
  }
}
