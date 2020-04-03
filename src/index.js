import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App' 
import Connexion from './Componants/Connexion'
import NotFound from './Componants/NotFound'
import * as serviceWorker from './serviceWorker'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const Root = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={ Connexion }></Route>
            <Route exact path='/pseudo/:pseudo' component={ App }></Route>
            <Route component={ NotFound }></Route>
        </Switch>
    </Router>
)
ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
