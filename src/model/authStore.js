import React from "react";
export const AuthContext = React.createContext();

export const LOGIN = 'authReducer/LOGIN';
export const LOGOUT = 'authReducer/LOGOUT';

export const authInitialState = {
    user: '',
    loggedIn: false
};

export const authReducer =(state, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                user: action.user,
                loggedIn: true
            };
        case LOGOUT:
            return {
                user: '',
                loggedIn: false
            };
        default:
            return state;
    }
};

export const checkAuth = () => {
    return localStorage.getItem('userName');
};

export const loginUser = (userName) => {
    localStorage.setItem('userName', userName);
    return userName;
};

export const logoutUser = () => {
    localStorage.removeItem('userName');
    return true;
};
