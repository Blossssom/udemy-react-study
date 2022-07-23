import React, {useEffect, useState} from "react";

const AuthContexts = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
    // IDE 자동완성 및 default를 단단하게 만들기 위한 빈 함수
});
// context 객체 생성

export const AuthContextsProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    
        if (storedUserLoggedInInformation === '1') {
          setIsLoggedIn(true);
        }
      }, []);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    return (<AuthContexts.Provider value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler}}>
                {props.children}
            </AuthContexts.Provider>);
};
// 공급자 자체를 wrap 컴포넌트 형식으로 반환할 수 있다.
// login에 필요한 모든 로직을 context로 옮겨 관리한다.

export default AuthContexts;
