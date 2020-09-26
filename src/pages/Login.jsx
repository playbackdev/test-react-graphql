import React, {useContext, useState} from "react";
import {AuthContext, LOGIN, loginUser} from "../model/authStore";
import classes from './Login.module.css';

export const Login = () => {
    const {dispatch} = useContext(AuthContext);
    let [login, setLogin] = useState('');
    let [message, setMessage] = useState('');

    const loginChangeHandler = (e) => {
        setLogin(e.target.value);
    };

    const onLoginClick = (e) => {
        e.preventDefault();
        if(login) {
            //имитация авторизации
            const user = loginUser(login);
            dispatch({type: LOGIN, user});
        } else {
            setMessage(<p className={classes.warning}>Enter you name!</p>);
        }
    };

    return <div className={classes.Login}>
        <div className={classes.LoginHeader}>
            <h2>Login Page</h2>
        </div>
        <div className={classes.LoginContent}>
            <p>Hello! Enter your Name</p>
            <form onSubmit={onLoginClick}>
                <input name='login' type='text' placeholder='Enter Username' value={login} onChange={loginChangeHandler}/>
                <button type='submit'>Login</button>
            </form>
            {message}
        </div>
    </div>

};