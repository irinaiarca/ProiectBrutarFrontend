import React from "react";
import _ from "lodash";

const DropDownMenu = require('material-ui/lib/drop-down-menu'),
    TextField = require("material-ui/lib/text-field"),
    RaisedButton = require("material-ui/lib/raised-button"),
    Snackbar = require("material-ui/lib/snackbar");

export default class LoginScreenView {
    static get selectboxcomponent() {
        return <DropDownMenu autoWidth={false} style={{width: "100%", textAlign: "left"}} menuItems={
           this.state.items && 
                [ {email: "", role: "", name:"Who are you?"} ]
                    .concat(
                        this.state.items.map(it => true && it )
                    )
        } valueMember={"email"} displayMember={"name"} onChange={(event, index, obj) => this.selectUser(obj)} />
    }
    static get description() {
        if (this.state.currentRole === "") {
            return <span>You have no role!</span>
        }
        return <span>You're a {this.state.currentRole}</span>;
    }
    static get passwordbox() {
        return <span className={[this.styles.passwordbox, this.state.currentRole === "admin" && this.styles.active].join(" ")}>
            <TextField hintText="Password" type="password" valueLink={this.linkState("password")} />
        </span>
    }
    static get selectbox() {
        return <span className={this.styles.selectbox}>{this.views.selectboxcomponent}</span>;
    }
    static render() {
        return <span className={this.styles.wrapper}>
            <h1 className={this.styles.greeting}>Hi there!</h1>
            <h4 className={this.styles.description}>{this.views.description}</h4>
            {this.views.selectbox}
            {this.views.passwordbox}
            <Snackbar ref="chooseMessageSnackbar" message="You must choose a user first!" />
            <Snackbar ref="loggedInSnackbar" message="You have been logged in!" />
            <Snackbar ref="wrongAuthenticationSnackbar" message="You have been entered a wrong password!" />
            <RaisedButton label="Login" style={{marginTop: "30px"}} onClick={this.attemptLogin} />
        </span>;
    }
}