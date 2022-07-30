import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,

    };
  }

  toggleUsersHandler() {
    console.log(this)
    this.setState((prev) => {
      return {showUsers: !prev.showUsers};
      // 기존 값을 덮어쓰지 않고 병합해줌
    });
  }

  render() {
    const usersList = (
          <ul>
            {this.props.users.map((user) => (
              <User key={user.id} name={user.name} />
            ))}
          </ul>
        );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {/* class를 참조하기 위해 bind 사용 */}
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    )
  }
    
}


export default Users;
