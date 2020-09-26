import React, {useContext} from "react";
import {useHistory} from 'react-router-dom';
import {AuthContext, LOGOUT, logoutUser} from "../model/authStore";
import classes from './NavBar.module.css'

export const NavBar = ({header, button}) => {

    const {state, dispatch} = useContext(AuthContext);
    const history = useHistory();

    const onLogoutClick = () => {
        logoutUser();
        dispatch({type: LOGOUT});
    };

    const onNavButtonClickHandler = () => {
        if(button) {
            history.push(button.link);
        }
    };

    return <div className={classes.NavBar}>
        {button && <button className={classes.NavBarButton} onClick={onNavButtonClickHandler}>{button.title}</button>}
        <h2 className={classes.Header}>{header}</h2>
        <p>
            {state.user? `Hello, ${state.user} !` : 'Hello!'}
        </p>
        <button className={classes.LogoutButton} onClick={onLogoutClick}>Logout</button>
    </div>
};