import React from "react";
import BaseComponent from "../baseComponent";
import jQuery from "jquery";
import { selfbind } from "../../helpers/decorators";
import { connect }  from "react-redux";
import { actions } from "../../helpers/util";

@connect((state) => state)
export default class LoginScreenComponent extends BaseComponent {
    constructor(...args) {
        super(require, ...args);
    }
    
    static propTypes = {
        dispatch: React.PropTypes.func.isRequired,
    }
    
    
    static contextTypes = {
        user: React.PropTypes.object.isRequired,
    }
    
    state = {
        items: [],
        currentRole: "",
        currentMail: "",
        currentName: "",
        password: "",
    }
    
    linkState(key) {
        return {
            value: this.state[key],
            requestChange: ((component, key) => {
                let partialState = {};
                return (value) => {
                    partialState[key] = value;
                    component.setState(partialState);
                }
            })(this, key),
        };
    }
    
    componentDidMount() {
        jQuery.get("https://baking-meth-sabinmarcu.c9.io/users/all/nameandrole", (response) => {
            this.setState({items: JSON.parse(response) });
        });
    }
    
    selectUser(user) {
        if (user.email !== "") {
            this.setState({currentRole: user.role, currentMail: user.email, currentName: user.name})
        }
    }
    
    @selfbind
    attemptLogin() {
        if (this.state.currentMail === "") {
            this.refs.chooseMessageSnackbar.show();
        }
        if (this.state.currentRole !== "admin") {
            this.props.dispatch(actions.main.setUser(
                {name: this.state.currentName, email: this.state.currentMail, role: this.state.currentRole}
            ));
            this.refs.loggedInSnackbar.show();
        }
        if (this.state.currentRole === "admin") {
            jQuery.post(`https://baking-meth-sabinmarcu.c9.io/users/${this.state.currentMail}/authenticate`, {password: this.state.password}, (data) => {
                data && this.props.dispatch(actions.main.setUser(
                    {name: this.state.currentName, email: this.state.currentMail, role: this.state.currentRole}
                ));
                data ? this.refs.loggedInSnackbar.show() : this.refs.wrongAuthenticationSnackbar.show();
            });
        }
    }
    
}