import React from "react";
import LoginScreen from "../loginScreen";

export default class MainView {
    static render() {
        return <span className={this.styles.wrapper}>
            {this.props.children}
        </span>;
    }
}