import { createContext, useCallback, useEffect, useState } from "react";

const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}
});

let logoutTimer;

const calcRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    
    const remainingDuration = adjExpirationTime - currentTime;
    return remainingDuration;
};

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime');

    const remainingTime = calcRemainingTime(storedExpirationDate);

    if(remainingTime <= 60000) {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    }

    return { token: storedToken, duration: remainingTime };
};

const AuthContextProvider = (props) => {
    const tokenData = retrieveStoredToken();
    let initToken;
    if(tokenData) {
        initToken = tokenData.token;
    }
    const [token, setToken] = useState(initToken);

    const userIsLoggedIn = !!token;
    // truthy, falsy를 Boolean 값으로 변경
    
    const logoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');

        if(logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }, []);

    const loginHandler = (token, expirationTime) => {
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', expirationTime);
        setToken(token);
        // const reminingTime = calcRemainingTime(expirationTime);

    };
    
    useEffect(() => {
        if(tokenData) {
            console.log(tokenData.duration);
            logoutTimer = setTimeout(logoutHandler, tokenData.duration);
        }

        return () => {
            clearTimeout(logoutTimer);
        }
    }, [tokenData, logoutHandler]);


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