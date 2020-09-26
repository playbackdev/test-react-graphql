import React, {useReducer} from 'react';
import {Posts} from './pages/Posts';
import {Profile} from "./pages/Profile";
import {Login} from "./pages/Login";
import {Redirect, Route, Switch} from 'react-router-dom';
import {AuthContext, authInitialState, authReducer, LOGIN} from "./model/authStore";
import './App.css';
import {checkAuth} from "./model/authStore";

function App() {

    const [state, dispatch] = useReducer(authReducer, authInitialState);
    //Имитация проверки на авторизацию
    //если бы был асинхронный запрос на сервер, можно было бы использовать например useEffect
    if (!state.user) {
        const user = checkAuth();
        if (user) {
            dispatch({type: LOGIN, user});
        }
    }

    return (
        <div className="app-wrapper">
            <div className="app-content">
                <AuthContext.Provider value={{state, dispatch}}>
                    {state.user ?
                        <Switch>
                            <Route path='/user/:userId' render={() => <Profile/>}/>
                            <Route exact path='/' render={() => <Posts/>}/>
                            <Redirect to='/'/>
                        </Switch>
                        :
                        <Switch>
                            <Route path='/login' render={() => <Login/>}/>
                            <Redirect to='/login'/>
                        </Switch>
                    }
                </AuthContext.Provider>
            </div>
        </div>
    );
}

export default App;
