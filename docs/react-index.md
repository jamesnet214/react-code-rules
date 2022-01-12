```
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PortalApp from "./apps/portal/views/PortalApp.jsx";
import Login from "./apps/login/views/Login.jsx";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

let errorServiceMsg = "";

(async () => {
    let isError = false;
    let errorMsg = "";
    let isLogin = false;
    let sessionResult = null;
    let menuResult = null;
    let userInfo = null;
    let menus = [];
    let path = window.location.pathname;

    // external
    if (window.location.pathname === "/Account/Agent") {
        console.log("Check the Agent Login");
        await agentLogin();
    }
    else if (window.location.pathname === "/Account/Portal") {
        console.log("Check the Portal Login");
        await portalLogin();
    }
    else if ((path.substring(1) !== sessionStorage.getItem("LoginGoAfterAD")) && (path !== "/")) {
        sessionStorage.setItem("LoginGoAfterAD", "NONE");
    }
    else if (sessionStorage.getItem("LoginGoAfterAD") !== null)
        if (sessionStorage.getItem("loginGoAfterAD").length > 6) {
            console.log("Will Be Redirect After Login: " + sessionStorage.getItem("LoginGoAfterAD") + "(" + sessionStorage.getItem("LoginGoAfterAD").length + ")");        
            await checkADLoginAfter();
        }
    }

    try {
        sessionResult = await getSession();
        if(sessionResult["state"].isError) {
            console.log("Session is Not Found");
            isLogin = true;
        }
    }
}
```
