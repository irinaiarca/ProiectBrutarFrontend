import React from "react";
import LoginScreen from "../loginScreen";
import App from "../app";
import { ReduxRouter } from 'redux-router';
import { Route, Link } from 'react-router';

// import {Router, Route} from "react-router";

// import createBrowserHistory from "history/lib/createBrowserHistory";


            // <Provider store={store}>
            //     {() => <Main url="comments.json" pollInterval={2000} />}
            // </Provider>
            // {renderDevTools(store)}
            
            
export default class MainView {
    static render() {
        // return <Router history={createBrowserHistory()}>
        //     <Route path="/" onEnter={this.requireAuthentication} component={App}>
        //         <Route path="login" component={LoginScreen} />
        //     </Route>
        // </Router>;
        // return <App><LoginScreen /></App>;
        return <ReduxRouter>
            <Route path="/" onEnter={this.requiresAuthentication}  component={App}>
                <Route path="login" component={LoginScreen} />
            </Route>
        </ReduxRouter>;
    }
}