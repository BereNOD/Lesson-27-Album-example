import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom'

import Blog from './pages/Blog'
import Post from './pages/Post'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/post">
                <Post />
            </Route>
            <Route path="/" exact>
                <Blog />
            </Route>
        </Switch>
    </BrowserRouter>
)

export default Router