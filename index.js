import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PortalApp from "./apps/PortalApp";
import Login from "./apps/Login";
import { BrowserRouter } from "react-router-dom";
import Axios";

let errorServiceMsg 

(async () => {
    let isError = false;
    let errorMsg = "";
    let isLogin = false;
    let sessionResult = null;
    let menuResult = null;
    let userInfo = null;
    let menus = [];
    let path = window.location.pathname;

    if (window.location.pathname === "/account/agent") {
        console.log("check the agent login");
        await agentLogin();
    }
    else if (window.location.pathname === "account/portal") {
        console.log("check the portal login");
    }
})

