import React from "react";
import LoginScreen from "../loginScreen";
import App from "../app";
// import {Router, Route} from "react-router";

// import createBrowserHistory from "history/lib/createBrowserHistory";

export default class MainView {
    static render() {
        // return <Router history={createBrowserHistory()}>
        //     <Route path="/" onEnter={this.requireAuthentication} component={App}>
        //         <Route path="login" component={LoginScreen} />
        //     </Route>
        // </Router>;
        return <App><LoginScreen /></App>;
    }
}