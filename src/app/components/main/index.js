import React from "react";
import BaseComponent from "../baseComponent";
import { connect } from "react-redux";
import { selfbind } from "../../helpers/decorators";

@connect((state) => {
    return {
        user: state.main.user,
    }
})
export default class MainComponent extends BaseComponent {
    
    constructor(...args) {
        super(require, ...args);
    }
    
    @selfbind
    requiresAuthentication(ns, rs) {
        const hasUser = (this.props &&
            this.props.user && 
            this.props.user.email && 
            this.props.user.name && 
            this.props.user.role);
        console.log("ROUTE", hasUser, ns.location.pathname);
        if (!hasUser && ns.location.pathname !== "/login") {
            rs({ nextPathname: ns.location.pathname }, '/login');
        } else if (hasUser && ns.location.pathname === "/login") {
            rs({ nextPathname: ns.location.pathname }, '/');
        }
    }
}