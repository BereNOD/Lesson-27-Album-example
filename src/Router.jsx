import React from "react";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import Album from './pages/album'
import Home from './pages/home'
import Photo from './pages/photo'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/album/:albumId">
                <Album />
            </Route>
            <Route path="/photo">
                <Photo />
            </Route>
            <Route path="/" exact>
                <Home />
            </Route>
        </Switch>
    </BrowserRouter>
)

export default Router