import { createContext, useState } from "react";

const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}
});

const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);

    const userIsLoggedIn = !!token;
    // truthy, falsy를 Boolean 값으로 변경

    const loginHandler = (token) => {
        setToken(token);
    };

    const logoutHandler = () => {
        setToken(null);
    };

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthContextProvider, AuthContext};