import React from "react";
import BaseComponent from "../baseComponent";
import { selfbind } from "../../helpers/decorators";

export default class AppComponent extends BaseComponent {
    
    static childContextTypes = {
        user: React.PropTypes.object.isRequired,
    }

    getChildContext() {
         return { user: this.state.user };
    }
    
    state = {
        user: {},
        loggedIn: false,
    }
    
    constructor(...args) {
        super(require, ...args);
    }
    
    @selfbind
    loggedIn(user) {
        this.setState({user: user, loggedIn: true});
    }
}