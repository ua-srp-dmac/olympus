import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Landing from "./components/Landing";
import Contact from "./components/Contact";



export default ({ childProps }) =>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Landing} props={childProps} />
            <Route path="/contact" exact component={Contact} props={childProps} />
            
            { /* Finally, catch all unmatched routes */ }
            {/* <Route component={NotFound} /> */}
        </Switch>
    </BrowserRouter>