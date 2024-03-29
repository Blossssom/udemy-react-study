import { Component } from "react";
import Users from "./Users";
import classes from './UserFinder.module.css';
import UserContext from "../store/users-context";
import ErrorBoundary from "./ErrorBoundary";


class UserFinder extends Component {
    static contextType = UserContext; 

    constructor() {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        }
    }

    componentDidMount() {
        // send http req...
        // useEffect(..., []) 와 같은 역할
        this.setState({filteredUsers: this.context.users})
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.searchTerm !== this.state.searchTerm) {
            this.setState({filteredUsers: this.context.users.filter(v => v.name.includes(this.state.searchTerm))});
        }
    }

    searchChangeHandler(event) {
        this.setState({searchTerm: event.target.value});
    }

    render() {
        return(
            <>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <ErrorBoundary>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </>
        )
    }
}

export default UserFinder;